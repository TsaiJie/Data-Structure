class TreeNode {
  public e: number;
  public left: TreeNode;
  public right: TreeNode;
  
  constructor(e: number) {
    this.e = e;
    this.left = null;
    this.right = null;
  }
}

class BST {
  private root: TreeNode;
  private size: number;
  
  constructor() {
    this.root = null;
    this.size = 0;
  }
  
  public getSize(): number {
    return this.size
  }
  
  public isEmpty(): boolean {
    return this.size === 0;
  }
  
  // 向二分搜索树中添加新的元素e
  public add(e: number): void {
    if (this.root === null) {
      this.root = new TreeNode(e);
      this.size++;
    } else {
      this.addWithNode(this.root, e);
    }
  }
  
  // 向以node为根的二分搜索树中插入元素e，递归
  private addWithNode(node: TreeNode, e: number): void {
    // 当e和当前节点相等时直接return
    if (e === node.e) {
      return;
    } else if (e < node.e && node.left === null) {
      // 当e小于当前节点，并且当前节点的左孩子为空时
      node.left = new TreeNode(e);
      this.size++;
      return;
    } else if (e > node.e && node.right === null) {
      // 当e大于当前节点，并且当前节点的右孩子为空时
      node.right = new TreeNode(e);
      this.size++;
      return;
    }
    if (e < node.e) {
      // 当e小于当前节点，并且左孩子不为空时，继续往下查找
      this.addWithNode(node.left, e);
    } else {
      // 当e大于当前节点，并且右孩子不为空时，继续往下查找
      this.addWithNode(node.right, e);
    }
  }
  
  // 向二分搜索树中添加新的元素e, 第二种方法
  public add2(e: number): void {
    this.root = this.addWithNode2(this.root, e);
  }
  
  // 向二分搜索树中添加新元素e，返回出入新节点后二分搜索树的根
  private addWithNode2(node: TreeNode, e: number) {
    if (node === null) {
      this.size++;
      return new TreeNode(e);
    }
    if (e < node.e) {
      node.left = this.addWithNode2(node.left, e);
    } else if (e > node.e) {
      node.right = this.addWithNode2(node.right, e);
    }
    return node;
  }
}