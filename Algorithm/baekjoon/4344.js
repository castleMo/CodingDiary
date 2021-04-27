/**
 * @link https://www.acmicpc.net/problem/4344
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
        const [, ...strArr] = input;

        strArr.forEach(value => {
            const [studentCount, ...grades] = value.split(' ').map(Number);

            const sum = grades.reduce((gradeSum, grade) => {
                return gradeSum += grade;
            }, 0);

            // 평균
            const avg = sum / studentCount;

            // 평균보다 높은 학생들이 몇명있는지 확인
            let highClassStudentCount = grades.reduce((count, grade) => {
                if (avg < grade) count += 1
                return count;
            }, 0);

            const percentage = (highClassStudentCount / studentCount) * 100;

            console.log(`${percentage.toFixed(3)}%`);
        });

        process.exit();
    });