// D - Caracal vs Monster

function halveAndAdd(h, sumSoFar) {
    if (h === 1) {
        return sumSoFar + 1;
    }
    if (h % 2 === 1) {
        h--;
    }

    return 1 + halveAndAdd(h/2, sumSoFar) * 2;
}

function main(input) {
    H = Number(input.trim());
    
    // divide and conquer
    // let total = halveAndAdd(H, 0);

    let i = 0;
    let total = 0;
    while (H > 0) {
        H = Math.floor(H / 2);
        total += Math.pow(2, i);
        i++;
    }
    
    console.log(total);
}


// by akumachan
// function main(input) {
//     const attack = H => {
//         if (H === 1) {
//             return 1;
//         } else if (H % 2 === 1) {
//             H--;
//         }
//         return attack(H/2) * 2 + 1;
//     }

//     console.log(attack(Number(input.trim())));
// }

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
