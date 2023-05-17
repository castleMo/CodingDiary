const arr = [];

for(let i = 0; i < Math.pow(10,1); i++) {
    arr.push(i);
}

Array.prototype.customMap = function(callbackfn, thisArgs) {
    const temp = [];
    for(let i = 0; i < this.length; i++) {
        temp.push(callbackfn(this[i], i, this));
    }

    return temp;
}

console.time('map');
const result1 = arr.map((value, index, array) => {
    return value * index;
}, 0);
console.timeEnd('map');

console.time('customMap');
const result2 = arr.customMap((value, index, array) => {
    return value * index;
}, 0);
console.timeEnd('customMap');

console.log({result1, result2});