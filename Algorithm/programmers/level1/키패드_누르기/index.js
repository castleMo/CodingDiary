/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript
 * @description
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const [nums, hand, r] = input;

	console.log('\n');
	const result = solution(nums.split(',').map(Number), hand);

	console.log(r);
	console.log(result);
	console.log(r === result);

	process.exit();
});

const solution = (nums, hand) => {
	let answer = '';

	const handNumMap = {
		left: 10,
		right: 11,
	};

	const leftNums = [1, 4, 7];
	const rightNums = [3, 6, 9];

	const numsPosition = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[10, 0, 11],
	];

	const updateAnswer = (num, h) => {
		handNumMap[h] = num;
		answer += h === 'left' ? 'L' : 'R';
	};

	const findIndex = (num) => {
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 3; j++) {
				if (numsPosition[i][j] === num) {
					return [i, j];
				}
			}
		}
	};

	for (const num of nums) {
		if (leftNums.includes(num)) {
			updateAnswer(num, 'left');
		} else if (rightNums.includes(num)) {
			updateAnswer(num, 'right');
		} else {
			const leftIdx = Number.isNaN(Number(handNumMap.left))
				? [10, 10]
				: findIndex(handNumMap.left);
			const rightIdx = Number.isNaN(Number(handNumMap.right))
				? [10, 10]
				: findIndex(handNumMap.right);
			const numIdx = findIndex(num);

			const leftDistance =
				Math.abs(numIdx[0] - leftIdx[0]) + Math.abs(numIdx[1] - leftIdx[1]);
			const rightDistance =
				Math.abs(numIdx[0] - rightIdx[0]) + Math.abs(numIdx[1] - rightIdx[1]);

			if (leftDistance === rightDistance) {
				updateAnswer(num, hand);
			} else if (leftDistance < rightDistance) {
				updateAnswer(num, 'left');
			} else {
				updateAnswer(num, 'right');
			}
		}
	}

	return answer;
};
