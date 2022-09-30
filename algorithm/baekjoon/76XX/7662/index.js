// /**
//  * @link https://www.acmicpc.net/problem/7662
//  * @name 이중_우선순위_큐
//  */
// const readline = require('readline');

// const strToNumberArr = (str) => str.split(' ').map(Number);

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// const input = [];

// rl.on('line', (line) => {
// 	input.push(line);
// }).on('close', () => {
// 	const T = Number(input.shift());

// 	const data = [];

// 	for (let i = 0; i < T; i++) {
// 		const n = Number(input.shift());
// 		const temp = [];
// 		for (let j = 0; j < n; j++) {
// 			const [char, num] = input.shift();
// 			temp.push([char, Number(num)]);
// 		}

// 		data.push([n, temp]);
// 	}

// 	console.log('\n');
// 	const result = solution(data);

// 	console.log(result.join('\n'));

// 	process.exit();
// });

// /**
//  *
//  * @param {[number, [string,number][]]} data
//  */
// function solution(data) {
// 	const ans = [];

// 	for (let i = 0; i < data.length; i++) {
// 		const [n, arr] = data[i];
// 	}

// 	return ans;
// }

// class Heap {
// 	constructor() {
// 		this.heap = [];
// 	}

// 	swap(i, j) {
// 		[this.heap[j], this.heap[i]] = [this.heap[i], this.heap[j]];
// 	}

// 	isEmpty() {
// 		return this.heap.length === 0;
// 	}
// }

// class MaxHeap extends Heap {
// 	insert(value) {
// 		if (this.isEmpty()) {
// 			this.heap.push(value);
// 			return;
// 		}

// 		this.heap.push(value);

// 		let curIdx = this.heap.length - 1;

// 		while (0 < curIdx) {
// 			const parentIdx = Math.floor((curIdx - 1) / 2);

// 			const curNode = this.heap[curIdx];
// 			const parentNode = this.heap[parentIdx];

// 			if (curNode <= parentNode) {
// 				break;
// 			}

// 			this.swap(curIdx, parentIdx);
// 			curIdx = parentIdx;
// 		}
// 	}

// 	extract() {
// 		if (this.isEmpty()) {
// 			return -1;
// 		} else if (this.heap.length === 1) {
// 			return this.heap.pop();
// 		}

// 		const best = this.heap[0];
// 		this.heap[0] = this.heap.pop();

// 		let curIdx = 0;
// 		while (true) {
// 			const leftIdx = curIdx * 2 + 1;
// 			const rightIdx = curIdx * 2 + 2;
// 			let bestIdx = curIdx;

// 			if (this.heap[leftIdx] && this.heap[bestIdx] < this.heap[leftIdx]) {
// 				bestIdx = leftIdx;
// 			}

// 			if (this.heap[rightIdx] && this.heap[bestIdx] < this.heap[rightIdx]) {
// 				bestIdx = rightIdx;
// 			}

// 			if (curIdx === bestIdx) {
// 				break;
// 			}

// 			this.swap(curIdx, bestIdx);
// 			curIdx = bestIdx;
// 		}

// 		return best;
// 	}
// }

// class MinHeap extends Heap {
// 	insert(value) {
// 		if (this.isEmpty()) {
// 			this.heap.push(value);
// 			return;
// 		}

// 		this.heap.push(value);

// 		let curIdx = this.heap.length - 1;

// 		while (0 < curIdx) {
// 			const parentIdx = Math.floor((curIdx - 1) / 2);

// 			const curNode = this.heap[curIdx];
// 			const parentNode = this.heap[parentIdx];

// 			if (parentNode <= curNode) {
// 				break;
// 			}

// 			this.swap(curIdx, parentIdx);
// 			curIdx = parentIdx;
// 		}
// 	}

// 	extract() {
// 		if (this.isEmpty()) {
// 			return -1;
// 		} else if (this.heap.length === 1) {
// 			return this.heap.pop();
// 		}

// 		const best = this.heap[0];
// 		this.heap[0] = this.heap.pop();

// 		let curIdx = 0;
// 		while (true) {
// 			const leftIdx = curIdx * 2 + 1;
// 			const rightIdx = curIdx * 2 + 2;
// 			let bestIdx = curIdx;

// 			if (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[bestIdx]) {
// 				bestIdx = leftIdx;
// 			}

// 			if (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[bestIdx]) {
// 				bestIdx = rightIdx;
// 			}

// 			if (curIdx === bestIdx) {
// 				break;
// 			}

// 			this.swap(curIdx, bestIdx);
// 			curIdx = bestIdx;
// 		}

// 		return best;
// 	}
// }
