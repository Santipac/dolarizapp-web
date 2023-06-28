import React, { useState } from 'react';
import { Input } from '../../stories/Input';
import { Button } from '../../stories/Button';
import { useDolar } from '../../hooks/useDolar';
import { getConversion } from '../../helpers/getConvertion';
import { Conversion } from '../../interfaces/dolar';
import { Modal } from '../../stories/Modal';
import { motion as m } from 'framer-motion';
import { container } from '../../utils/variantsAnimations';
import { Link } from 'react-router-dom';
import { AnimatedCharacter } from '../ui/AnimatedCharacter';
import Select from '../../stories/Select';
import { SelectOption } from '../../interfaces/select';
const containerAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const options: SelectOption[] = [
  { value: 'ARS', label: 'ARS' },
  { value: 'USD', label: 'USD' },
];

export const Calculate: React.FC = () => {
  const query = useDolar();
  const [currency, setCurrency] = useState<'USD' | 'ARS'>('USD');
  const [conversions, setConversions] = useState<Conversion[]>([]);
  const [amount, setAmount] = useState<string>('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (amount === '') return;
    const quotations = query.data?.filter(dolar => dolar.type === 'venta');
    if (!quotations) return;
    const convertedValues = getConversion(quotations, amount, currency);
    setConversions([...convertedValues]);
  };
  return (
    <div id="calcular" className="relative flex flex-col items-center mb-16">
      <Link
        to="/"
        className="ml-4 mt-4 absolute top-0 left-0 font-extrabold underline text-dark font-sans text-xl"
      >
        Volver al inicio
      </Link>
      {/* Form Container */}
      <section className="my-16 mx-auto max-w-xl flex justify-center items-center h-[45vh]">
        <m.section
          className="flex flex-col items-center gap-20"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <AnimatedCharacter text="Calcular" />
          <form
            onSubmit={handleSubmit}
            className="space-y-7 w-full flex flex-col px-2"
          >
            <div className="relative flex h-12 sm:h-14 border-2 border-dark w-full flex-row">
              <Select
                options={options}
                selectValue={currency}
                setSelectValue={setCurrency}
              />
              <Input value={amount} handleInput={setAmount} />
            </div>
            <Button type="submit" label="Convertir" />
          </form>
        </m.section>
      </section>

      {/* Card Container */}
      {conversions.length > 0 && (
        <m.div
          className="grid grid-cols-1 sm:grid-cols-2 auto-rows-auto md:grid-cols-3 gap-8 "
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
        >
          {conversions.map((conv, i) => (
            <m.div key={i} variants={itemAnimation}>
              <Modal
                currency={conv.convertedTo}
                value={conv.value}
                label={
                  conv.name === 'Dolar Contado con Liqui'
                    ? 'Dolar CCL'
                    : conv.name
                }
              />
            </m.div>
          ))}
        </m.div>
      )}
    </div>
  );
};
