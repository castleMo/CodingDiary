/**
 * @link https://www.acmicpc.net/problem/1107
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	let [n, m] = input;

	n = Number(n);
	m = Number(m);
	let brokenButtons = [];
	if (m > 0) {
		brokenButtons = input[2].split(' ').map(Number);
	}

	const result = solution(Number(n), brokenButtons);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} channel 이동하려고 하는 채널
 * @param {number[]} bbs 부러진 버튼들
 */
function solution(channel, bbs) {
	let answer = Math.abs(channel - 100);

	const isValid = (num) => {
		while (true) {
			if (bbs.includes(num % 10)) {
				return false;
			} else {
				num = Math.floor(num / 10);
			}

			if (num === 0) {
				break;
			}
		}

		return true;
	};

	for (let i = 0; i <= 999999; i++) {
		if (isValid(i)) {
			const newMin = Math.abs(channel - i) + String(i).length;
			answer = Math.min(answer, newMin);
		}
	}

	return answer;
}

/**
 * 리모컨에는 버튼이 0부터 9까지 숫자, +와 -가 있다.
 * +를 누르면 현재 보고있는 채널에서 +1된 채널로 이동하고,
 * -를 누르면 -1된 채널로 이동한다.
 * 채널 0에서 -를 누른 경우에는 채널이 변하지 않고,
 * 채널은 무한대 만큼 있다.
 *
 * 수빈이가 지금 이동하려고 하는 채널은 N이다.
 * 어떤 버튼이 고장났는지 주어졌을 때,
 * 채널 N으로 이동하기 위해서 버튼을 최소 몇 번 눌러야하는지 구하는 프로그램을 작성하시오.
 *
 * 수빈이가 지금 보고 있는 채널은 100번이다.
 */
