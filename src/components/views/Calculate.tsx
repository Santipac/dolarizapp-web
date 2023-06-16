import React, { useState } from 'react';
import { Input } from '../../stories/Input';
import { Button } from '../../stories/Button';
import { useDolar } from '../../hooks/useDolar';
import { getConversion } from '../../helpers/getConvertion';
import { Conversion } from '../../interfaces/dolar';

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
    <section className="mt-28 mx-auto max-w-xl flex justify-center items-center h-[50vh]">
      <section className="flex flex-col items-center gap-20">
        <h2 className="text-5xl sm:text-8xl font-extrabold">Calcular</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-7 w-full flex flex-col"
        >
          <Input
            value={inputValue}
            handleInput={setInputvalue}
            isReadOnly={false}
          />
          <Button type="submit" label="Convertir" />
        </form>
        {/* <div className="flex flex-col gap-4 ">
          {conversions.length > 0 && (
            <>
              {conversions.map((conv, i) => (
                <div
                  key={i}
                  className="h-16 bg-grey text-sm text-dark font-extrabold flex flex-col items-center"
                >
                  <h2>{conv.name}</h2>
                  <p>${conv.value}</p>
                </div>
              ))}
            </>
          )}
        </div> */}
      </section>
    </section>
  );
};
