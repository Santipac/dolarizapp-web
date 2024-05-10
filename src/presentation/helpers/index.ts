import { Dollar } from "~/core/entities/dolar.entity";
import { CONVERTION } from "~/infrastructure/interfaces/convertion";
import { QUOTE_TYPE } from "~/infrastructure/interfaces/quote";

export function formatCurrency(price: number, currency: CONVERTION) {
    const formatter = new Intl.NumberFormat(
        currency === CONVERTION.USD_TO_ARS ? 'es-AR' : 'en-US',
        {
            style: 'currency',
            currency: currency === CONVERTION.USD_TO_ARS ? 'ARS' : 'USD',
        }
    );

    return formatter.format(price);
}


export function getQuoteDescription(type: QUOTE_TYPE): string | null {
    switch (true) {
        case type === QUOTE_TYPE.OFICIAL:
            return 'Cotización del dólar estadounidense en el mercado oficial. Es decir, el precio de compra y venta de dólares en bancos y casas de cambio autorizadas por el Banco Central de la República Argentina (BCRA).'
        case type === QUOTE_TYPE.BLUE:
            return 'Cotización del dólar estadounidense en el mercado paralelo o informal. Es decir, el precio de compra y venta de dólares en cuevas o casas de cambio no autorizadas por el Banco Central de la República Argentina (BCRA).'
        case type === QUOTE_TYPE.BOLSA:
            return 'Cotización del dólar estadounidense en el mercado bursátil. Es decir, el precio de compra y venta de dólares en el mercado de valores. También conocido como Dólar MEP.'
        case type === QUOTE_TYPE.TARJETA:
            return 'Es el valor de la cotización del dólar estadounidense en el mercado oficial, más el impuesto PAIS (30%), el impuesto a las ganancias (100%) y el impuesto a cuenta de bienes personales (25%).'
        case type === QUOTE_TYPE.CCL:
            return 'Cotización del dólar estadounidense en el mercado bursátil. Es decir, el precio de compra y venta de dólares en el mercado de valores. También conocido como Dólar CCL.'
        case type === QUOTE_TYPE.CRYPTO:
            return 'Cotización del dólar estadounidense en el mercado de criptomonedas. Es decir, el precio de compra y venta de dólares en el mercado de criptoactivos.'
        case type === QUOTE_TYPE.MAYORISTA:
            return 'Cotización del dólar estadounidense en el mercado mayorista. Es decir, el precio de compra y venta de dólares en el mercado interbancario.'
        default:
            return null
    }
}
export function getQuoteLabel(type: QUOTE_TYPE): string | null {
    switch (true) {
        case type === QUOTE_TYPE.CCL:
            return 'CCL'
        default:
            return type
    }
}

type GetConvertionParams = {
    quote: Dollar
    value: number
    convertion: CONVERTION
}
export function getConvertion({ convertion, quote, value }: GetConvertionParams): Dollar {
    if (convertion === CONVERTION.ARS_TO_USD) {
        return { ...quote, buyPrice: Number((value / quote.buyPrice).toFixed(2)), sellPrice: Number((value / quote.sellPrice).toFixed(2)) }
    }
    if (convertion === CONVERTION.USD_TO_ARS) {
        return { ...quote, buyPrice: value * quote.buyPrice, sellPrice: value * quote.sellPrice }
    }
    return quote
}