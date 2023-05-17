/**
 * @link https://www.acmicpc.net/problem/1927
 */
const fs = require('fs');
const input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

input.shift();

class MinHeap {
	constructor() {
		this.heap = [];
	}

	insert(data) {
		this.heap.push(data);
		this.bubbleUp();
	}

	bubbleUp(idx = this.heap.length - 1) {
		if (idx < 1) {
			return;
		}
		const currentNode = this.heap[idx];
		const parentIdx = Math.floor((idx - 1) / 2);
		const parentNode = this.heap[parentIdx];

		// 부모값이 더 작으면 끝내기
		if (parentNode <= currentNode) {
			return;
		}

		this.heap[idx] = parentNode;
		this.heap[parentIdx] = currentNode;
		idx = parentIdx;

		this.bubbleUp(idx);
	}

	extract() {
		if (this.heap.length === 0) {
			return 0;
		}

		if (this.heap.length === 1) {
			return this.heap.pop();
		}

		const min = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.trickleDown();

		return min;
	}

	trickleDown(idx = 0) {
		const leftIdx = idx * 2 + 1;
		const rightIdx = idx * 2 + 2;
		const len = this.heap.length;
		let smallest = idx;

		if (!this.heap[leftIdx] && !this.heap[rightIdx]) {
			return;
		}

		if (!this.heap[rightIdx]) {
			if (this.heap[leftIdx] < this.heap[smallest]) {
				smallest = leftIdx;
			}
		}

		if (this.heap[leftIdx] > this.heap[rightIdx]) {
			if (rightIdx <= len && this.heap[rightIdx] < this.heap[smallest]) {
				smallest = rightIdx;
			}
		} else {
			if (leftIdx <= len && this.heap[leftIdx] < this.heap[smallest]) {
				smallest = leftIdx;
			}
		}

		if (smallest !== idx) {
			[this.heap[smallest], this.heap[idx]] = [
				this.heap[idx],
				this.heap[smallest],
			];

			this.trickleDown(smallest);
		}
	}
}

const result = [];

const minHeap = new MinHeap();

input.forEach((v) => {
	if (v === 0) {
		result.push(minHeap.extract());
	} else {
		minHeap.insert(v);
	}
});

console.log(result.join('\n'));

process.exit();

// class MinHeap {
// 	heap = [];

// 	isEmpty() {
// 		return this.heap.length === 0;
// 	}

// 	swap(i, j) {
// 		const temp = this.heap[i];
// 		this.heap[i] = this.heap[j];
// 		this.heap[j] = temp;
// 	}

// 	insert(value) {
// 		this.heap.push(value);
// 		this.bubbleUp();
// 	}

// 	bubbleUp() {
// 		let curIdx = this.heap.length - 1;

// 		while (0 < curIdx) {
// 			const parentIdx = Math.floor((curIdx - 1) / 2);

// 			if (this.heap[parentIdx] <= this.heap[curIdx]) {
// 				break;
// 			}

// 			this.swap(parentIdx, curIdx);
// 			curIdx = parentIdx;
// 		}
// 	}

// 	extractMin() {
// 		if (this.isEmpty()) {
// 			return 0;
// 		} else if (this.heap.length === 1) {
// 			return this.heap.pop();
// 		}

// 		const min = this.heap[0];

// 		this.heap[0] = this.heap.pop();
// 		this.sinkDown(0);

// 		return min;
// 	}

// 	sinkDown(idx) {
// 		const leftIdx = 2 * idx + 1; // 왼쪽 자식 노드
// 		const rightIdx = 2 * idx + 2; // 오른쪽 자식 노드
// 		const length = this.heap.length;
// 		let smallestIdx = idx;

// 		if (leftIdx < length && this.heap[leftIdx] < this.heap[smallestIdx]) {
// 			smallestIdx = leftIdx;
// 		}

// 		if (rightIdx < length && this.heap[rightIdx] < this.heap[smallestIdx]) {
// 			smallestIdx = rightIdx;
// 		}

// 		if (smallestIdx !== idx) {
// 			this.swap(this.heap, idx, smallestIdx);
// 			this.sinkDown(smallestIdx);
// 		}
// 	}
// }
