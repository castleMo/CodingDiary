 const readline = require('readline');

 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 const input = [];
 
 rl.on('line', (line) => {
     input.push(line);
 })
     .on('close', () => {
         const [l1, l2] = input.map(JSON.parse);
         let list1 = undefined;
         let list2 = undefined;

         l1.forEach(item => {
            if (list1 === undefined) {
                list1 = new ListNode(item);
            } else {
                const newNode = new ListNode(item);
                newNode.next = list1;
                list1 = newNode;
            }
         });

         l2.forEach(item => {
            if (list2 === undefined) {
                list2 = new ListNode(item);
            } else {
                const newNode = new ListNode(item);
                newNode.next = list2;
                list2 = newNode;
            }
         });

         const result = addTwoNumbers(list1, list2);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const addTwoNumbers = (l1, l2) => {
    let values = [];
    let overflow = 0;
    while (l1.next || l2.next) {
        const value = (l1.val + l2.val + overflow) % 10;
        overflow = l1.val + l2.val + overflow >= 10 ? 1 : 0;
        values.push(value);

        l1 = l1.next || new ListNode(0);
        l2 = l2.next || new ListNode(0);
    }
    const value = (l1.val + l2.val + overflow) % 10;
    overflow = l1.val + l2.val + overflow >= 10 ? 1 : 0;
    values.push(value);
    if (overflow === 1) {
        values.push(1);
    }
    let node = undefined;
    values.reverse().forEach(item => {
        if (node === undefined) {
            node = new ListNode(item);
        } else {
            const newNode = new ListNode(item);
            newNode.next = node;
            node = newNode;
        }
    });
    return node;
};

class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}