export const priceNormalizer = (item: number) => {
  const arrayItem = item.toString().split('').reverse();
  const result = [];

  for (let i = 0; i < arrayItem.length; i += 1) {
    if (i % 3 === 0) {
      result.push(' ');
      result.push(arrayItem[i]);
    } else {
      result.push(arrayItem[i]);
    }
  }
  return result.reverse().join('').trim();
};
