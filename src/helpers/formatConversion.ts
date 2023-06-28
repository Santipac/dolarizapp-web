export function formatConversion(price: number, currency: 'ARS' | 'USD') {
  const formatter = new Intl.NumberFormat(
    currency === 'ARS' ? 'es-AR' : 'en-US',
    {
      style: 'currency',
      currency: currency === 'ARS' ? 'ARS' : 'USD',
      currencyDisplay: 'code',
    }
  );

  return formatter.format(price);
}
