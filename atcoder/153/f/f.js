// F - Silver Fox vs Monster

function main (input) {
    input = input.trim().split('\n');
    const [N, D, A] = input.shift().split(' ').map(Number);
    const XH = input.map(i => i.split(' ').map(Number));
    XH.sort((a, b) => a[0] - b[0]);

    let answer = 0;

    // console.log(XH);
    while (XH.length) {
        let left = XH[0];
        let blast = [left[0], left[0] + (D * 2)];
        let victims = XH.filter(([x, h]) => x >= blast[0] && x <= blast[1]);
        let bombs = Math.ceil(left[1] / A);
        victims.forEach(v => v[1] -= A*bombs);
        // while (left[1] > 0) {
        //     victims.forEach(v => v[1] -= A);
        //     answer++;
        // }
        XH.shift();
        answer += bombs;
    }
    console.log(answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
