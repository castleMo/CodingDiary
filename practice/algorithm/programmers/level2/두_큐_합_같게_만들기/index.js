/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/118667
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
	const [q1, q2, r] = input;

	console.log('\n');
	const result = solution(q1, q2);

	console.log(result);
	console.log(result === r);

	process.exit();
});

const solution = (q1, q2) => {
	const arr = [...q1, ...q2];
	const loopCnt = arr.length * 4;

	const getSum = (arr) => arr.reduce((pre, cur) => pre + cur);

	let sum = getSum(arr);

	if (sum % 2 !== 0) {
		return -1;
	}

	const v = sum / 2;
	let calcSum = getSum(q1);

	let cnt = 0;
	let s = 0;
	let e = q1.length;

	while (cnt < loopCnt) {
		if (calcSum === v) {
			return cnt;
		} else if (v < calcSum) {
			calcSum -= arr[s];
			s++;
		} else if (calcSum < v) {
			calcSum += arr[e];
			e++;
		}
		cnt++;
	}

	return -1;
};

// const solution = (q1, q2) => {
// 	let answer = -1;
// 	let cnt = 0;

// 	const getSum = (arr) => {
// 		return arr.reduce((pre, cur) => pre + cur);
// 	};

// 	let sum1 = getSum(q1);
// 	let sum2 = getSum(q2);
// 	let sum = sum1 + sum2;

// 	if (sum % 2 !== 0) {
// 		return answer;
// 	}

// 	const loopCnt = (q1.length - 1) * 3;

// 	while (cnt < loopCnt) {
// 		const [num1, ...firstRemove1] = q1;
// 		const [num2, ...firstRemove2] = q2;

// 		if (sum1 === sum2) {
// 			answer = cnt;
// 			break;
// 		} else if (sum1 < sum2) {
// 			q2 = firstRemove2;
// 			q1 = [...q1, num2];
// 			sum2 -= num2;
// 			sum1 += num2;
// 		} else {
// 			q1 = firstRemove1;
// 			q2 = [...q2, num1];
// 			sum1 -= num1;
// 			sum2 += num1;
// 		}
// 		cnt++;
// 	}

// 	return answer;
// };

// const solution = (q1, q2) => {
// 	let answer = Number.MAX_SAFE_INTEGER;

// 	const getSum = (arr) => {
// 		return arr.reduce((pre, cur) => pre + cur);
// 	};

// 	const recursive = (a1, a2, v, cnt, len) => {
// 		if (!a1.length || !a2.length) {
// 			return;
// 		} else if (len < cnt) {
// 			return;
// 		}

// 		const sum = getSum(a1);

// 		if (sum === v) {
// 			answer = answer > cnt ? cnt : answer;
// 			return;
// 		}

// 		const [, ...firstRemoveA1] = a1;
// 		const [, ...firstRemoveA2] = a2;

// 		const sum1 = getSum(a1);
// 		const sum2 = getSum(a2);

// 		if (sum1 > sum2) {
// 			recursive(firstRemoveA1, [...a2, a1[0]], v, cnt + 1, len);
// 		} else {
// 			recursive([...a1, a2[0]], firstRemoveA2, v, cnt + 1, len);
// 		}
// 	};

// 	const arr = [...q1, ...q2];
// 	const num = getSum(arr);
// 	const arrLen = arr.length;

// 	if (num % 2 === 1) {
// 		return answer;
// 	}

// 	recursive(q1, q2, Math.floor(num / 2), 0, arrLen);

// 	return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
// };
