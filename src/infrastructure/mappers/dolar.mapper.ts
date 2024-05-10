import { Dollar } from '~/core/entities/dolar.entity';
import { DollarResponse } from '../interfaces/dolarApiResponses';


export class DolarMapper {
  public static fromDolarApiToEntity(quote: DollarResponse): Dollar {
    return {
      id: crypto.randomUUID(),
      exchange: quote.casa,
      name: quote.nombre,
      buyPrice: quote.compra,
      sellPrice: quote.venta,
      updatedAt: quote.fechaActualizacion,
    };
  }
}
