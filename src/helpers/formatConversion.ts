export function formatConversion(price: number) {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    currencyDisplay: 'code',
  });

  return formatter.format(price);
}
