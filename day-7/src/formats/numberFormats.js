const numberFormats = {
  en: {
    currency: {
      style: 'currency',
      currency: 'USD',
    },
    currencyNoDecimals: {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    },
    digitalSize: {
      style: 'unit',
      unit: 'kilobyte',
    },
  },
  fr: {
    currency: {
      style: 'currency',
      currency: 'EUR',
    },
    currencyNoDecimals: {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    },
    digitalSize: {
      style: 'unit',
      unit: 'kilobyte',
    },
  },
}
export default numberFormats
