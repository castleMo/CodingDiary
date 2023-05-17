 const readline = require('readline');

 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 const input = [];
 
 rl.on('line', (line) => {
     input.push(Number(line));
     input.push(line);
 })
     .on('close', () => {
         const [arr] = input;
         console.log("\n");
         const root = {
            val: 1,
            left: {
                val: 2,
                left: { val: 4, left: null, right: null, next: null },
                right: { val: 5, left: null, right: null, next: null },
                next: null
            },
            right: {
                val: 3,
                left: { val: 6, left: null, right: null, next: null },
                right: { val: 7, left: null, right: null, next: null },
                next: null
            },
            next: null
        };
         const result = connect(root);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const connect = (root) => {
    dfs(root, null);

    return root;
};

const dfs = (node, next) => {
    if(!node) return;
    node.next = next;
    dfs(node.left, node.right);
    dfs(node.right, node.next ? node.next.left : null);
}

class Node {
    constructor(val, left, right, next) {
        this.val = val === undefined ? null : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
        this.next = next === undefined ? null : next;
    }
};


  
  