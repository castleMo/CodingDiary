/**
 * @link https://www.acmicpc.net/problem/10845
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

	const queue = new Queue();

	actions.forEach((str) => {
		if (str.startsWith('push')) {
			const [action, n] = str.split(' ');
			queue[action](Number(n));
		} else {
			queue[str]();
		}
	});

	queue.log();

	process.exit();
});

class Queue {
	queue = [];
	logArr = [];

	push(x) {
		this.queue.push(x);
	}

	_pop() {
		return this.queue.shift() ?? -1;
	}

	pop() {
		this._addLog(this._pop());
	}

	_size() {
		return this.queue.length;
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

	_getElementByIndex(idx) {
		return this._empty() ? -1 : this.queue[idx];
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

	_addLog(v) {
		this.logArr.push(v);
	}

	log() {
		console.log(this.logArr.join('\n'));
	}
}
