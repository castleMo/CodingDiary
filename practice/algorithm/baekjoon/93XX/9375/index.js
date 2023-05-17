/**
 * @link https://www.acmicpc.net/problem/9375
 */
const readline = require('readline');

const strToNumberArr = (str) => str.split(' ').map(Number);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const t = Number(input.shift());
	let idx = 0;
	const arr = [...Array(t)].map(() => []);
	for (let i = 0; i < t; i++) {
		const num = Number(input[idx++]);
		for (let j = 0; j < num; j++) {
			arr[i].push([...input[idx++].split(' ')]);
		}
	}

	const result = solution(arr);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {string[][]} arr
 */
function solution(arr) {
	const answer = Array(arr.length).fill(1);

	for (let i = 0; i < arr.length; i++) {
		const cur = arr[i];
		const map = {};
		cur.forEach(([name, category]) => {
			map[category] = map[category] ? [...map[category], name] : [name];
		});

		for (const k in map) {
			answer[i] *= map[k].length + 1;
		}

		// 옷을 아무것도 안입고 있는 경우는 안되므로 -1
		answer[i]--;
	}

	return answer;
}
