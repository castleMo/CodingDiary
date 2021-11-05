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
         const [list] = input;
         let linkedList = undefined;

         JSON.parse(list).reverse().forEach(item => {
            if (linkedList === undefined) {
                linkedList = new ListNode(item);
            } else {
                const newNode = new ListNode(item);
                newNode.next = linkedList;
                linkedList = newNode;
            }
         });
         console.log("\n");
         const result = deleteDuplicates(linkedList);
 
         console.log("\n");
         console.log(result);
 
         process.exit();
     });
 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
    if(!head) {
        return head;
    }
    
    const list = [head.val];

    while(head.next) {
        if(!list.includes(head.val)) {
            list.push(head.val);
        }
        head = head.next;
    }

    if(!list.includes(head.val)) {
        list.push(head.val);
    }

    let returns = undefined;
    list.reverse().forEach(item => {
        if (returns === undefined) {
            returns = new ListNode(item);
        } else {
            const newNode = new ListNode(item);
            newNode.next = returns;
            returns = newNode;
        }
    });

    return returns;
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}