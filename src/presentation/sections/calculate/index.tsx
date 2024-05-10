import { Link } from 'react-router-dom';
import Transition from '~/presentation/components/animated/Transition';

export function CalculatePage() {
  return (
    <Transition>
      <main className="min-h-screen w-full bg-violet overflow-hidden scroll-smooth p-4 space-y-8">
        <Link to="/" className="font-semibold text-xl underline">
          Volver al inicio
        </Link>
        <section className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <h1 className='text-7xl font-extrabold'>Convertir</h1>
        </section>
      </main>
    </Transition>
  );
}
