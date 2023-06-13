import React from 'react';
import { Button } from '../../stories/Button';

export const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full rounded-b-[4rem] lg:rounded-b-[7.5rem] bg-grey border-4 border-dark flex justify-center items-center">
      <div className="flex flex-col gap-8 text-center px-4">
        <h1 className="text-dark text-4xl sm:text-8xl font-extrabold font-sans">
          Dolarizapp
        </h1>
        <p className="font-sans font-medium text-sm sm:text-lg text-center ">
          Una app donde encontrarás distintas cotizaciones con información de
          las mismas
        </p>
        <div>
          <Button size="large" label="Calcular" />
        </div>
      </div>
    </section>
  );
};
