/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/60057
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
	const [s] = input;
	console.log('\n');
	const result = solution(s);
	console.log(result);

	process.exit();
});

const solution2 = (s) => {
	let answer = [s.length];
	const len = Math.floor(s.length / 2) + 1;

	for (let i = 1; i < len; i++) {
		let cnt = 1;
		let str = '';

		for (let j = 0; j < s.length; j += i) {
			const pChar = s.substring(j, j + i);
			const char = s.substring(j + i, j + i * 2);

			if (pChar === char) {
				cnt++;
			} else {
				str = `${str}${1 < cnt ? cnt : ''}${pChar}`;
				cnt = 1;
			}
		}

		answer.push(str.length);
	}

	return Math.min(...answer);
};

const solution = (s) => {
	if (s.length === 1) {
		return 1;
	}

	let answer = 1001;

	let idx = 1;

	while (idx < s.length) {
		let _idx = idx;
		let cnt = 1;
		let str = '';
		const loopCnt = Math.floor(s.length / idx) + 1;

		for (let i = 0; i < loopCnt; i++) {
			const pChar = s.substring(_idx - idx, _idx);
			const char = s.substring(_idx, _idx + idx);

			if (pChar === char) {
				cnt++;
			} else {
				str = cnt > 1 ? `${str}${cnt}${pChar}` : `${str}${pChar}`;
				cnt = 1;
			}

			_idx += idx;
		}

		if (str.length < answer) {
			answer = str.length;
		}

		idx++;
	}

	return answer;
};

/**
 * aabbaccc => 2a2ba3c => 7
 * ababcdcdababcdcd => 2ababcdcd => 9
 * abcabcdede => 2abcdede => 8
 * abcabcabcabcdededededede => 2abcabc2dedede => 14
 * xababcdcdababcdcd => xababcdcdababcdcd => 17
 */
