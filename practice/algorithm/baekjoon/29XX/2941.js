/**
 * @link https://www.acmicpc.net/problem/2941
 * @since 2021/04/29
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
})
    .on('close', () => {
        const [str] = input;

        // 변경을 위한 배열
        const croatiaAlphabetWords = ['c=', 'c-', 'd-', 'lj', 'nj', 's=', 'z='];
        const croatiaAlphabetFirstWords = ['c', 'd', 'l', 'n', 's', 'z'];

        let alphabetCount = 0;

        for (let i = 0; i < str.length; i++) {
            const alphabet = str[i];

            // 만약 croatiaAlphabetFirstWords안에 저장된 알파벳들과 일치한다면
            if (croatiaAlphabetFirstWords.includes(alphabet)) {

                // 다음 알파벳을 추가적으로 붙여준다
                const word = alphabet + str[i + 1];

                if (word === 'dz') {
                    if (word + str[i + 2] === 'dz=') {
                        i += 2;
                        alphabetCount += 1;
                        continue;
                    }
                // 다음 알파벳을 붙여준 변수와 croatiaAlphabetWords안의 변수들을 비교해서 동일하면 카운트와 index를 더해준다
                } else if (croatiaAlphabetWords.includes(word)) {
                    i += 1;
                    alphabetCount += 1;
                    continue;
                }
            }

            alphabetCount += 1;

        }

        console.log(alphabetCount);

        process.exit();
    });