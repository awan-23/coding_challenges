"use strict";

function Main(input) {
    input = input.trim().split('\n');
    let a = parseInt(input[0]);
    let [b, c] = input[1].split(' ').map(i => parseInt(i));
    let s = input[2];

    console.log('%d %s',a+b+c,s);
}


Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
