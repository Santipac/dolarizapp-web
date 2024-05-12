import { Link } from 'react-router-dom';
import Transition from '~/presentation/components/animated/Transition';
import { motion as m } from 'framer-motion';
import { container } from '~/presentation/utils/variantsAnimations';
import { AnimatedCharacter } from '~/presentation/components/animated/AnimatedCharacter';
import Select, { SelectOption } from '~/presentation/components/ui/Select';
import { Input } from '~/presentation/components/ui/Input';
import { Button } from '~/presentation/components/ui/Button';
import { useState } from 'react';
import { useQuotations } from '~/presentation/hooks/useQuotation';
import { getConvertion } from '~/presentation/helpers';
import { Dollar } from '~/core/entities/dolar.entity';
import { Card } from '~/presentation/components/ui/Card';

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

export function CalculatePage() {
  const [currency, setCurrency] = useState<'USD' | 'ARS'>('USD');
  const [convertions, setConvertions] = useState<Dollar[]>([]);
  const [amount, setAmount] = useState<string>('');
  const quotes = useQuotations();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (amount === '') return;
    const conv = quotes.data!.map(quote =>
      getConvertion({ amount: Number(amount), quote, convertion: currency })
    );
    setConvertions(conv);
  };

  const handleChangeCurrency = (value: 'USD' | 'ARS') => {
    setConvertions([]);
    setCurrency(value);
  };

  const handleInputChange = (value: string) => {
    setAmount(value);
  };

  return (
    <Transition>
      <main className="min-h-screen w-full bg-violet overflow-hidden scroll-smooth p-4 space-y-8 pb-12">
        <Link to="/" className="font-semibold text-xl underline">
          Volver al inicio
        </Link>
        <section className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <section className="my-16 w-full mx-auto  flex justify-center items-center h-[45vh]">
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
                    handleChangeCurrency={handleChangeCurrency}
                  />
                  <Input value={amount} handleInput={handleInputChange} />
                </div>
                <Button type="submit" label="Convertir" />
              </form>
            </m.section>
          </section>
          {/* Card Container */}
          {convertions.length > 0 && (
            <m.div
              className="w-full place-items-center grid grid-cols-1 md:grid-cols-2 auto-rows-auto lg:grid-cols-3 gap-8 "
              variants={containerAnimation}
              initial="hidden"
              animate="visible"
            >
              {convertions.map((conv, i) => (
                <m.div key={i} variants={itemAnimation} className="w-full">
                  <Card convertion={conv} currency={currency} />
                </m.div>
              ))}
            </m.div>
          )}
        </section>
      </main>
    </Transition>
  );
}
