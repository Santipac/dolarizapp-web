import React, { useState } from 'react';
import { Input } from '../../stories/Input';
import { Button } from '../../stories/Button';
import { useDolar } from '../../hooks/useDolar';
import { getConversion } from '../../helpers/getConvertion';
import { Conversion } from '../../interfaces/dolar';
import { Modal } from '../../stories/Modal';
import { motion as m } from 'framer-motion';
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

export const Calculate: React.FC = () => {
  const query = useDolar();
  const [conversions, setConversions] = useState<Conversion[]>([]);
  const [inputValue, setInputvalue] = useState<string>('');

  console.log(conversions);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const quotations = query.data?.filter(dolar => dolar.type === 'venta');
    if (!quotations) return;
    const convertedValues = getConversion(quotations, inputValue);
    setConversions([...convertedValues]);
  };
  return (
    <div className="my-16 flex flex-col items-center">
      <section className=" mx-auto max-w-xl flex justify-center items-center h-[50vh]">
        <section className="flex flex-col items-center gap-20">
          <h2 className="text-5xl sm:text-8xl font-extrabold">Calcular</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-7 w-full flex flex-col"
          >
            <Input value={inputValue} handleInput={setInputvalue} />
            <Button type="submit" label="Convertir" />
          </form>
        </section>
      </section>
      {conversions.length > 0 && (
        <m.div
          className="grid grid-cols-1 sm:grid-cols-2 auto-rows-auto md:grid-cols-3 gap-8"
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
        >
          {conversions.map((conv, i) => (
            <m.div key={i} variants={itemAnimation}>
              <Modal
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
