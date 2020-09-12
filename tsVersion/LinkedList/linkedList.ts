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

class LinkedList<E> {
  private dummyHead: ListNode<E>;
  private size: number;
  
  constructor() {
    this.dummyHead = new ListNode<E>(null, null);
    this.size = 0;
  }
  
  public getSize(): number {
    return this.size;
  }
  
  public isEmpty(): boolean {
    return this.size === 0;
  }


// 在链表的第index的位置添加新的元素e
  public add(index: number, e: E) {
    if (index < 0 || index > this.size) {
      throw new Error("Add failed. Illegal index");
    }
    
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    // const node = new ListNode<E>(e);
    // node.next = prev.next;
    // prev.next = node;
    prev.next = new ListNode<E>(e, prev.next)
    this.size++;
    
  }
  
  // 在链表最后插入元素
  public addLast(e: E): void {
    this.add(this.size, e);
  }
  
  public addFirst(e: E): void {
    // const node = new ListNode(e)
    // node.next = this.head;
    // this.head = node;
    this.add(0, e);
  }
}