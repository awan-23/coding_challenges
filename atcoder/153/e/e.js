// E - Crested Ibis vs Monster

function main(input) {
    input = input.trim().split('\n');
    let H = input.shift().split(' ')[0];
    let spells = input.map(v => v.split(' ').map(Number));

    // results[i] = the min mana needed to defeat a monster with health i
    const results = Array(H + 1).fill(Infinity);
    results[0] = 0;

    for (let i = 1; i <= H; i++) {
        spells.forEach(([dmg, mana]) => {
            let adjH = i - dmg;
            let adjM = mana;
            
            if (adjH > 0 && results[adjH] !== undefined) {
                adjM += results[adjH];
            }

            results[i] = Math.min(results[i] || Infinity, adjM);
        })
    }
    console.log(results[H]);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
