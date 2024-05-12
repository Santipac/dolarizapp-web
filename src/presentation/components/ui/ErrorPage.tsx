import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedCharacter } from '../animated/AnimatedCharacter';
import { container } from '~/presentation/utils/variantsAnimations';
import { motion as m } from 'framer-motion';

export const ErrorPage: React.FC = () => {
  return (
    <m.main
      className="h-screen w-full bg-grey border-dark flex justify-center items-center  overflow-hidden flex-col gap-5"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <AnimatedCharacter text="Oops!" />
      <p className='font-medium text-neutral-500'>Página no encontrada</p>
      <Link to="/" replace className="font-semibold underline text-xl text-orange">
        Volver al inicio
      </Link>
    </m.main>
  );
};
