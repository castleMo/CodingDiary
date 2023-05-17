/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/92341
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
	const [f, re, r] = input;

	console.log('\n');
	const result = solution(f, re);

	console.log(result);
	console.log(result.join() === r.join());

	process.exit();
});

const solution = (fees, records) => {
	const answer = [];
	const map = {};
	const [basicMinutes, basicCost, unitTime, unitCost] = fees;

	const getMinutes = (hour, minutes) => hour * 60 + minutes;
	const getCharge = (time) => {
		let charge = basicCost;

		time -= basicMinutes;

		if (0 < time) {
			charge += Math.ceil(time / unitTime) * unitCost;
		}

		return charge;
	};

	for (const record of records) {
		const [strTime, strCarNumber] = record.split(' ');
		const [hour, minutes] = strTime.split(':').map(Number);

		if (!map[strCarNumber]) {
			map[strCarNumber] = {
				charge: 0,
				arr: [],
				time: 0,
			};
		}

		map[strCarNumber].arr.push(getMinutes(hour, minutes));
	}

	for (const k in map) {
		while (map[k].arr.length > 0) {
			const inTime = map[k].arr.shift();
			const outTime = map[k].arr.shift() || 1439;

			map[k].time += outTime - inTime;
		}

		answer.push({ carNumber: k, charge: getCharge(map[k].time) });
	}

	return answer
		.sort((a, b) => a.carNumber - b.carNumber)
		.map(({ charge }) => charge);
};
