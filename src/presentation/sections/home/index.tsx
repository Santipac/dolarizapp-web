import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { container } from '~/presentation/utils/variantsAnimations';
import { AnimatedCharacter } from '~/presentation/components/animated/AnimatedCharacter';
import { AnimatedTextWord } from '~/presentation/components/animated/AnimatedWord';
import { Navbar } from '~/presentation/components/ui/Navbar';

function HomePage() {
  return (
    <main className="h-screen w-full bg-violet overflow-hidden scroll-smooth">
      <section className="h-screen w-full  bg-grey border-4 border-dark flex justify-center items-center relative overflow-hidden">
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
    </main>
  );
}

export default HomePage;
