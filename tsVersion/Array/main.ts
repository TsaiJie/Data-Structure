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