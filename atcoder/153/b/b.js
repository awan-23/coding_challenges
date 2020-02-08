// B - Common Raccoon vs Monster

function main(input) {
    input = input.trim().split('\n');
    let H = input[0].split(' ')[0];
    let max = input[1].split(' ')
        .map(Number)
        .reduce((a, b) => a + b)
    console.log(max >= H ? 'Yes' : 'No');
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
