import React from 'react';
import { Navbar } from '../ui/Navbar';
import { motion as m } from 'framer-motion';
import { container, item } from '../../utils/variantsAnimations';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full rounded-b-[4rem] lg:rounded-b-[7.5rem] bg-grey border-4 border-dark flex justify-center items-center relative">
      <Navbar />
      <div className="flex flex-col gap-8 text-center px-4">
        <m.div
          className="flex justify-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <m.h1
            className="text-dark text-5xl sm:text-8xl font-extrabold font-sans"
            variants={item}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Dolarizapp
          </m.h1>
        </m.div>

        <p className="font-sans font-medium text-sm sm:text-lg text-center ">
          Una app donde encontrarás distintas cotizaciones con información de
          las mismas
        </p>
        <div>
          <Link
            to="calculate"
            className="text-dark bg-greeny font-body cursor-pointer border-2 leading-none inline-block font-extrabold border-dark shadow-button px-6 py-3"
          >
            Calcular
          </Link>
        </div>
      </div>
    </section>
  );
};
