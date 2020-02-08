// C - Fennec vs Monster

function main(input) {
    input = input.trim().split('\n');
    let [ N, K ] = input[0].split(' ');
    let hArr = input[1].split(' ').map(Number);

    if (K >= hArr.length) {
        console.log(0);
        return;
    }

    console.log(hArr
        .sort((a, b) => b - a)
        .slice(K)
        .reduce((a, b) => a + b)
    );

    // console.log(N, K);
    // console.log(hArr);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
