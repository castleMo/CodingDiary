const arr = [];

for(let i = 0; i < Math.pow(10,5); i++) {
    arr.push(i);
}

Array.prototype.customReduce = function(callbackfn, initialValue) {
    for(let i = 0; i < this.length; i++) {
        initialValue = callbackfn(initialValue, this[i], i, this);
    }

    return initialValue;
}

console.time('reduce');
const result1 = arr.reduce((prev, curr, currIndex, array) => {
    return prev + curr;
}, 0);
console.timeEnd('reduce');

console.time('customReduce');
const result2 = arr.customReduce((prev, curr, currIndex, array) => {
    return prev + curr;
}, 0);
console.timeEnd('customReduce');

console.log({result1, result2});