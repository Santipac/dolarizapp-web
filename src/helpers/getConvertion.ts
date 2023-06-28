import { Conversion, Dolar } from '../interfaces/dolar';

export const getConversion = (
  quotations: Dolar[],
  amount: string,
  currency: 'USD' | 'ARS'
) => {
  if (currency === 'USD') {
    const CONVERT_USD_TO_ARS: Conversion[] = quotations.map(dolar => {
      return {
        name: dolar.name,
        value: (
          parseFloat(dolar.price.replace(',', '.')) * Number(amount)
        ).toFixed(6),
        convertedTo: 'ARS',
      };
    });
    return CONVERT_USD_TO_ARS;
  }
  const CONVERT_ARS_TO_USD: Conversion[] = quotations.map(dolar => {
    return {
      name: dolar.name,
      value: (
        Number(amount) / parseFloat(dolar.price.replace(',', '.'))
      ).toFixed(6),
      convertedTo: 'USD',
    };
  });
  return CONVERT_ARS_TO_USD;
};
