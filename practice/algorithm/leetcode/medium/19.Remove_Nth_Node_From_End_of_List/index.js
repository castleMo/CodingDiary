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
         const [arr, n] = input;
         console.log("\n");

         let head = undefined;
         JSON.parse(arr).reverse().forEach(item => {
            if (head === undefined) {
                head = new ListNode(item);
            } else {
                const newNode = new ListNode(item);
                newNode.next = head;
                head = newNode;
            }
         });
         console.log(JSON.stringify(head, null, 2));
         const result = removeNthFromEnd(head, Number(n));
 
         console.log("\n");
         console.log(JSON.stringify(result, null, 2));
 
         process.exit();
     });
 
const removeNthFromEnd = (head, n) => {
    const values = [];

    while(head.next) {
        values.push(head.val);
        head = head.next;
    }

    values.push(head.val);
    head = undefined;

    if(values.length < 2) {
        return null;
    }

    values.splice(values.length - n, 1);

    values.reverse().forEach(item => {
        if (head === undefined) {
            head = new ListNode(item);
        } else {
            const newNode = new ListNode(item);
            newNode.next = head;
            head = newNode;
        }
     });

     return head;
};

class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}