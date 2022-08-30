/**
 * @link https://www.acmicpc.net/problem/1546
 */

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
        const [countStr, str] = input;

        const count = Number(countStr);
        const grades = str.split(' ').map(Number);

        const maxGrade = grades.reduce((accumulator, currentValue) => {
            return accumulator < currentValue ? currentValue : accumulator;
        }, -1);

        const newGrades = grades.reduce((accumulator, currentValue) => {
            const newGrade = (currentValue / maxGrade) * 100;
            accumulator.push(newGrade);

            return accumulator;
        }, []);

        let sum = newGrades.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        console.log(sum / count);

        process.exit();
    });