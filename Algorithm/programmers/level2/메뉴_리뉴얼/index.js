/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/72411
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
	const [o, c, r] = input;

	console.log('\n');
	const result = solution(o, c);

	console.log(result);
	console.log(r);
	console.log(result.join('|') === r.join('|'));

	process.exit();
});

const solution = (orders, course) => {
	const answer = [];

	const recursive = (obj, order, cnt, idx, prev) => {
		if (prev.length === cnt) {
			const str = prev.sort().join('');

			obj[str] = obj[str] ? [str, obj[str][1] + 1] : [str, 1];
		}

		for (let i = idx; i < order.length; i++) {
			recursive(obj, order, cnt, i + 1, [...prev, order[i]]);
		}
	};

	course.forEach((c) => {
		const menu = {};
		orders.forEach((o) => {
			recursive(menu, o, c, 0, '');
		});
		const menus = Object.values(menu).filter(([, n]) => n > 1);
		const max = menus.reduce((n, [, curN]) => (n < curN ? curN : n), 0);
		answer.push(...menus.filter(([, n]) => max === n));
	});

	return answer.map(([s]) => s).sort();
};
