/**
 * @link https://www.acmicpc.net/problem/10828
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
	const [, ...actions] = input;

	const stack = new Stack();

	actions.forEach((v) => {
		if (v.startsWith('push')) {
			const [action, n] = v.split(' ');
			stack[action](Number(n));
		} else {
			stack[v]();
		}
	});

	stack.log();

	process.exit();
});

class Stack {
	constructor() {
		this.arr = [];
		this.logArr = [];
	}

	push(n) {
		this.arr.push(n);
	}

	pop() {
		if (this._empty()) {
			this.logArr.push(-1);
		} else {
			this.logArr.push(this.arr.pop());
		}
	}

	_size() {
		const len = this.arr.length;
		return len;
	}

	size() {
		this.logArr.push(this._size());
	}

	_empty() {
		const isEmpty = this._size() > 0 ? 0 : 1;
		return isEmpty;
	}

	empty() {
		this.logArr.push(this._empty());
	}

	top() {
		if (this._empty()) {
			this.logArr.push(-1);
		} else {
			this.logArr.push(this.arr[this._size() - 1]);
		}
	}

	log() {
		console.log(this.logArr.join('\n'));
	}
}
