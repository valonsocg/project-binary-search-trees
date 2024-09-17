import Tree from "./binarySearchTrees.js";

function generateRandomArray(size, maxValue) {
  const array = [];
  for (let index = 0; index < size; index++) {
    array.push(Math.floor(Math.random() * maxValue));
  }
  return array;
}

const array = generateRandomArray(10, 100);
const tree = new Tree(array);

console.log("Initial Tree:");
tree.prettyPrint();
console.log("Is balanced:", tree.isBalanced());

console.log("Level Order:");
tree.levelOrder((node) => console.log(node.data));

console.log("Pre Order:");
tree.preOrder((node) => console.log(node.data));

console.log("In Order:");
tree.inOrder((node) => console.log(node.data));

console.log("Post Order:");
tree.postOrder((node) => console.log(node.data));

// Unbalance the tree
const extraNumbers = generateRandomArray(5, 200);
extraNumbers.forEach((num) => tree.insert(num));

console.log("Tree after adding elements > 100:");
tree.prettyPrint();
console.log("Is balanced:", tree.isBalanced());

console.log("Level Order:");
tree.levelOrder((node) => console.log(node.data));

console.log("Pre Order:");
tree.preOrder((node) => console.log(node.data));

console.log("In Order:");
tree.inOrder((node) => console.log(node.data));

console.log("Post Order:");
tree.postOrder((node) => console.log(node.data));

// Rebalance the tree
tree.rebalance();

console.log("Tree after rebalancing:");
tree.prettyPrint();
console.log("Is balanced:", tree.isBalanced());

console.log("Level Order:");
tree.levelOrder((node) => console.log(node.data));

console.log("Pre Order:");
tree.preOrder((node) => console.log(node.data));

console.log("In Order:");
tree.inOrder((node) => console.log(node.data));

console.log("Post Order:");
tree.postOrder((node) => console.log(node.data));
