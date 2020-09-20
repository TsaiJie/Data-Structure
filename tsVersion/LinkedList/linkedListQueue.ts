import ArrayQueue, {Queue} from "../Queue/queue";

class ListNode<E> {
  public e: E;
  public next: ListNode<E>
  
  constructor(e: E = null, next: ListNode<E> = null) {
    this.e = e;
    this.next = next;
  }
  
  public toString(): string {
    return this.e.toString()
  }
}

// 没有虚拟头节点，⚠️链表为空的情况
// 链表头为队首出队，链表尾为队尾入队
// 带有尾节点
class LinkedListQueue<E> implements Queue<E> {
  private head: ListNode<E>;
  private tail: ListNode<E>;
  private size: number;
  
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  public dequeue(): E {
    if (this.isEmpty()){
      throw new Error("Cannot dequeue from an empty queue.")
    }
    const retNode:ListNode<E> = this.head;
    this.head = this.head.next;
    retNode.next = null;
    // 链表中只有一个元素 出队之后 就没有元素了 要维护一下tail
    if (this.head === null){
      this.tail = null
    }
    this.size ++;
    return retNode.e;
  }
  
  public enqueue(e: E): void {
    if (this.tail == null) {
      // 说明此时链表没有元素
      this.tail = new ListNode<E>(e);
      this.head = this.tail;
    } else {
      // 否则有元素
      this.tail.next = new ListNode<E>(e);
      this.tail = this.tail.next;
    }
    this.size ++;
  }
  
  public getFront(): E {
    if (this.isEmpty()){
      throw new Error("Cannot dequeue from an empty queue.")
    }
    return this.head.e;
  }
  
  public getSize(): number {
    return this.size;
  }
  
  public isEmpty(): boolean {
    return this.size === 0;
  }
  
  public toString(): string {
    let res = 'Queue: front ';
    let cur = this.head;
    while (cur != null){
      res += cur.toString() + ' -> ';
      cur = cur.next;
    }
    res += 'NULL tail';
    return res.toString();
    
  }
  
  
}
const queue = new LinkedListQueue<number>();
for (let i = 1; i < 10; i++) {
  queue.enqueue(i);
  console.log(queue.toString());
  if (i % 3 === 0) {
    queue.dequeue();
    console.log(queue.toString());
  }
}