import Transition from '../components/ui/Transition';
import { Calculate } from '../components/views';

function CalculatePage() {
  return (
    <Transition>
      <main className="min-h-screen w-full bg-violet overflow-hidden scroll-smooth">
        <Calculate />
      </main>
    </Transition>
  );
}

export default CalculatePage;
