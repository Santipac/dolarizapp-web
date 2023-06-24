import React from 'react';
import { Navbar } from '../ui/Navbar';
import { motion as m } from 'framer-motion';
import { container } from '../../utils/variantsAnimations';
import { Link } from 'react-router-dom';
import { AnimatedTextWord } from '../ui/AnimatedWord';
import { AnimatedCharacter } from '../ui/AnimatedCharacter';

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
          <AnimatedCharacter text="Dolarizapp" />
        </m.div>
        <AnimatedTextWord text="Una app donde encontrarás distintas cotizaciones con información de las mismas" />
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
