/**
 * @link https://www.acmicpc.net/problem/10866
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

	const deque = new Deque();

	actions.forEach((str) => {
		if (str.startsWith('push')) {
			const [action, n] = str.split(' ');
			deque[action](Number(n));
		} else {
			deque[str]();
		}
	});

	deque.log();

	process.exit();
});

class Deque {
	arr = [];
	logArr = [];

	_addLog(s) {
		this.logArr.push(s);
	}

	_getElementByIndex(idx) {
		return this._empty() ? -1 : this.arr[idx];
	}

	push_front(x) {
		this.arr.unshift(x);
	}

	push_back(x) {
		this.arr.push(x);
	}

	_pop_front() {
		return this.arr.shift() ?? -1;
	}

	pop_front() {
		this._addLog(this._pop_front());
	}

	_pop_back() {
		return this.arr.pop() ?? -1;
	}

	pop_back() {
		this._addLog(this._pop_back());
	}

	_size() {
		return this.arr.length;
	}

	size() {
		this._addLog(this._size());
	}

	_empty() {
		return this._size() > 0 ? 0 : 1;
	}

	empty() {
		this._addLog(this._empty());
	}

	_front() {
		return this._getElementByIndex(0);
	}

	front() {
		this._addLog(this._front());
	}

	_back() {
		return this._getElementByIndex(this._size() - 1);
	}

	back() {
		this._addLog(this._back());
	}

	log() {
		console.log(this.logArr.join('\n'));
	}
}
