/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42579?language=javascript
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
	const [g, p, r] = input;

	console.log('\n');
	const result = solution(g, p);

	console.log(result);
	console.log(r);
	console.log(r.join(',') === result.join(','));

	process.exit();
});

const solution = (genres, plays) => {
	if (plays.length === 1) {
		return [0];
	}
	const answer = [];

	const map = {};
	const indexMap = {};
	const countArr = [...new Set(genres)].map((v, i) => {
		indexMap[v] = i;
		return [v, 0];
	});

	if (countArr.length === 1) {
		const arr = [];
		for (let i = 0; i < plays.length; i++) {
			const data = [i, plays[i]];
			arr.push(data);
		}

		arr.sort((a, b) => b[1] - a[1]);
		return [arr[0][0], arr[1][0]];
	}

	for (let i = 0; i < plays.length; i++) {
		const genre = genres[i];
		const playCnt = plays[i];
		const data = [i, playCnt];
		const idx = indexMap[genre];
		countArr[idx] = [genre, countArr[idx][1] + playCnt];
		map[genre] = map[genre] ? [...map[genre], data] : [data];
	}

	countArr.sort((a, b) => b[1] - a[1]);

	countArr.forEach(([genre]) => {
		map[genre].sort((a, b) => b[1] - a[1]);
		const len = map[genre].length > 1 ? 2 : map[genre].length;
		for (let i = 0; i < len; i++) {
			answer.push(map[genre][i][0]);
		}
	});

	return answer;
};
