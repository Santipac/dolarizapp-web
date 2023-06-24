interface IDolarInfo {
  [key: string]: string[];
}

const dolarInfo: IDolarInfo = {
  'Dolar Blue': [
    'El Dolar Blue es el dolar que uno puede conseguir en el mercado negro o paralelo, fuera del sistema bancarizado y oficial. Generalmente su cotización es superior a la del dolar oficial y, a más control cambiario o restricciones para acceder al dolar oficial, este suele aumentar su valor.',
    'Todo aquel que tiene un remanente mensual de pesos y lo quiere ahorrar, sabe que ahorrar en pesos no es buena opción por la inflación y demás. Por esa razón es que intenta convertirlo a otra moneda y así poder guardarlo sin perder -tanto- poder adquisitivo. Tener pesos normalmente hace que con el paso de los meses, debido a la inflación, pierdas poder adquisitivo.',
  ],
  'Dolar Oficial': [],
  'Dolar CCL': [
    'El Dólar CCL es una operación legal que se realiza en el mercado mediante compra en el mercado local de bonos que operan en el mercado extranjero, para su posterior liquidación en el exterior. Es una forma de disponer de Dólares en el exterior.',
    'El Dólar CCL es un instrumento financiero más avanzado, generalmente utilizado por particulares que quieren invertir en acciones de bolsas internacionales, por empresas argentinas que importan productos o servicios y tienen que girar el pago de ese dinero al exterior, o empresas internacionales que tienen sede en Argentina, y estas sedes tienen que girar dinero a sus casas matrices en el exterior.',
  ],
  'Dolar Bolsa': [
    'El Dólar MEP o Bolsa es una operación legal y una forma ilimitada de acceder a dólares a través del mercado. Su sistema es simple, consiste en la compra en pesos de ciertos bonos del Estado (ejemplo: AL30 o AY35) y su posterior venta en el mercado, cobrándose por ello en dólares.',
    'El Dólar MEP es una forma legal y muy práctica de acceder a la moneda estadounidense debido a que no tiene una limitación de volumen; si uno tiene el dinero en el banco (es decir dinero en blanco) podrá operar Dólar MEP sin problemas.',
  ],
  'Dolar turista': [
    'El Dólar Turista en realidad no es una cotización propiamente, sino que parte del Dólar Oficial con los impuestos agregados. Su precio surge del Dólar Oficial + 30% de Impuesto PAÍS + 35% de recargo.',
    'Si, el Dólar Turista la tiene. Dejando de lado cuestiones como la cotización (de este tipo de cambio y de otros, que siempre varían), tiene la limitación de un cupo máximo de 200 USD mensuales por persona.',
  ],
};
export default dolarInfo;
