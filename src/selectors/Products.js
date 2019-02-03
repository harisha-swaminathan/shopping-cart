// Get filtered products

export default (products, { text, sortBy}) => {
  return products.filter((product) => {
    const textMatch = product.title.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'high') {
      return a.price < b.price ? 1 : -1;
    } else if (sortBy === 'low') {
      return a.price > b.price ? 1 : -1;
    }
  });
};
