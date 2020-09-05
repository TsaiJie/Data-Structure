import MyArray from "./array";

class Student {
  private name: string;
  private score: number;
  constructor(studentName: string, studentScore: number) {
    this.name = studentName;
    this.score = studentScore;
  }
  public toString(): string {
    return `Student(name:${this.name}, score:${this.score})`;
  }
}

let arr = new MyArray<number>(20);
for (let i = 0; i < 10; i++){
  arr.addLast(i);
}
console.log(arr.toString());
arr.add(1, 100);
console.log(arr.toString());
arr.addFirst(-1);
console.log(arr.toString());
// [-1, 0, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.remove(2);
console.log(arr.toString());
arr.removeElement(4);
console.log(arr.toString());
arr.removeFirst();
console.log(arr.toString());

let arrObj = new MyArray<Student>();
arrObj.addLast(new Student("Alice", 100));
arrObj.addLast(new Student("Alice1", 90));
arrObj.addLast(new Student("Alice2", 80));
console.log(arrObj.find(new Student("Alice1", 90)));
console.log(arrObj.toString())