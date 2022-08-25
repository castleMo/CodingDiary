/**
 * @link
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
	const [a, c, r] = input;

	console.log('\n');
	const result = solution(a, c);

	console.log(result);
	console.log(r);
	console.log(r.join(',') === result.join(','));

	process.exit();
});

const solution = (array, commands) => {
	const answer = [];

	for (const [i, j, k] of commands) {
		const arr = array.slice(i - 1, j).sort((a, b) => a - b);
		answer.push(arr[k - 1]);
	}

	return answer;
};
