/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/86052
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
	const [g, r] = input;

	console.log('\n');
	const result = solution(g);

	console.log(result);
	console.log(result.join() === r.join());

	process.exit();
});

const solution = (grid) => {
	const answer = [];
	const m = grid.length;
	const n = grid[0].length;
	const visited = [];

	for (let i = 0; i < m; i++) {
		visited[i] = [];
		for (let j = 0; j < n; j++) {
			visited[i][j] = [false, false, false, false];
		}
	}

	const move = (x, y, from) => {
		let to = from;

		switch (grid[x][y]) {
			case 'S':
				if (to === 0) {
					x--;
				} else if (to === 1) {
					x++;
				} else if (to === 2) {
					y--;
				} else if (to === 3) {
					y++;
				}
				break;
			case 'L':
				if (to === 0) {
					y--;
					to = 2;
				} else if (to === 1) {
					y++;
					to = 3;
				} else if (to === 2) {
					x++;
					to = 1;
				} else if (to === 3) {
					x--;
					to = 0;
				}
				break;
			case 'R':
				if (to === 0) {
					y++;
					to = 3;
				} else if (to === 1) {
					y--;
					to = 2;
				} else if (to === 2) {
					x--;
					to = 0;
				} else if (to === 3) {
					x++;
					to = 1;
				}
				break;
		}

		x = x < 0 ? m - 1 : x === m ? 0 : x;
		y = y < 0 ? n - 1 : y === n ? 0 : y;

		return [x, y, to];
	};

	const bfs = (r, c, m) => {
		const queue = [[r, c, m, 0]];

		while (queue.length) {
			const [x, y, d, len] = queue.shift();
			const [nx, ny, nd] = move(x, y, d);

			if (visited[x][y][d]) {
				answer.push(len);

				return;
			}

			visited[x][y][d] = true;
			queue.push([nx, ny, nd, len + 1]);
		}
	};

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			for (let k = 0; k < 4; k++) {
				if (!visited[i][j][k]) {
					bfs(i, j, k);
				}
			}
		}
	}

	return answer.sort((a, b) => a - b);
};
