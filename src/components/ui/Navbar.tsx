import React from 'react';
import { Badge } from '../../stories/Badge';

import Marquee from 'react-fast-marquee';
import { useDolar } from '../../hooks/useDolar';
import { Loader2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const query = useDolar();

  if (query.isFetching || query.isLoading) {
    return (
      <header className="w-full sm:max-w-4xl absolute top-0 py-4 overflow-x-hidden flex justify-center items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin" />
      </header>
    );
  }

  return (
    <header className="w-full sm:max-w-4xl absolute top-0 py-4 overflow-x-hidden flex flex-col items-center gap-4">
      <Marquee autoFill>
        {query.data?.map((dolar, i) => (
          <Badge
            key={i}
            primary={i % 2 === 0}
            label={`$${dolar.price} - ${
              dolar.name === 'Dolar Contado con Liqui'
                ? 'Dolar CCL'
                : dolar.name
            }`}
          />
        ))}
      </Marquee>

      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2 font-semibold uppercase">
          <div className="h-3 w-3 rounded-full bg-greeny border border-dark" />{' '}
          Compra
        </span>
        <span className="flex items-center gap-2 font-semibold uppercase">
          <div className="h-3 w-3 rounded-full bg-reddy border border-dark" />{' '}
          Venta
        </span>
      </div>
    </header>
  );
};
