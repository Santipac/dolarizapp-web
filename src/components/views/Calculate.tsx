import React, { useState } from 'react';
import { Input } from '../../stories/Input';
import { Button } from '../../stories/Button';
import { useDolar } from '../../hooks/useDolar';
import { getConversion } from '../../helpers/getConvertion';
import { Conversion } from '../../interfaces/dolar';
import { Modal } from '../../stories/Modal';
import { motion as m } from 'framer-motion';
import { container, item } from '../../utils/variantsAnimations';
import { Link } from 'react-router-dom';
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue === '') return;
    const quotations = query.data?.filter(dolar => dolar.type === 'venta');
    if (!quotations) return;
    const convertedValues = getConversion(quotations, inputValue);
    setConversions([...convertedValues]);
  };
  return (
    <div id="calcular" className="my-16 flex flex-col items-center">
      <Link
        to="/"
        className="ml-4 mt-4 fixed top-0 left-0 font-extrabold underline text-dark font-sans text-xl"
      >
        Back to home
      </Link>
      <section className=" mx-auto max-w-xl flex justify-center items-center h-[50vh]">
        {/* <Navbar /> */}
        <m.section
          className="flex flex-col items-center gap-20"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <m.h2
            className="text-5xl sm:text-8xl font-extrabold"
            variants={item}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Calcular
          </m.h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-7 w-full flex flex-col"
          >
            <Input value={inputValue} handleInput={setInputvalue} />
            <Button type="submit" label="Convertir" />
          </form>
        </m.section>
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
