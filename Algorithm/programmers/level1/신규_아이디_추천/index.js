/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/72410
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
	const [new_id] = input;
	console.log('\n');
	const result = solution(new_id);

	console.log(result);

	process.exit();
});

const solution = (new_id) => {
	const step1 = (s) => {
		return s.toLowerCase();
	};

	const step2 = (str) => {
		let result = '';
		for (const s of str) {
			const code = s.charCodeAt();
			let isAdd = false;
			if ([45, 46, 95].includes(code)) {
				isAdd = true;
			} else if (97 <= code && code <= 122) {
				isAdd = true;
			} else if (48 <= code && code <= 57) {
				isAdd = true;
			}

			if (isAdd) {
				result += s;
			}
		}

		return result;
	};

	const step3 = (str) => {
		let result = '';

		let isPrevDot = false;
		for (const s of str) {
			if (s === '.') {
				isPrevDot = true;
			} else {
				result += isPrevDot ? `.${s}` : s;
				isPrevDot = false;
			}
		}

		return result;
	};

	const step4 = (str) => {
		let result = str;

		while (true) {
			const isStartDot = result[0] === '.';
			const isLastDot = result[result.length - 1] === '.';

			if (!isStartDot && !isLastDot) {
				break;
			}

			if (isStartDot) {
				result = result.substring(1);
			}

			if (isLastDot) {
				result = result.substring(0, result.length - 1);
			}
		}

		return result;
	};

	const step5 = (str) => {
		const len = str.length;
		if (len === 0) {
			return 'aaa';
		}

		return str;
	};

	const step6 = (str) => {
		if (15 < str.length) {
			return step4(str.substring(0, 15));
		} else {
			return str;
		}
	};

	const step7 = (str) => {
		const len = str.length;
		if (len < 3) {
			const lastChar = str[len - 1];
			let result = str;

			for (let i = 0; i < 3 - len; i++) {
				result += lastChar;
			}

			return result;
		}

		return str;
	};

	return step7(step6(step5(step4(step3(step2(step1(new_id)))))));
};

/**
 * a = 97
 * z = 122
 * 0 = 48
 * 9 = 57
 * - = 45
 * _ = 95
 * . = 46
 */
