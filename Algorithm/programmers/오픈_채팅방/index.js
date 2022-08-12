/**
 * @link
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
	const [record] = input;
	console.log('\n');
	const result = solution(record);

	console.log(result);

	process.exit();
});

const solution = (record) => {
	const msg = [];
	const map = {};

	for (let i = 0; i < record.length; i++) {
		const [action, id, name] = record[i].split(' ');

		if (action === 'Leave') {
			msg.push([id, '님이 나갔습니다.']);
			continue;
		} else if (action === 'Enter') {
			msg.push([id, '님이 들어왔습니다.']);
		}

		map[id] = name;
	}

	return msg.map(([id, str]) => `${map[id]}${str}`);
};
