/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/64061
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
	const [b, m, r] = input;

	console.log('\n');
	const result = solution(b, m);

	console.log(r);
	console.log(result);
	console.log(r === result);

	process.exit();
});

const solution = (board, moves) => {
	const stack = [];
	let answer = 0;

	for (let m of moves) {
		m--;

		for (let i = 0; i < board.length; i++) {
			const o1 = board[i][m];

			if (!o1) {
				continue;
			} else {
				board[i][m] = 0;
				const o2 = stack.pop();

				if (!o2) {
					stack.push(o1);
				} else if (o1 === o2) {
					answer += 2;
				} else {
					stack.push(o2, o1);
				}

				break;
			}
		}
	}

	return answer;
};
