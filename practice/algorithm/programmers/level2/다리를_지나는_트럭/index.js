/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42583?language=javascript
 * @description
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
	 const [bl, w, tw, r] = input;
 
	 console.log('\n');
	 const result = solution(bl, w, tw);
 
	 console.log(result);
	 console.log(result === r);
 
	 process.exit();
 });
 
 const solution = (bridge_length, weight, truck_weights) => {
	 // Array의 무게 합
	 const getWeight = (arr) => arr.reduce((pre, cur) => pre + cur[0], 0);
 
	 let answer = 0;
 
	 // 다리를 건너는 트럭 큐
	 const queue = [];
 
	 // truck_weights.shift()대신 idx로 다리를 건널 트럭 선택
	 let idx = 0;
 
	 while (queue.length || idx < truck_weights.length) {
		 // 맨 앞의 트럭이 다리를 건널 수 있는 시간이 되면
		 if (queue.length && queue[0][1] === bridge_length) {
			 queue.shift();
		 }
 
		 if (queue.length < bridge_length) {
			 if (getWeight(queue) + truck_weights[idx] <= weight) {
				 queue.push([truck_weights[idx++], 0]);
			 }
		 }
 
		 answer++;
 
		 for (let i = 0; i < queue.length; i++) {
			 queue[i][1] += 1;
		 }
	 }
 
	 return answer;
 };
 