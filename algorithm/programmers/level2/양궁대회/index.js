/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/92342
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
	const [n, i, r] = input;

	console.log('\n');
	const result = solution(n, i);

	console.log(result);
	console.log(result.join() === r.join());

	process.exit();
});

const solution = (n, info) => {
	const infoLen = info.length;
	let answer = new Array(infoLen).fill(0);
	let diff = 0;

	const recursive = (num, idx, arr) => {
		if (num === 0) {
			// 화살을 다 소모 했을경우
			let apeach = 0; // 어피치 점수
			let ryan = 0; // 라이언 점수

			// 점수 계산
			for (let i = 0; i < infoLen; i++) {
				const ap = info[i];
				const ry = arr[i];

				if (ap < ry) {
					ryan += 10 - i;
				} else if (ry < ap) {
					apeach += 10 - i;
				}
			}

			const newDiff = ryan - apeach; // 점수 차이

			if (diff < newDiff) {
				diff = newDiff;
				answer = arr;
			} else if (diff === newDiff) {
				// 맨뒤에서 부터
				for (let i = infoLen - 1; i >= 0; i--) {
					const old = answer[i];
					const _new = arr[i];

					// 이전 결과와 다른것이 발견되면
					if (old !== _new) {
						if (_new > old) {
							answer = arr;
							max = _new;
						}
						break;
					}
				}
			}

			return;
		} else if (idx > infoLen) {
			return;
		}

		const cnt = idx === infoLen - 1 ? num : info[idx] + 1;
		recursive(num, idx + 1, [...arr]);
		if (num >= cnt) {
			arr[idx] = cnt;
			recursive(num - cnt, idx + 1, [...arr]);
		}
	};

	recursive(n, 0, [...answer]);

	// 비겼을 경우 [-1] 반환
	return diff === 0 ? [-1] : answer;
};
