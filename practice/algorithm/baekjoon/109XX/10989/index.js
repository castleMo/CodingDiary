/**
 * @link https://www.acmicpc.net/problem/10989
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(Number(line));
}).on('close', () => {
	let [, ...nums] = input;

	const cntMap = nums.reduce((map, n) => {
		map[n] = map[n] ? map[n] + 1 : 1;
		return map;
	}, {});
	nums = [...new Set(nums)].sort((a, b) => a - b);

	const result = nums.reduce((arr, num) => {
		const n = cntMap[num];
		for (let i = 0; i < n; i++) {
			arr.push(num);
		}
		return arr;
	}, []);

	console.log(result.join('\n'));

	process.exit();
});
