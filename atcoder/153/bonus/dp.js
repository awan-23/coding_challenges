/* 
Problem: Given an integer n, find the minimum number of steps to reach integer 1.

At each step, you can:

Subtract 1,

Divide by 2, if it is divisible by 2

Divide by 3, if it is divisible by 3
 */


// i is int, cache is Map<int, int>
function minOneRec(i, cache) {

    if (cache.has(i)) {
        return cache.get(i);
    }

    if (i <= 1) {
        cache.set(i, 0);
        return 0;
    }
    if (i <= 3) {
        cache.set(i, 1);
        return 1;
    }

    let a = i;
    let b = i;
    let c = i;
    
    a = 1 + minOne(i - 1, cache);
    if (i % 3 === 0) {
        c = 1 + minOne(i / 3, cache);
    }
    if (i % 2 === 0) {
        b = 1 + minOne(i / 2, cache);
    }

    result = Math.min(a, b, c);
    cache.set(i, result);
    return result;
}

function minOneIter(input) {
    const results = Array(input + 1).fill(Infinity);
    results[0] = 0;
    results[1] = 0;
    results[2] = 1;
    results[3] = 1;

    for (let i = 4; i <= input; i++) {
        let a = Infinity;
        let b = Infinity
        let c = Infinity;

        a = results[i - 1] + 1;
        if (i % 2 === 0) {
            b = results[i / 2] + 1;
        }
        if (i % 3 === 0) {
            c = results[i / 3] + 1;
        }

        results[i] = Math.min(a, b, c);
    }

    return results[input];
}

function main(input) {
    input = Number(input);
    
    // const result = minOneRec(input, new Map());
    const result = minOneIter(input);
    console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));