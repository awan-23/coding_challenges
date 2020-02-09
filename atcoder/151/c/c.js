// C - Welcome to AtCoder

function Main(input) {
    input = input.trim().split('\n');
    let [N, M] = input.shift().split(' ');
    let submissions = input.map(i => {
        let [p, s] = i.split(' ');
        return [Number(p), s === 'AC'];
    });

    let penalties = 0;
    let done = []
    let wrongCount = {};

    submissions.forEach(([p, s]) => {
        if (done.includes(p)) {
            return;
        }
        if (s) {
            done.push(p);
            penalties += wrongCount[p] || 0;
        } else {
            if (wrongCount[p]) {
                wrongCount[p] += 1;
            } else {
                wrongCount[p] = 1;
            }
        }
    })

    console.log(`${done.length} ${penalties}`);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
