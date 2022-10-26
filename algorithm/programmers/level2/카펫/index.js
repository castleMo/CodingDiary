/**
 * @link
 * @name
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
	const [b, y, r] = input;

	console.log('\n');
	const result = solution(Number(b), Number(y));

	console.log(result);
	console.log(result.join() === JSON.parse(r).join());

	process.exit();
});

/**
 *
 * @param {number} brown
 * @param {number} yellow
 */
function solution(brown, yellow) {
	let sum = brown + yellow;

	for (let i = 3; i <= brown; i++) {
		if (sum % i === 0) {
			let j = sum / i;

			if ((i - 2) * (j - 2) === yellow) {
				return [j, i];
			}
		}
	}
}

/**
 * r,c = (r*2 + (r-2) * 2) , (r*c - (r*2 + (r-c) * 2))
 * 3,3 = (3*2 + (3-2) * 2) | 8, (3*3 - (8)) =  8, 1
 * 8,6 = (8*2 + (8-2) * 2) | 16 + 12 | 28 , (8*6 - 28) | 48 - 28
 */
