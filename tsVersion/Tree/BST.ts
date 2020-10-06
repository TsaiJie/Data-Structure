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
  private res: string = '';
  
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
  
  // 看二分搜索树中是否包含元素e
  public contains(e: number): boolean {
    return this.containsWithNode(this.root, e);
  }
  
  // 看以node为根的二分搜索树中是否含有元素e，递归
  private containsWithNode(node: TreeNode, e: number): boolean {
    if (node === null) {
      return false;
    }
    if (e === node.e) {
      return true;
    } else if (e < node.e) {
      return this.containsWithNode(node.left, e);
    } else {
      return this.containsWithNode(node.right, e);
    }
  }
  
  // 前序遍历
  public preOrder(): void {
    this.preOrderWithNode(this.root)
  }
  
  private preOrderWithNode(node: TreeNode): void {
    if (node === null) {
      return;
    }
    console.log(node.e);
    this.preOrderWithNode(node.left);
    this.preOrderWithNode(node.right);
  }
  
  // 中序遍历
  public inOrder(): void {
    this.inOrderWithNode(this.root);
  }
  
  private inOrderWithNode(node: TreeNode) {
    if (node === null) {
      return;
    }
    this.inOrderWithNode(node.left);
    console.log(node.e);
    this.inOrderWithNode(node.right);
  }
  
  // 后序遍历
  public postOrder(): void {
    this.postOrderWithNode(this.root);
  }
  
  private postOrderWithNode(node: TreeNode) {
    if (node === null) {
      return;
    }
    this.postOrderWithNode(node.left);
    this.postOrderWithNode(node.right);
    console.log(node.e)
  }
  
  public toString(): string {
    this.generateBSTString(this.root, 0);
    return this.res.toString();
  }
  
  // 生成以node为节点，深度为depth的描述二叉树的字符串
  private generateBSTString(node: TreeNode, depth: number): void {
    if (node === null) {
      this.res += this.generateDepthString(depth) + 'null\n';
      return;
    }
    this.res += this.generateDepthString(depth) + node.e + '\n';
    this.generateBSTString(node.left, depth + 1);
    this.generateBSTString(node.right, depth + 1);
  }
  
  private generateDepthString(depth: number): string {
    let res = '';
    for (let i = 0; i < depth; i++) {
      res += '--'
    }
    return res.toString();
  }
  
}

// 测试用例
const bst = new BST();
const nums = [5, 3, 6, 8, 4, 2];
for (const num of nums) {
  bst.add(num);
}
console.log('前序遍历');
bst.preOrder();
// console.log(bst.toString())
console.log('中序遍历'); //排序后的结果
bst.inOrder();
console.log('后序遍历'); //可以用来释放内存
bst.postOrder();