export interface ResponseData {
  casa: Casa;
}

export interface Casa {
  compra: string;
  venta: string;
  agencia: string;
  nombre: string;
  variacion?: string;
  ventaCero?: string;
  decimales?: string;
  mejor_compra?: string;
  mejor_venta?: string;
  fecha?: string;
  recorrido?: string;
  afluencia?: Afluencia;
  observaciones?: Afluencia;
}

type Afluencia = unknown;

export interface Dolar {
  name: string;
  price: string;
  type: 'compra' | 'venta';
}

export interface Conversion {
  name: string;
  value: string;
  convertedTo: 'USD' | 'ARS';
}
