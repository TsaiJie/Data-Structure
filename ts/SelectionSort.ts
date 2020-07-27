class SelectionSort {
  private Constructor() {}

  public static sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i
      for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      SelectionSort.swap(arr, i, minIndex)
    }
  }
  private static swap(arr: number[], i: number, j: number) {
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }
}

let arr = [1, 0, 5, 3, 6, 2, 9, 7]
SelectionSort.sort(arr)
console.log(arr)
