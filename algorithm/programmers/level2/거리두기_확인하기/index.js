/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/81302
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
	const [p, r] = input;

	console.log('\n');
	const result = solution(p);

	console.log(result);
	console.log(result.join(',') === r.join(','));

	process.exit();
});

const solution = (places) => {
	const answer = [];

	for (const p of places) {
		const result = p.some((r, rIdx) => {
			return [...r].some((c, cIdx, cArr) => {
				if (c === 'X') {
					return false;
				}

				let cnt = 0;
				cnt += (p[rIdx + 1] || [])[cIdx] === 'P' ? 1 : 0; // 상
				cnt += (p[rIdx - 1] || [])[cIdx] === 'P' ? 1 : 0; // 하
				cnt += cArr[cIdx - 1] === 'P' ? 1 : 0; // 좌
				cnt += cArr[cIdx + 1] === 'P' ? 1 : 0; // 우

				if ((c === 'P' && cnt > 0) || (c === 'O' && cnt >= 2)) {
					return true;
				} else {
					return false;
				}
			});
		});

		answer.push(result ? 0 : 1);
	}

	return answer;
};
