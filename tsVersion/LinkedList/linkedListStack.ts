import ArrayStack, {Stack} from "../Stack/stack";
import LinkedList from "./linkedList";

class LinkedListStack<E> implements Stack<E> {
  private list: LinkedList<E>;
  constructor() {
    this.list = new LinkedList<E>()
  }
  getSize(): number {
    return this.list.getSize();
  }
  
  isEmpty(): boolean {
    return this.list.isEmpty();
  }
  
  peek(): E {
    return this.list.getLast();
  }
  
  pop(): E {
    return this.list.removeFirst();
  }
  
  push(e: E): void {
    this.list.addFirst(e);
  }
  
  public toString(): string {
    let res = 'Stack: top ';
    res += this.list.toString()
    return res.toString();
  }
}

const stack = new LinkedListStack<number>();
for (let i = 0; i < 5; i++) {
  stack.push(i);
  console.log(stack.toString())
}
stack.pop()
console.log(stack.toString());