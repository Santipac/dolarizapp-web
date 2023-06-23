import { Conversion, Dolar } from '../interfaces/dolar';

export const getConversion = (quotations: Dolar[], inputValue: string) => {
  const convertions: Conversion[] = quotations.map(dolar => {
    return {
      name: dolar.name,
      value: (
        parseFloat(dolar.price.replace(',', '.')) * Number(inputValue)
      ).toFixed(2),
    };
  });
  return convertions;
};
