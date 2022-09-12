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
	const [n, w, r] = input;

	console.log('\n');
	const result = solution(n, w);

	console.log(result);
	console.log(result === r);

	process.exit();
});

const solution = (n, wires) => {
	let answer = 999;
	const map = {};

	const getCnt = (node, exceptionNode) => {
		let cnt = 0;
		const queue = [node];
		const set = new Set();
		set.add(node);
		set.add(exceptionNode);

		while (queue.length) {
			const curNode = queue.pop();
			cnt++;
			for (const n of map[curNode]) {
				if (!set.has(n)) {
					set.add(n);
					queue.push(n);
				}
			}
		}

		return cnt;
	};

	for (const w of wires) {
		const [v1, v2] = w;

		map[v1] = map[v1] ? [...map[v1], v2] : [v2];
		map[v2] = map[v2] ? [...map[v2], v1] : [v1];
	}

	for (const w of wires) {
		const [v1, v2] = w;

		const v1Cnt = getCnt(v1, v2);
		const v2Cnt = getCnt(v2, v1);

		answer = Math.min(answer, Math.abs(v1Cnt - v2Cnt));
	}

	return answer;
};

// const solution = (n, wires) => {
// 	let answer = 9999;

// 	const nodes = [];

// 	const getNode = (me) => nodes.find((node) => node.me === me);
// 	const getNodeCnt = (n, removeNode) => {
// 		const set = new Set([n.me, removeNode.me]);
// 		const queue = [n];

// 		let cnt = 0;

// 		while (queue.length) {
// 			const node = queue.shift();
// 			cnt++;
// 			const arr = [...node.linkNodes];

// 			for (const _node of arr) {
// 				const me = _node.me;
// 				if (!set.has(me)) {
// 					set.add(me);
// 					queue.push(_node);
// 				}
// 			}
// 		}

// 		return cnt;
// 	};

// 	for (const wire of wires) {
// 		const [v1, v2] = wire;

// 		if (!getNode(v1)) {
// 			let linkNode = getNode(v2);
// 			if (!linkNode) {
// 				linkNode = new Node(v2);
// 				nodes.push(linkNode);
// 			}

// 			const node = new Node(v1);
// 			linkNode.addLinkNode(node);
// 			node.addLinkNode(linkNode);
// 			nodes.push(node);
// 		} else {
// 			const node = getNode(v1);

// 			let linkNode = getNode(v2);
// 			if (!linkNode) {
// 				linkNode = new Node(v2);
// 				linkNode.addLinkNode(node);
// 				nodes.push(linkNode);
// 			}

// 			node.addLinkNode(linkNode);
// 		}
// 	}

// 	for (const wire of wires) {
// 		const [v1, v2] = wire;

// 		const v1Node = getNode(v1);
// 		const v2Node = getNode(v2);

// 		const v1Cnt = getNodeCnt(v1Node, v2Node);
// 		const v2Cnt = getNodeCnt(v2Node, v1Node);

// 		answer = Math.min(answer, Math.abs(v1Cnt - v2Cnt));
// 	}

// 	return answer;
// };

class Node {
	linkNodes = [];
	me = 0;

	constructor(me) {
		this.me = me;
	}

	addLinkNode(node) {
		this.linkNodes.push(node);
	}
}
