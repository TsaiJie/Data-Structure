import {selectionSort} from "../SelectionSort/selectionSort";

const isSorted = (arr: number[]): boolean => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i])
      return false
  }
  return true
}
const sortTest = (sortName: string, arr: number[]) => {
  const startTime = new Date().getTime();
  if (sortName === 'selectionSort')
    selectionSort(arr);
  const endTime = new Date().getTime();
  const time = (endTime - startTime) / 1000;
  if (!isSorted(arr))
    console.error(sortName + " :排序失败");
  console.log(`${sortName} 的排序时间是：${time}s; 数据规模是：${arr.length}`);
}

export default sortTest