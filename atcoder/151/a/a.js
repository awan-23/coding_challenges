// A - Next Alphabet

function main(input) {
    console.log(String.fromCharCode(input.charCodeAt(0) + 1));
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
