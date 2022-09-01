/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/60058
 * @description
 * 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
 * 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
 * 	단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
 * 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
 * 	3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
 * 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
 * 	4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
 * 	4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
 * 	4-3. ')'를 다시 붙입니다.
 * 	4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
 * 	4-5. 생성된 문자열을 반환합니다.
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
	 const [p, r] = input;
 
	 console.log('\n');
	 const result = solution(p);
 
	 console.log(result);
	 console.log(result === r);
 
	 process.exit();
 });
 
 const solution = (p) => {
	 const getBalancedString = (s) => {
		 let o = 0;
		 let c = 0;
 
		 for (let i = 0; i < s.length; i++) {
			 const char = s[i];
			 if (char === '(') {
				 o++;
			 } else {
				 c++;
			 }
 
			 if (o === c) {
				 return {
					 rest: s.substring(i + 1),
					 str: s.substring(0, i + 1),
					 idx: i,
				 };
			 }
		 }
	 };
 
	 const isValid = (s) => {
		 const stack = [];
 
		 for (let i = 0; i < s.length; i++) {
			 if (s[i] === '(') {
				 stack.push('(');
			 } else {
				 if (!stack.length) {
					 return false;
				 }
 
				 stack.pop();
			 }
		 }
 
		 return true;
	 };
 
	 const recursive = (w) => {
		 // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
		 if (!w.length) {
			 return '';
		 }
 
		 // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
		 // 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
		 const { str: u, rest: v } = getBalancedString(w);
 
		 // 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
		 if (isValid(u)) {
			 //   3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
			 return u + recursive(v);
		 }
 
		 // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
		 // 4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
		 // 4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
		 // 4-3. ')'를 다시 붙입니다.
		 let str = '(' + recursive(v) + ')';
 
		 // 4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
		 for (let i = 1; i < u.length - 1; i++) {
			 const c = u[i] === '(' ? ')' : '(';
			 str += c;
		 }
 
		 // 4-5. 생성된 문자열을 반환합니다.
		 return str;
	 };
 
	 return recursive(p);
 };
 