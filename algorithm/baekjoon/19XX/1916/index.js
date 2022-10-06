/**
 * @link https://www.acmicpc.net/problem/1916
 * @name 최소비용_구하기
 */
const readline = require('readline');

const strToNumberArr = (str) => str.split(' ').map(Number);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	let idx = 0;
	const n = Number(input[idx++]);
	const m = Number(input[idx++]);

	const arr = [];
	for (let i = 0; i < m; i++) {
		arr.push(strToNumberArr(input[idx++]));
	}

	const result = solution(n, m, arr, strToNumberArr(input[idx]));

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number} m
 * @param {number[][]} arr
 * @param {number[]} param3
 */
function solution(n, m, arr, [start, destination]) {
	const memo = [...Array(n + 1)].map(() => []);
	arr.forEach(([s, d, c]) => {
		memo[s].push([d, c]);
	});

	const costs = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
	costs[start] = 0;

	const heap = new MinHeap();
	heap.insert([start, 0]);

	while (heap.size > 0) {
		const [s, cost] = heap.extract();
		if (costs[s] !== cost) {
			continue;
		}

		for (let i = 0; i < memo[s].length; i++) {
			const [d, c] = memo[s][i];
			if (cost + c < costs[d]) {
				costs[d] = cost + c;
				heap.insert([d, costs[d]]);
			}
		}
	}

	return costs[destination];
}

class MinHeap {
	constructor() {
		this.heap = [];
	}

	swap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}

	get size() {
		return this.heap.length;
	}

	insert(data) {
		this.heap.push(data);
		this.bubbleUp();
	}

	bubbleUp() {
		let curIdx = this.size - 1;
		while (0 < curIdx) {
			const parentIdx = Math.floor(curIdx / 2);
			const parentNode = this.heap[parentIdx];
			const curNode = this.heap[curIdx];

			if (parentNode[1] < curNode[1]) {
				break;
			}

			this.swap(curIdx, parentIdx);
			curIdx = parentIdx;
		}
	}

	extract() {
		if (this.heap.length === 1) {
			return this.heap.pop();
		}

		const value = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.bubbleDown();
		return value;
	}

	bubbleDown() {
		let curIdx = 0;

		while (true) {
			const leftIdx = curIdx * 2 + 1;
			const leftNode = this.heap[leftIdx];
			const rightIdx = curIdx * 2 + 2;
			const rightNode = this.heap[rightIdx];
			let smallestIdx = curIdx;

			if (leftNode && leftNode[1] < this.heap[smallestIdx][1]) {
				smallestIdx = leftIdx;
			}

			if (rightNode && rightNode[1] < this.heap[smallestIdx][1]) {
				smallestIdx = rightIdx;
			}

			if (smallestIdx === curIdx) {
				break;
			}

			this.swap(smallestIdx, curIdx);
			curIdx = smallestIdx;
		}
	}
}
