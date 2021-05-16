/**
 * @link https://www.acmicpc.net/problem/2108
 * @since 2021/05/16
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(Number(line));
})
    .on('close', () => {
        const [, ...numArr] = input;

        const avg = getAvg(numArr);
        const centerValue = getCenterValue(numArr);
        const manyValue = getManyValue(numArr);
        const range = getRange(numArr);

        console.log(avg);
        console.log(centerValue);
        console.log(manyValue);
        console.log(range);

        process.exit();
    });

function getAvg(arr) {
    let sum = 0;
    arr.forEach(value => {
        sum += value;
    });

    return Math.round(sum / arr.length);
}

function getCenterValue(arr) {
    arr.sort((a, b) => {
        return a - b;
    });

    const index = Math.floor(arr.length / 2);

    return arr[index];
}

function getManyValue(arr) {
    const obj = {};
    const manyValueArr = [];
    let max = 0;

    // 수마다 몇번 반복되는지 구하기
    arr.forEach(value => {
        if (obj[value] === undefined) {
            obj[value] = 1;
        } else {
            obj[value] += 1;
        }
    });

    // 제일 많이 중복된 횟수 구하기
    for (const key in obj) {
        if (max < obj[key]) max = obj[key];
    }

    // 제일 많이 중복된 수 구하기
    for (const key in obj) {
        // 최대값이랑 같으면
        if (max === obj[key]) manyValueArr.push(Number(key));
    }

    // 오름차순 정렬
    manyValueArr.sort((a, b) => {
        return a - b;
    });

    let returnValue = 0;

    // 최빈값이 2개 이상일때
    if (manyValueArr.length > 1) {
        returnValue = manyValueArr[1];
        // 최빈값이 하나 일때
    } else {
        returnValue = manyValueArr[0];
    }

    return returnValue;
}

function getRange(arr) {
    arr.sort((a, b) => {
        return a - b;
    });

    return arr[arr.length - 1] - arr[0];
}