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
        const [url] = input;
        console.log("\n");
        const result = domainName(url);

        console.log("\n");
        console.log({ result });

        process.exit();
    });

const domainName = (url = '') => {
    // if(url[0] === 'h') {
    //     const firstDoubleSlashIndex = url.indexOf('//');

    //     const texts = url.substring(firstDoubleSlashIndex + 2).split('.');
    //     if(texts[0] === 'www') {
    //         return texts[1];
    //     }
    //     return texts[0];
    // } else if(url[0] === 'w') {
    //     return url.split('.')[1];
    // } else {
    //     return url.split('.')[0];
    // }

    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};