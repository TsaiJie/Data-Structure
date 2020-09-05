export default class MyArray {
  private size: number;
  private data: number[] = [];
  
  /**
   *
   * @param capacity 数组的容量，默认为10
   */
  constructor(capacity: number = 10) {
    this.data.length = capacity;
    this.size = 0;
  }
  
  // 获取数组中元素个数
  public getSize(): number {
    return this.size;
  }
  
  // 获取数组的容量
  public getCapacity(): number {
    return this.data.length;
  }
  
  // 判断数组是否为空
  public isEmpty(): boolean {
    return this.size === 0;
  }
  
  // 向所有元素后添加一个新元素
  public addLast(e: number): void {
    this.add(this.size, e);
  }
  
  // 向所有元素后添加一个新元素
  public addFirst(e: number): void {
    this.add(0, e);
  }
  
  /**
   * 在index个位置插入一个新元素
   * @param index
   * @param e
   */
  public add(index: number, e: number): void {
    if (this.size === this.data.length) {
      throw new Error("Add failed. MyArray is full")
    }
    if (index < 0 || index > this.size) {
      throw  new Error("Add failed. Require index>=0 and index<=size ")
    }
    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = e;
    this.size++;
  }
  
  public toString(): string {
    let res: string = `MyArray: size = ${this.size}, capacity = ${this.data.length} \n`;
    res += '[';
    for (let i = 0; i < this.size; i++) {
      res += this.data[i];
      if (i != this.size - 1) {
        res += ', ';
      }
    }
    res += ']'
    return res;
  }
}