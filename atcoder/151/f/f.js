// F - Enclose All

function Main(input) {
    input = input.trim().split('\n');
    let N = Number(input.shift());
    let points = input.map(p => p.split(' ').map(Number));

    const dist = (p1, p2) => {
        return Math.sqrt(
            Math.pow(p2[0] - p1[0], 2) +
            Math.pow(p2[1] - p1[1], 2)
        )
    };

    let maxDistance = 0;

    for (let i = 0; i < N; i++) {
        for (let j = i+1; j < N; j++) {
            let distance = dist(points[i], points[j]);
            maxDistance = Math.max(maxDistance, distance);
        }
    }
    console.log(maxDistance / 2);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
