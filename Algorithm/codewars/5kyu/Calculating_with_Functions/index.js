const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(Number(line));
    input.push(line);
    input.push(JSON.parse(line));
})
    .on('close', () => {
        const [] = input;
        console.log("\n");
        const result = func();

        console.log("\n");
        console.log({ result });

        process.exit();
    });

function calculator(num, operation) {
    if(operation) {
        return operation(num);
    } else {
        return num;
    }
}

function zero(operation) {
    return calculator(0, operation);
}
function one(operation) {
    return calculator(1, operation);
}
function two(operation) {
    return calculator(2, operation);
}
function three(operation) {
    return calculator(3, operation);
}
function four(operation) {
    return calculator(4, operation);
}
function five(operation) {
    return calculator(5, operation);
}
function six(operation) {
    return calculator(6, operation);
}
function seven(operation) {
    return calculator(7, operation);
}
function eight(operation) {
    return calculator(8, operation);
}
function nine(operation) {
    return calculator(9, operation);
}

function plus(x) {
    return (y) => {
        return y + x;
    }
}
function minus(x) {
    return (y) => {
        return y - x;
    }
}
function times(x) {
    return (y) => {
        return y * x;
    }
}
function dividedBy(x) {
    return (y) => {
        return Math.floor(y / x);
    }
}