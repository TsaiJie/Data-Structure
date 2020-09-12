import MyArray from "../Array/array";
// 出队的时间复杂度是O（n）
export interface Queue<E> {
  getSize(): number;
  isEmpty(): boolean;
  enqueue(e: E): void;
  dequeue(): E;
  getFront(): E;
}

class ArrayQueue<E> implements Queue<E>{
  private array: MyArray<E>;
  
  constructor(capacity: number = 10) {
    this.array = new MyArray<E>(capacity);
  }
  public dequeue(): E {
    return this.array.removeFirst();
  }
  
  public enqueue(e: E): void {
    this.array.addLast(e);
  }
  
  public getFront(): E {
    return this.array.getFirst();
  }
  
  public getSize(): number {
    return this.array.getSize();
  }
  
  public isEmpty(): boolean {
    return this.array.isEmpty();
  }
  public toString(): string {
    let res: string = `Queue: `;
    res += 'front[';
    for (let i = 0; i < this.array.getSize(); i++) {
      res += this.array.get(i);
      if (i != this.array.getSize() - 1) {
        res += ', ';
      }
    }
    res += '] tail'
    return res;
  }
}

const queue = new ArrayQueue<number>();
for (let i = 1; i < 10; i++) {
  queue.enqueue(i);
  console.log(queue.toString());
  if (i%3===0){
    queue.dequeue();
    console.log(queue.toString());
  }
}