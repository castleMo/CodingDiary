/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/67257
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
	const [s, r] = input;

	console.log('\n');
	const result = solution(s);

	console.log(result);
	console.log(result === Number(r));

	process.exit();
});

const solution = (expression) => {
	let answer = 0;

	const recursive = (ops, nums, orders) => {
		if (!orders.length) {
			answer = Math.max(answer, Math.abs(nums[0]));
			return;
		}

		const [o, ...newOrders] = orders;

		let idx = ops.findIndex((v) => v === o);
		while (idx > -1) {
			ops.splice(idx, 1);

			let temp;

			switch (o) {
				case '+':
					temp = nums[idx] + nums[idx + 1];
					break;
				case '-':
					temp = nums[idx] - nums[idx + 1];
					break;
				default:
					temp = nums[idx] * nums[idx + 1];
					break;
			}

			nums.splice(idx, 2, temp);
			idx = ops.findIndex((v) => v === o);
		}

		recursive(ops, nums, newOrders);
	};

	const ops = [];
	const nums = [];
	const orders = [
		['-', '*', '+'],
		['-', '+', '*'],
		['*', '-', '+'],
		['*', '+', '-'],
		['+', '*', '-'],
		['+', '-', '*'],
	];

	let str = '';
	for (let i = 0; i < expression.length; i++) {
		const char = expression[i];
		if (['+', '-', '*'].includes(char)) {
			const num = Number(str);
			str = '';
			ops.push(char);
			nums.push(num);
		} else {
			str += char;
		}
	}
	nums.push(Number(str));

	for (const o of orders) {
		recursive([...ops], [...nums], o);
	}

	return answer;
};
