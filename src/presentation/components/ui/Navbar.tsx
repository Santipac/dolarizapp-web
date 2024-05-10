import React from 'react';
import Marquee from 'react-fast-marquee';
import { Loader2 } from 'lucide-react';
import { useQuotations } from '~/presentation/hooks/useQuotation';
import { Badge } from './Badge';
import { getQuoteLabel } from '~/presentation/helpers';
import { QUOTE_TYPE } from '~/infrastructure/interfaces/quote';

export const Navbar: React.FC = () => {
  const { status, data } = useQuotations();

  console.log({ data });
  if (status === 'pending') {
    return (
      <header className="w-full sm:max-w-4xl absolute top-0 py-4 overflow-x-hidden flex justify-center items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin" />
      </header>
    );
  }

  return (
    <header className="w-full sm:max-w-4xl absolute top-0 py-4 overflow-x-hidden flex flex-col items-center gap-4">
      <Marquee autoFill>
        {data?.map((dolar, i) => (
          <Badge
            key={i}
            primary={i % 2 === 0}
            label={`$${
              i % 2 === 0 ? dolar.buyPrice : dolar.sellPrice
            } Dólar ${getQuoteLabel(dolar.name as QUOTE_TYPE)}`}
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
