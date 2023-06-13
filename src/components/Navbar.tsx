import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="p-4 w-full">
      <nav className="flex items-center justify-between">
        <h2 className="text-zinc-800 font-bold text-4xl ">Dolarizapp</h2>
        <button className="px-6 py-2 font-bold text-black bg-[#BEFF6C] border-2 border-black rounded">
          Calcular
        </button>
      </nav>
    </header>
  );
};
