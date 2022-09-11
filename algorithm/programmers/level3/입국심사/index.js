/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/43238
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
	const [n, t, r] = input;

	console.log('\n');
	const result = solution(n, t);

	console.log(result);
	console.log(result === r);

	process.exit();
});

const solution = (n, times) => {
	// 이분탐색을 위해 오름차순 정렬
	times.sort((a, b) => a - b);

	let left = 1;
	let right = n * times[times.length - 1];
	let answer = right; // 최댓값

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		let cnt = 0;

		times.forEach((v) => {
			// 한 사람당 몇명 할 수 있는지
			cnt += Math.floor(mid / v);

			if (n <= cnt) {
				answer = Math.min(mid, answer); // 최솟값
			}
		});

		if (n <= cnt) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return answer;
};

// const solution = (n, times) => {
// 	let answer = Math.min(...times);

// 	const users = [...Array(n).keys()];
// 	const queue = [];
// 	times.forEach((t) => {
// 		users.pop();
// 		queue.push([t, t - answer]);
// 	});

// 	while (users.length) {
// 		let min = 1000000000;
// 		let idx = -1;
// 		queue.forEach(([t1, t2], i) => {
// 			if (t1 + t2 < min) {
// 				min = t1 + t2;
// 				if (t2 < 1) {
// 					idx = i;
// 				}
// 			}
// 		});

// 		if (idx > -1) {
// 			queue[idx][1] = queue[idx][0];
// 			users.pop();
// 		}

// 		for (let i = 0; i < queue.length; i++) {
// 			queue[i][1] -= 1;
// 		}

// 		answer++;
// 	}

// 	return answer + Math.max(...queue.map(([, t]) => t));
// };
