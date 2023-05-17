/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/43165
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
	 const [n, t, r] = input;
 
	 console.log('\n');
	 const result = solution(n, t);
 
	 console.log(result);
	 console.log(result === r);
 
	 process.exit();
 });
 
 const solution = (nums, target) => {
	 let answer = 0;
 
	 const sum = (v1, v2, s) => {
		 if (s === 'p') {
			 return v1 + v2;
		 } else {
			 return v1 - v2;
		 }
	 };
 
	 const recursive = (ns, v) => {
		 if (ns.length === 0) {
			 if (v === target) {
				 answer++;
			 }
			 return;
		 }
 
		 const [v2, ...newNs] = ns;
 
		 recursive(newNs, sum(v, v2, 'p'));
		 recursive(newNs, sum(v, v2, 'm'));
	 };
 
	 const [v, ...arr] = nums;
 
	 recursive(arr, v);
	 recursive(arr, -v);
 
	 return answer;
 };
 