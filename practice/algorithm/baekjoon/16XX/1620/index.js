/**
 * @link
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
	const question = [...Array(m)].map(() => input.pop()).reverse();
	const pokemon = input;

	const result = solution(n, m, question, pokemon);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number} m
 * @param {string[]} question
 * @param {string[]} pokemon
 */
function solution(n, m, question, pokemon) {
	const map = pokemon.reduce((obj, name, idx) => {
		obj[name] = idx + 1;
		obj[idx + 1] = name;
		return obj;
	}, {});

	return question.map((v) => map[v]);
}
