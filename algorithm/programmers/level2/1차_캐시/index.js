/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/17680
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
	const [cs, c, r] = input;

	console.log('\n');
	const result = solution(cs, c);

	console.log(result);
	console.log(result === r);

	process.exit();
});

/**
 *
 * @param {number} cacheSize
 * @param {string[]} cities
 * @returns
 */
function solution(cacheSize, cities) {
	if (cacheSize === 0) {
		return cities.length * 5;
	}

	let ans = 0;

	const cache = {};
	let size = 0;

	const cacheRemoveOne = () => {
		let min = Number.MAX_SAFE_INTEGER;
		let str = '';

		for (const key in cache) {
			if (cache[key] < min) {
				min = cache[key];
				str = key;
			}
		}

		size--;

		delete cache[str];
	};

	cities.forEach((s, idx) => {
		const val = idx + 1;
		const str = s.toUpperCase();

		if (cache[str]) {
			ans++;
			cache[str] = val;
		} else {
			ans += 5;

			if (cacheSize <= size) {
				cacheRemoveOne();
			}

			cache[str] = val;
			size++;
		}
	});

	return ans;
}
