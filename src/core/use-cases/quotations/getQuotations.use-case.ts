import { DolarMapper } from '~/infrastructure/mappers/dolar.mapper';
import type { HttpAdapter } from '~/config/adapters/http/http.adapter';
import type { DollarResponse } from '~/infrastructure/interfaces/dolarApiResponses';
import type { Dollar } from '~/core/entities/dolar.entity';

export const getAllDollarQuotations = async (
  fetcher: HttpAdapter
): Promise<Dollar[]> => {
  const response = await fetcher.get<DollarResponse[]>('/v1/dolares');
  const quotations = response.map(quote =>
    DolarMapper.fromDolarApiToEntity(quote)
  );
  return quotations;
};
