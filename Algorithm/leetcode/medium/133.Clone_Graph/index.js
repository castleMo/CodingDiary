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

         const result = cloneGraph();
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const cloneGraph = (node) => {
    const map = {};
    
    const _cloneGraph = (node) => {
        console.log({node, map});
        if(!node) return node;
        if(!map[node.val]) {
            map[node.val] = new Node(node.val);
            map[node.val].neighbors = node.neighbors.map(_cloneGraph);
        }
        return map[node.val];
    }

    return _cloneGraph(node);
};

class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
};