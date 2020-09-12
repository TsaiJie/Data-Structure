import {Queue} from "./queue";
// 循环队列会浪费一个空间
// tail === front 循环队列为空
// (tail+1) % length = front 循环队列为满
// tail = (tail + 1) % length
// front = (front + 1) % length
export default class LoopQueue<E> implements Queue<E> {
  private data: E[] = [];
  private front: number;
  private tail: number;
  private size: number;
  
  constructor(capacity: number = 10 + 1) {
    this.data.length = capacity;
    this.front = 0;
    this.tail = 0;
    this.size = 0;
  }
  
  public getCapacity(): number {
    return this.data.length - 1;
  }
  
  public isEmpty(): boolean {
    return this.front === this.tail
  }
  
  public dequeue(): E {
    if (this.isEmpty()) {
      throw new Error("Cannot dequeue from an empty queue");
    }
    const ret = this.data[this.front];
    this.data[this.front] = null;
    this.front = (this.front + 1) % this.data.length;
    this.size--;
    if (this.size == Math.floor(this.getCapacity() / 4) && Math.floor(this.getCapacity() / 2) !== 0) {
      this.resize(Math.floor(this.getCapacity() / 2))
    }
    return ret;
  }
  
  public enqueue(e: E): void {
    if ((this.tail + 1) % this.data.length === this.front) {
      this.resize(this.getCapacity() * 2);
    }
    this.data[this.tail] = e;
    this.tail = (this.tail + 1) % this.data.length;
    this.size++;
  }
  
  public getFront(): E {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.data[this.front];
  }
  
  public getSize(): number {
    return 0;
  }
  
  private resize(newCapacity: number) {
    const newData = [] as E[];
    newData.length = newCapacity + 1;
    // 把原数组的元素放到新的数组中去
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[(i + this.front) % this.data.length]
    }
    this.data = newData;
    this.data.length = newCapacity + 1;
    this.front = 0;
    this.tail = this.size;
  }
  
  public toString(): string {
    let res: string = `Queue: size = ${this.size}, capacity = ${this.getCapacity()} \n`;
    res += 'front[';
    for (let i = this.front; i != this.tail; i = (i + 1) % this.data.length) {
      res += this.data[i];
      // 不是最后一个元素
      if ((i + 1) % this.data.length != this.tail) {
        res += ', ';
      }
    }
    res += '] tail'
    return res;
  }
}

const queue = new LoopQueue<number>();
for (let i = 1; i < 10; i++) {
  queue.enqueue(i);
  console.log(queue.toString());
  if (i % 3 === 0) {
    queue.dequeue();
    console.log(queue.toString());
  }
}