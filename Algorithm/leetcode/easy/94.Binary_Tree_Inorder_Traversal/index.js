 const readline = require('readline');

 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 const input = [];
 
 rl.on('line', (line) => {
     input.push(JSON.parse(line));
 })
     .on('close', () => {
         const [arr] = input;
         console.log("\n");

         const n3 = new TreeNode(3, null, null);
         const n2 = new TreeNode(2, n3, null);
         const n1 = new TreeNode(1, null, n2);
         const result = inorderTraversal(n1);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });

const dfs = (root, result) => {
    if(root != null) {
        dfs(root.left, result);
        result.push(root.val);
        dfs(root.right, result);
    }
}
 
const inorderTraversal = (root) => {
    let result = [];

    dfs(root, result);
    
    return result;
};

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}