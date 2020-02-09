// D - Maze Master

function Main(input) {
    input = input.trim().split('\n');
    let [H, W] = input.shift().split(' ').map(Number);
    let maze = input.map(r => r.split(''));

    const queue = [];
    let answer = 0;

    const di = [-1, 0, 1, 0];
    const dj = [0, -1, 0, 1];

    let dist = [...Array(H)].map(r => Array(W).fill(Infinity));

    const update = (i, j, x) => {
        if (dist[i][j] !== Infinity) return;

        dist[i][j] = x;
        queue.push([i, j]);
    }
    
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (maze[i][j] === '#') continue;
            
            let depth = 0;
            update(i, j, depth);

            while (queue.length) {
                let curr = queue.shift();
                depth = dist[curr[0]][curr[1]];
                for (let d = 0; d < 4; d++) {
                    let nexti = curr[0] + di[d];
                    let nextj = curr[1] + dj[d];

                    if (nexti < 0 || nexti >= H || nextj < 0 || nextj >= W) continue;

                    if (maze[nexti][nextj] === '#') continue;

                    update(nexti, nextj, depth + 1);
                }
            }

            answer = Math.max(answer, depth);

            dist = [...Array(H)].map(r => Array(W).fill(Infinity));
        }
    }

    console.log(answer);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
