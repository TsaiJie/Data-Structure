class MyArray {
  private size: number;
  private data: number[];
  
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
  public getCapacity():number {
    return this.data.length;
  }
  // 判断数组是否为空
  public isEmpty():boolean {
    return this.size === 0;
  }
}