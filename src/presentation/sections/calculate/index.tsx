import { Link } from 'react-router-dom';
import Transition from '~/presentation/components/animated/Transition';
import { motion as m } from 'framer-motion';
import { container } from '~/presentation/utils/variantsAnimations';
import { AnimatedCharacter } from '~/presentation/components/animated/AnimatedCharacter';
import Select, { SelectOption } from '~/presentation/components/ui/Select';
import { Input } from '~/presentation/components/ui/Input';
import { Button } from '~/presentation/components/ui/Button';
import { useState } from 'react';

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
  const [conversions, setConversions] = useState<[]>([]);
  const [amount, setAmount] = useState<string>('');

  const handleSubmit = () => {
    if (amount === '') return;
  };

  return (
    <Transition>
      <main className="min-h-screen w-full bg-violet overflow-hidden scroll-smooth p-4 space-y-8">
        <Link to="/" className="font-semibold text-xl underline">
          Volver al inicio
        </Link>
        <section className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <section className="my-16 mx-auto max-w-xl flex justify-center items-center h-[45vh]">
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
                    setSelectValue={setCurrency}
                  />
                  <Input value={amount} handleInput={setAmount} />
                </div>
                <Button type="submit" label="Convertir" />
              </form>
            </m.section>
          </section>
        </section>
      </main>
    </Transition>
  );
}
