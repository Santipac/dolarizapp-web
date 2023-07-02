import { Dolar, ResponseData } from '../interfaces/dolar';
import { useQuery } from 'react-query';
import axios from 'axios';

const getQuotations = async (): Promise<Dolar[]> => {
  const { data } = await axios.get<ResponseData[]>(
    'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
  );

  const quotations: Dolar[] = data.reduce((arr: Dolar[], { casa }) => {
    const buyPrice = casa.compra;
    const sellPrice = casa.venta;
    const name = casa.nombre;

    if (
      !buyPrice.includes('No Cotiza') &&
      name.includes('Dolar ') &&
      buyPrice !== '0'
    ) {
      arr.push({ name, price: buyPrice, type: 'compra' });
    }

    if (
      !sellPrice.includes('No Cotiza') &&
      name.includes('Dolar ') &&
      sellPrice !== '0'
    ) {
      arr.push({ name, price: sellPrice, type: 'venta' });
    }

    return arr;
  }, []);

  return quotations;
};

export const useDolar = () => {
  const query = useQuery(['quotations'], getQuotations, {
    staleTime: 15 * 1000,
    keepPreviousData: true,
  });
  return query;
};
