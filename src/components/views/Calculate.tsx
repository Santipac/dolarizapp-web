import React, { useState } from 'react';
import { Input } from '../../stories/Input';
import { Button } from '../../stories/Button';

export const Calculate: React.FC = () => {
  const [inputvalue, setInputvalue] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputvalue);
  };
  return (
    <section className="mt-28 mx-auto max-w-xl flex justify-center items-center h-[50vh]">
      <section className="flex flex-col items-center gap-20">
        <h2 className="text-5xl sm:text-8xl font-extrabold">Calcular</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-7 w-full flex flex-col"
        >
          <Input
            value={inputvalue}
            handleInput={setInputvalue}
            isReadOnly={false}
          />
          <Button type="submit" label="Convertir" />
        </form>
      </section>
    </section>
  );
};
