/**
 * @link https://www.acmicpc.net/problem/5430
 * @name AC
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

	const strFuncs = [];
	const numsArr = [];
	for (let i = 0; i < t * 3; i += 3) {
		const func = input[i];
		const nums = JSON.parse(input[i + 2]);

		strFuncs.push(func);
		numsArr.push(nums);
	}

	const result = solution(t, strFuncs, numsArr);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number} t
 * @param {string[]} strFuncs
 * @param {number[][]} numsArr
 * @return {string[]}
 */
function solution(t, strFuncs, numsArr) {
	const ans = [];

	for (let i = 0; i < t; i++) {
		const str = strFuncs[i];
		const nums = numsArr[i];
		let head = 0;
		let tail = nums.length;
		let deleteCnt = 0;

		let isReverse = false;
		for (let j = 0; j < str.length; j++) {
			const char = str[j];
			if (char === 'R') {
				isReverse = !isReverse;
			} else {
				deleteCnt++;
				if (isReverse) {
					// nums.pop();
					tail--;
				} else {
					// nums.shift();
					head++;
				}
			}
		}

		if (nums.length < deleteCnt) {
			ans.push('error');
			continue;
		}

		const result = nums.slice(head, tail);
		if (isReverse) {
			result.reverse();
		}

		ans.push(`[${result.join(',')}]`);
	}

	return ans;
}
