/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42885
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
	const [p, l, r] = input;

	console.log('\n');
	const result = solution(p, l);

	console.log(result);
	console.log(result === r);

	process.exit();
});

/**
 *
 * @param {number[]} people
 * @param {number} limit
 */
function solution(people, limit) {
	let ans = 0;

	people.sort((a, b) => a - b);

	let head = 0;
	let tail = people.length - 1;
	while (head <= tail) {
		if (people[head] + people[tail] <= limit) {
			head++;
			tail--;
		} else {
			tail--;
		}
		ans++;
	}

	return ans;
}
