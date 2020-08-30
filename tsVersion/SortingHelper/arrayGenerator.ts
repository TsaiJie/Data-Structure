const generateRandomArray = (n: number, bound: number): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * bound));
  }
  return arr;
}
export {generateRandomArray};