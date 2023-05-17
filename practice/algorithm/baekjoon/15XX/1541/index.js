/**
 * @link https://www.acmicpc.net/problem/1541
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
	const result = solution(input[0]);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {string} str
 */
function solution(str) {
	const nums = [];

	const arr = str.split('-'); // -로 분리

	for (const i of arr) {
		let sum = 0;
		const s = i.split('+'); // + 분리
		for (const j of s) {
			sum += Number(j);
		}

		nums.push(sum);
	}

	return nums.reduce((a, b) => a - b);
}

// 시간 초과
// function solution(str) {
// 	const arr = [];
// 	let answer = Number.MAX_SAFE_INTEGER;

// 	let operationCnt = 0;
// 	let prevCharIdx = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		const char = str[i];
// 		if (['+', '-'].includes(char)) {
// 			operationCnt++;
// 			const num = Number(str.substring(prevCharIdx, i));
// 			arr.push(num);
// 			arr.push(char);
// 			prevCharIdx = i + 1;
// 		}
// 	}
// 	arr.push(Number(str.substring(prevCharIdx)));

// 	/**
// 	 *
// 	 * @param {(string|number)[]} _arr
// 	 * @param {number} calcCnt
// 	 */
// 	const recursive = (_arr, calcCnt, sum) => {
// 		if (calcCnt === 0) {
// 			console.log({ sum, _arr, answer });
// 			answer = Math.min(answer, _arr[0]);
// 		}

// 		let prevIdx = 0;
// 		for (let i = 0; i < calcCnt; i++) {
// 			const [n1, operation, n2] = [0, 1, 2].map((v) => _arr[prevIdx + v]);
// 			const calc = calculation(n1, n2, operation);
// 			const newArr = [];

// 			if (prevIdx === 0) {
// 				newArr.push(calc, ..._arr.slice(3));
// 			} else if (prevIdx + 2 === _arr.length) {
// 				newArr.push(..._arr.slice(0, _arr.length - 2, calc));
// 			} else {
// 				newArr.push(
// 					..._arr.slice(0, prevIdx),
// 					calc,
// 					..._arr.slice(prevIdx + 3),
// 				);
// 			}

// 			recursive(newArr, calcCnt - 1, sum + calc);

// 			prevIdx += 2;
// 		}
// 	};

// 	recursive(arr, operationCnt, 0);

// 	return answer;
// }

/**
 *
 * @param {number} n1
 * @param {number} n2
 * @param {string} operation + OR -
 */
function calculation(n1, n2, operation) {
	if (operation === '+') {
		return n1 + n2;
	} else {
		return n1 - n2;
	}
}
