/**
 * @link https://www.acmicpc.net/problem/11286
 * @name 절댓값_힙
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(Number(line));
}).on('close', () => {
	input.shift();

	const result = solution(input);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number[]} nums
 */
function solution(nums) {
	const ans = [];

	const heap = new AbsHeap();

	nums.forEach((n) => {
		if (n === 0) {
			ans.push(heap.extract());
		} else {
			heap.insert(n);
		}
	});

	return ans;
}

class AbsHeap {
	constructor() {
		this.heap = [];
	}

	swap(idx1, idx2) {
		[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
	}

	insert(value) {
		this.heap.push([value, Math.abs(value)]);
		this.bubbleUp();
	}

	bubbleUp() {
		if (this.heap.length === 1) {
			return;
		}

		let curIdx = this.heap.length - 1;
		while (0 < curIdx) {
			let parentIdx = Math.floor((curIdx - 1) / 2);

			// 현재 노드의 절댓값이 부모 노드의 절댓값보다 클 경우
			if (this.heap[parentIdx][1] < this.heap[curIdx][1]) {
				break;
			}
			// 현재 노드의 절댓값과 부모 노드의 절댓값이 같고
			// 현재 노드의 값이 부모 노드의 값보다 크거나 같을 경우
			else if (
				this.heap[curIdx][1] === this.heap[parentIdx][1] &&
				this.heap[parentIdx][0] <= this.heap[curIdx][0]
			) {
				break;
			}

			this.swap(curIdx, parentIdx);
			curIdx = parentIdx;
		}
	}

	extract() {
		if (this.heap.length === 0) {
			return 0;
		} else if (this.heap.length === 1) {
			return this.heap.pop()[0];
		}

		const min = this.heap[0][0];
		this.heap[0] = this.heap.pop();
		this.trickleDown(0);

		return min;
	}

	trickleDown(idx) {
		let curIdx = idx;

		while (curIdx < this.heap.length) {
			let leftNodeIdx = curIdx * 2 + 1;
			let rightNodeIdx = curIdx * 2 + 2;
			let smallestIdx = curIdx;

			// 자식 노드가 없는 경우
			if (!this.heap[leftNodeIdx] && !this.heap[rightNodeIdx]) {
				break;
			}

			// 왼쪽 노드가 존재하고
			// 현재 노드보다 절댓값이 작을 경우
			if (
				this.heap[leftNodeIdx] &&
				this.heap[leftNodeIdx][1] < this.heap[smallestIdx][1]
			) {
				smallestIdx = leftNodeIdx;
			}
			// 왼쪽 노드가 존재하고
			// 현재 노드와 절댓값이 같고
			// 현재 노드의 값보다 작을 경우
			else if (
				this.heap[leftNodeIdx] &&
				this.heap[leftNodeIdx][1] === this.heap[smallestIdx][1] &&
				this.heap[leftNodeIdx][0] < this.heap[smallestIdx][0]
			) {
				smallestIdx = leftNodeIdx;
			}

			// 오른쪽 노드가 존재하고
			// 현재 노드보다 절댓값이 작을 경우
			if (
				this.heap[rightNodeIdx] &&
				this.heap[rightNodeIdx][1] < this.heap[smallestIdx][1]
			) {
				smallestIdx = rightNodeIdx;
			}
			// 오른쪽 노드가 존재하고
			// 현재 노드와 절댓값이 같고
			// 현재 노드의 값보다 작을 경우
			else if (
				this.heap[rightNodeIdx] &&
				this.heap[rightNodeIdx][1] === this.heap[smallestIdx][1] &&
				this.heap[rightNodeIdx][0] < this.heap[smallestIdx][0]
			) {
				smallestIdx = rightNodeIdx;
			}

			if (smallestIdx !== curIdx) {
				this.swap(curIdx, smallestIdx);
				curIdx = smallestIdx;
			} else {
				break;
			}
		}
	}
}
