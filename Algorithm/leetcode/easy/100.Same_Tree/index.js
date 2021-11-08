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
         const [] = input;
         console.log("\n");

        //  const p3 = new TreeNode(3);
        //  const p2 = new TreeNode(2);
        //  const p = new TreeNode(1, p2, p3);

        //  const q3 = new TreeNode(3);
        //  const q2 = new TreeNode(2);
        //  const q = new TreeNode(1, q2, q3);
        //  const result = isSameTree(p, q);

         const p2 = new TreeNode(2);
         const p = new TreeNode(1, p2);

         const q3 = new TreeNode(2);
         const q2 = new TreeNode(null);
         const q = new TreeNode(1, q2, q3);
         const result = isSameTree(p, q);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const isSameTree = (p, q) => {
    if(!p && !q) {
        return true;
    }
    
    if(!p && q || p && !q) {
        return false;
    }
    
    if(p.val !== q.val) {
        return false;
    }
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}