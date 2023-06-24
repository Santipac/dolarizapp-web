import { Calculate, Hero } from '../components/views';

function HomePage() {
  return (
    <main className="min-h-[200vh] w-full bg-violet overflow-hidden scroll-smooth">
      <Hero />
      <Calculate />
    </main>
  );
}

export default HomePage;
