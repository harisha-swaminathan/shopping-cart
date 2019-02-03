// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });
  
  // SORT_BY_DATE
  export const priceHigh = () => ({
    type: 'SORT_BY_HIGH'
  });
  
  // SORT_BY_AMOUNT
  export const priceLow = () => ({
    type: 'SORT_BY_LOW'
  });
  
  