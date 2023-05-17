/**
 * @link https://www.acmicpc.net/problem/17219
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
	const [n, m] = strToNumberArr(input.shift());
	const siteAndPw = [];
	const site = [];
	for (let i = 0; i < n; i++) {
		siteAndPw.push(input[i].split(' '));
	}
	for (let i = n; i < n + m; i++) {
		site.push(input[i]);
	}

	const result = solution(siteAndPw, site);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {string[][]} siteAndPwArr
 * @param {string[]} siteArr
 */
function solution(siteAndPwArr, siteArr) {
	const answer = [];

	const map = siteAndPwArr.reduce((obj, [site, pw]) => {
		obj[site] = pw;
		return obj;
	}, {});

	siteArr.forEach((str) => {
		answer.push(map[str]);
	});

	return answer;
}
