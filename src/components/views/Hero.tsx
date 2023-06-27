import React from 'react';
import { Navbar } from '../ui/Navbar';
import { motion as m } from 'framer-motion';
import { container } from '../../utils/variantsAnimations';
import { Link } from 'react-router-dom';
import { AnimatedTextWord } from '../ui/AnimatedWord';
import { AnimatedCharacter } from '../ui/AnimatedCharacter';
import reversed from '../../../public/Illustration-Reversed.png';
import ilustration from '../../../public/Illustration.png';
export const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full rounded-b-[4rem] lg:rounded-b-[7.5rem] bg-grey border-4 border-dark flex justify-center items-center relative overflow-hidden">
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
      <img
        src={reversed}
        alt="ilustración de una mano con un billete "
        className="w-32 min-[550px]:w-fit object-contain absolute bottom-0 left-0"
      />
      <img
        src={ilustration}
        alt="ilustración de una mano con un billete "
        className="w-32 min-[550px]:w-fit object-contain absolute bottom-0 right-0"
      />
    </section>
  );
};
