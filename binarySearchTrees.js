class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export default class Tree {
  constructor(arr) {
    arr = [...new Set(arr)].sort((a, b) => a - b);
    this.root = this.buildTree(arr, 0, arr.length - 1);
  }

  buildTree(arr, start, end) {
    if (start > end) return null;

    let mid = parseInt((start + end) / 2);
    let node = new Node(arr[mid]);

    node.left = this.buildTree(arr, start, mid - 1);
    node.right = this.buildTree(arr, mid + 1, end);

    return node;
  }

  insert(value, root = this.root) {
    if (root === null) return new Node(value);

    if (root.data === value) {
      return root;
    }

    if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else if (value > root.data) {
      root.right = this.insert(value, root.right);
    }

    return root;
  }

  deleteItem(value, root = this.root) {
    if (root === null) return null;

    if (value < root.data) {
      root.left = this.deleteItem(value, root.left);
    } else if (value > root.data) {
      root.right = this.deleteItem(value, root.right);
    } else {
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      const minNode = this.findMin(root.right);
      root.data = minNode.data;
      root.right = this.deleteItem(minNode.data, root.right);
    }

    return root;
  }

  findMin(root) {
    while (root.left !== null) {
      root = root.left;
    }
    return root;
  }

  find(value, root = this.root) {
    if (root === null || root.data === value) return root;
    if (value < root.data) return this.find(value, root.left);
    return this.find(value, root.right);
  }

  levelOrder(callback) {
    if (!callback) throw new Error("Callback is required!");
    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.shift();
      if (node !== null) {
        callback(node);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  }

  inOrder(callback, node = this.root) {
    if (!callback) throw new Error("Callback is required!");
    if (node === null) return;
    this.inOrder(callback, node.left);
    callback(node);
    this.inOrder(callback, node.right);
  }

  preOrder(callback, node = this.root) {
    if (!callback) throw new Error("Callback is required!");
    if (node === null) return;
    callback(node);
    this.preOrder(callback, node.left);
    this.preOrder(callback, node.right);
  }

  postOrder(callback, node = this.root) {
    if (!callback) throw new Error("Callback is required!");
    if (node === null) return;
    this.postOrder(callback, node.left);
    this.postOrder(callback, node.right);
    callback(node);
  }

  height(node = this.root) {
    if (node === null) return -1;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node, root = this.root, currentDepth = 0) {
    if (root === null) return -1;
    if (node.data === root.data) return currentDepth;

    if (node.data < root.data) {
      return this.depth(node, root.left, currentDepth + 1);
    } else {
      return this.depth(node, root.right, currentDepth + 1);
    }
  }

  isBalanced(node = this.root) {
    if (node === null) return true;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  rebalance() {
    const nodes = [];
    this.inOrder((node) => nodes.push(node.data));
    this.root = this.buildTree(nodes, 0, nodes.length - 1);
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
