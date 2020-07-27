interface Comparable<T> {
  comparableTo(object: T): number
}
class SelectionSortWithGeneric {
  private Constructor() {}

  public static sort<T extends Comparable<T>>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i
      for (let j = i; j < arr.length; j++) {
        if (arr[j].comparableTo(arr[minIndex]) < 0) {
          minIndex = j
        }
      }
      SelectionSortWithGeneric.swap(arr, i, minIndex)
    }
  }
  private static swap<T>(arr: T[], i: number, j: number) {
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }
}

class Student implements Comparable<Student> {
  private name: string
  private score: number
  constructor(name: string, score: number) {
    this.name = name
    this.score = score
  }
  comparableTo(object: Student): number {
    return this.score - object.score
  }
}

let arr2 = [
  new Student('tsai', 100),
  new Student('wang', 60),
  new Student('zhao', 80)
]
SelectionSortWithGeneric.sort(arr2)
console.log(arr2)
