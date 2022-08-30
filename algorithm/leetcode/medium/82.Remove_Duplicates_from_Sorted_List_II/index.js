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

         let linkedList = undefined;

         arr.reverse().forEach(item => {
            if (linkedList === undefined) {
                linkedList = new ListNode(item);
            } else {
                const newNode = new ListNode(item);
                newNode.next = linkedList;
                linkedList = newNode;
            }
         });
         const result = deleteDuplicates2(linkedList);
 
         console.log("\n");
         console.log({ result: JSON.stringify(result, null, 2) });
 
         process.exit();
     });
 
const deleteDuplicates = (head) => {
    if(!head) {
        return null;
    }
    
    const map = {};

    while(head) {
        const str = `!${head.val}`;
        if(map[str]) {
           map[str] += 1; 
        } else {
            map[str] = 1; 
        }
        head = head.next;
    }

    const list = [];
    for(const key in map) {
        console.log({key, map: map[key]});
        if(map[key] < 2) {
            list.push(Number(key.slice(1)));
        }
    }

    let linkedList = undefined;
    list.reverse().forEach((item) => {
        if (linkedList === undefined) {
            linkedList = new ListNode(item);
        } else {
            const newNode = new ListNode(item);
            newNode.next = linkedList;
            linkedList = newNode;
        }
    });

    return linkedList ?? null;
};

const deleteDuplicates2 = (head) => {
    let h = head;
    let output = head;
    let prevNode = undefined;

    while(h) {
        if(h.next) {
            let temp = h;
            while(temp.next && temp.val === temp.next.val) {
                temp = temp.next;
            }
            
            if(temp !== h) {
                if(prevNode) {
                    prevNode.next = temp.next;
                    h = prevNode;
                } else {
                    h = temp.next;
                    output = h;
                    temp.next = null;
                    continue;
                }
            }
        } 
        prevNode = h;
        if (h) {
            h = h.next;
        }
        console.log({
            h: JSON.stringify(h, null, 2),
            output: JSON.stringify(output, null, 2),
            prevNode: JSON.stringify(prevNode, null, 2),
        });
    }

    return output;
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}