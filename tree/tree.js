/* 
     1
   /   \
  2     3
 / \   / \
4   5 6   7
*/

class Node {
  constructor(val = null, left = null, right = null) {
    this.val = val
    this.left = left;
    this.right = right;
  }

}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);


root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.left = new Node(6);
root.right.right = new Node(7);

function bfs(root) {
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node.val);
    if (node.left) {
      queue.push(node.left);
    } 
    if (node.right) {
      queue.push(node.right);
    }
  }
}

function dfs(root) {
  let stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    console.log(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
}

bfs(root);

console.log('-----');

dfs(root);