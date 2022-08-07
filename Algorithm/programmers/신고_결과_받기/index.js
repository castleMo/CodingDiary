/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/92334
 * @description
 *
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
	const [id_list, report, k] = input;
	const result = solution(id_list, report, k);

	console.log(result);

	process.exit();
});

function solution(id_list, report, k) {
	const answer = new Array(id_list.length).fill(0);
	const reports = [...new Set(report)].map((a) => a.split(' '));
	const reportCntMap = {};
	const reportMap = reports.reduce((map, [id, reportId]) => {
		map[id] = map[id] ? [...map[id], reportId] : [reportId];

		reportCntMap[`${reportId}_cnt`] = reportCntMap[`${reportId}_cnt`]
			? reportCntMap[`${reportId}_cnt`] + 1
			: 1;

		return map;
	}, {});

	for (const key in reportCntMap) {
		const cnt = reportCntMap[key];
		if (k <= cnt) {
			const reportedId = key.split('_')[0];
			for (const id in reportMap) {
				const reports = reportMap[id];
				if (reports.includes(reportedId)) {
					const idx = id_list.findIndex((_id) => id === _id);
					answer[idx]++;
				}
			}
		}
	}

	return answer;
}
