/**
 * @link https://www.acmicpc.net/problem/4673
 * @since 2021/04/27
 */

const getSelfNumber = (num) => {
    let sum = 0;
    if (num < 10) {
        sum = num + num;
    } else if (num < 100) {
        const tens = Math.floor(num / 10);
        const units = num % 10;

        sum = num + tens + units;
    } else if (num < 1000) {
        const hundreds = Math.floor(num / 100);
        const tens = Math.floor(num / 10) - (hundreds * 10);
        const units = num % 10;

        sum = num + hundreds + tens + units;
    } else if (num < 10000) {
        const thousands = Math.floor(num / 1000);
        const hundreds = Math.floor(num / 100) - (thousands * 10);
        const tens = Math.floor(num / 10) - (thousands * 100) - (hundreds * 10);
        const units = num % 10;

        sum = num + thousands + hundreds + tens + units;
    }

    return sum;
}

const oneToTenThousand = [];
for (let i = 1; i <= 10000; i++) {
    oneToTenThousand.push(i);
}

for (let i = 1; i <= 10000; i++) {
    const num = getSelfNumber(i);
    const index = oneToTenThousand.indexOf(num);
    if(index !== -1) oneToTenThousand.splice(index, 1);
}

for (const num of oneToTenThousand) {
    console.log(num);
}

process.exit();