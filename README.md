# Binary Search Tree Project

This project implements a balanced Binary Search Tree (BST) data structure in JavaScript. It provides various operations and traversal methods for working with the tree.

## Features

- Tree construction from an array
- Insertion and deletion of nodes
- Finding nodes
- Tree balancing
- Various tree traversal methods:
  - Level Order
  - In-order
  - Pre-order
  - Post-order
- Height and depth calculations
- Balance checking
- Pretty printing of the tree structure

## Files

- `binarySearchTrees.js`: Contains the implementation of the `Node` and `Tree` classes.
- `main.js`: Demonstrates the usage of the Binary Search Tree with various operations.

## Usage

To use the Binary Search Tree:

1. Import the `Tree` class from `binarySearchTrees.js`.
2. Create a new tree instance with an array of numbers.
3. Use the various methods to manipulate and traverse the tree.

Example:

```javascript
import Tree from "./binarySearchTrees.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

tree.prettyPrint();
console.log("Is balanced:", tree.isBalanced());

// Perform various operations...

tree.rebalance();
console.log("Is balanced after rebalancing:", tree.isBalanced());
```

## Key Methods

- `insert(value)`: Insert a new node with the given value.
- `deleteItem(value)`: Remove a node with the given value.
- `find(value)`: Find and return a node with the given value.
- `levelOrder(callback)`: Traverse the tree in level order.
- `inOrder(callback)`, `preOrder(callback)`, `postOrder(callback)`: Perform depth-first traversals.
- `height(node)`: Calculate the height of a given node.
- `depth(node)`: Calculate the depth of a given node.
- `isBalanced()`: Check if the tree is balanced.
- `rebalance()`: Rebalance the entire tree.
- `prettyPrint()`: Print a visual representation of the tree.

## Implementation Details

- The tree is automatically balanced when created from an array.
- Duplicate values are removed during tree creation.
- The `rebalance()` method can be called at any time to rebalance the tree.

## Testing

The `main.js` file includes a series of operations to test the functionality of the Binary Search Tree:

1. Create a tree with random numbers.
2. Confirm it's balanced and perform various traversals.
3. Add new numbers to unbalance the tree.
4. Confirm it's unbalanced and perform traversals again.
5. Rebalance the tree.
6. Confirm it's balanced and perform final traversals.

Run `node main.js` to execute these tests and see the results.
