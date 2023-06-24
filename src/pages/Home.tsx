import Transition from '../components/ui/Transition';
import { Hero } from '../components/views';

function HomePage() {
  return (
    <Transition>
      <main className="h-screen w-full bg-violet overflow-hidden scroll-smooth">
        <Hero />
      </main>
    </Transition>
  );
}

export default HomePage;
