import { CopyCheckIcon, Files, HelpCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Dollar } from '~/core/entities/dolar.entity';
import { QUOTE_TYPE } from '~/infrastructure/interfaces/quote';
import {
  formatConversion,
  getQuoteDescription,
  getQuoteLabel,
} from '~/presentation/helpers';
import Tooltip from './Tooltip';

interface CardProps {
  convertion: Dollar;
  currency: 'USD' | 'ARS';
}

type Copy = {
  isCopied: boolean;
  price: 'SELL' | 'BUY';
};

const initialCopyState: Copy = {
  isCopied: false,
  price: 'SELL',
};

export const Card: React.FC<CardProps> = ({ convertion, currency }) => {
  const [copy, setCopy] = useState<Copy>(initialCopyState);

  const onHandleCopy = (value: string, priceType: 'SELL' | 'BUY') => {
    navigator.clipboard.writeText(`${value}`);
    setCopy({ isCopied: true, price: priceType });
    setTimeout(() => {
      setCopy(initialCopyState);
    }, 3000);
  };

  return (
    <article className="relative w-full h-fit gap-2 rounded-2xl px-4 py-3 bg-grey  shadow-card-modal flex flex-col border-2 border-black">
      <h2 className="text-3xl uppercase font-extrabold text-dark flex items-center gap-2">
        {getQuoteLabel(convertion.name as QUOTE_TYPE)}
        <Tooltip
          message={getQuoteDescription(convertion.name as QUOTE_TYPE) ?? ''}
        >
          <HelpCircle className="h-6 w-6 text-black/70" />
        </Tooltip>
      </h2>
      <section className="flex flex-col">
        <h3 className="font-semibold text-orange text-xl">Compra</h3>
        <section className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-semibold text-dark  truncate">
            {formatConversion(Number(convertion.buyPrice), currency)}
          </h2>
          <button
            className="w-min"
            onClick={() =>
              onHandleCopy(
                formatConversion(Number(convertion.buyPrice), currency),
                'BUY'
              )
            }
          >
            {copy.isCopied && copy.price === 'BUY' ? (
              <CopyCheckIcon />
            ) : (
              <Files />
            )}
          </button>
        </section>
      </section>
      <section className="flex flex-col">
        <h3 className="font-semibold text-orange text-xl">Venta</h3>
        <section className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-semibold text-dark truncate w-min">
            {formatConversion(Number(convertion.sellPrice), currency)}
          </h2>
          <button
            className="w-min"
            onClick={() =>
              onHandleCopy(
                formatConversion(Number(convertion.sellPrice), currency),
                'SELL'
              )
            }
          >
            {copy.isCopied && copy.price === 'SELL' ? (
              <CopyCheckIcon />
            ) : (
              <Files />
            )}
          </button>
        </section>
      </section>
    </article>
  );
};
