import MyArray from "./array";

let arr = new MyArray(20);
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