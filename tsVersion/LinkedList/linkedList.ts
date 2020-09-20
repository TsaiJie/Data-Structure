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

export default class LinkedList<E> {
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
  
  // 获取链表的第index的位置的元素
  public get(index: number): E {
    if (index < 0 || index > this.size) {
      throw new Error("Get failed. Illegal index");
    }
    let cur = this.dummyHead.next;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur.e;
  }
  
  public getFirst(): E {
    return this.get(0);
  }
  
  public getLast(): E {
    return this.get(this.size - 1)
  }
  
  // 修改链表中的第index个位置的元素为e
  public set(index: number, e: E) {
    if (index < 0 || index >= this.size) {
      throw new Error("Set failed. Illegal index.")
    }
    let cur = this.dummyHead.next;
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    cur.e = e;
  }
  
  // 查找链表中是否存在元素e
  public contains(e: E) {
    let cur = this.dummyHead.next;
    while (cur != null) {
      if (cur.e === e) {
        return true
      }
      cur = cur.next;
    }
    return false;
  }
  public toString():string {
    let res = "";
    let cur = this.dummyHead.next;
    while (cur != null) {
      res += `${cur} -> `;
      cur = cur.next;
    }
    res += 'NULL';
    return res. toString()
  }
  // 从链表中删除index位置的元素，返回删除的元素
  public remove(index: number): E {
    if (index < 0 || index >= this.size) {
      throw new Error("Remove failed. Index is illegal");
    }
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    const retNode = prev.next;
    prev.next = retNode.next;
    retNode.next = null;
    this.size --;
    return retNode.e;
  }
  // 删除第一个元素
  public removeFirst(): E {
    return this.remove(0);
  }
  // 删除最后一个元素
  public removeLast(): E {
    return this.remove(this.size - 1);
  }
  
}

let linkedList = new LinkedList<number>();
for (let i = 0; i < 5; i++) {
  linkedList.addFirst(i);
  console.log(linkedList.toString());
}
linkedList.add(2,666)
console.log(linkedList.toString());
linkedList.removeFirst();
console.log(linkedList.toString());
linkedList.removeLast();
console.log(linkedList.toString());