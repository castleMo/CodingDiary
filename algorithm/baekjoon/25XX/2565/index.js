const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const [strN, ...strArr] = input;

	const numArr = strArr
		.map((v) => v.split(' ').map(Number))
		.sort((a, b) => a[0] - b[0]);

	const result = func(Number(strN), numArr);

	console.log(result);

	process.exit();
});

const func = (n, numArr) => {
	const memo = new Array(n).fill(1);

	for (let i = 1; i < n; i++) {
		let count = 0;
		for (let j = 0; j < i; j++) {
			if (numArr[j][1] < numArr[i][1]) {
				count = Math.max(count, memo[j]);
			}
		}

		memo[i] = count + 1;
	}

	return n - Math.max(...memo);
};
