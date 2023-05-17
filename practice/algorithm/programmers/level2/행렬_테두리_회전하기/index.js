/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/77485
 * @description
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(JSON.parse(line));
}).on('close', () => {
	const [ro, c, q, r] = input;

	console.log('\n');
	const result = solution(ro, c, q);

	console.log(result);
	console.log(result.join(',') === r.join(','));

	process.exit();
});

const solution = (rows, columns, queries) => {
	const answer = [];

	const columnsList = [...new Array(columns).keys()].map((v) => v + 1);
	const board = [...new Array(rows).keys()]
		.map((v) => v + 1)
		.map((i) => {
			return columnsList.map((j) => (i - 1) * columns + j);
		});

	for (let i = 0; i < queries.length; i++) {
		const [x1, y1, x2, y2] = queries[i].map((v) => v - 1);

		const moveArr = [];
		const numArr = [];

		const topAndBottom = y2 - y1;
		for (let j = 0; j < topAndBottom; j++) {
			const topNum = board[x1][y1 + j];
			moveArr.push([x1, y1 + j + 1, topNum]);
			numArr.push(topNum);

			const bottomNum = board[x2][y2 - j];
			moveArr.push([x2, y2 - j - 1, bottomNum]);
			numArr.push(bottomNum);
		}

		const rightAndLeft = x2 - x1;
		for (let j = 0; j < rightAndLeft; j++) {
			const rightNum = board[x1 + j][y2];
			moveArr.push([x1 + j + 1, y2, rightNum]);
			numArr.push(rightNum);

			const leftNum = board[x2 - j][y1];
			moveArr.push([x2 - j - 1, y1, leftNum]);
			numArr.push(leftNum);
		}

		answer.push(Math.min(...numArr));
		moveArr.forEach(([x, y, v]) => {
			board[x][y] = v;
		});
	}

	return answer;
};
