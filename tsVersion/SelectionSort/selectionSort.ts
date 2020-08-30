import {generateRandomArray} from "../SortingHelper/arrayGenerator";
import sortTest from "../SortingHelper/sortingHelper";

export const selectionSort = (arr: number[]) => {
  // arr[0..i]是有序的，arr[i..n]是无序的
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        swap(arr, minIndex, j)
      }
    }
  }
}
const swap = (arr: number[], minIndex: number, j: number) => {
  let t = arr[minIndex];
  arr[minIndex] = arr[j];
  arr[j] = t;
}


const dataSize = [10000, 100000]
for (const n of dataSize ) {
  const arr = generateRandomArray(n, n);
  sortTest('selectionSort', arr)
}