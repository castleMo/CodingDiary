/**
 * @link
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
	const [e, r, s, a, re] = input;

	console.log('\n');
	const result = solution(e, r, s, a);

	console.log({ result });
	console.log(result.join() === re.join());

	process.exit();
});

const solution = (enroll, referral, seller, amount) => {
	const idxMap = {};

	enroll = enroll.map((name, idx) => {
		idxMap[name] = idx;
		return new Node(name);
	});

	referral.forEach((name, idx) => {
		if (name === '-') return;

		const parentIdx = idxMap[name];
		const parent = enroll[parentIdx];
		const me = enroll[idx];
		parent.addChild(me);
		me.setParent(parent);
	});

	for (let i = 0; i < seller.length; i++) {
		const sIdx = idxMap[seller[i]];

		let a = amount[i] * 100;
		let me = enroll[sIdx];

		while (me && a > 0) {
			const ma = a - Math.floor(a / 10);
			me.addAmount(ma);
			a -= ma;
			me = me.parent;
		}
	}

	return enroll.map((n) => n.amount);
};

class Node {
	name = '';
	amount = 0;
	children = [];
	parent = undefined;

	constructor(name) {
		this.name = name;
	}

	addChild(user) {
		this.children.push(user);
	}

	setParent(user) {
		this.parent = user;
	}

	addAmount(amount) {
		this.amount += amount;
	}
}
