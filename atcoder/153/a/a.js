// A - Serval vs Monster
function main(input) {
    input = input.trim().split(' ');
    console.log(Math.ceil(input[0] / input[1]));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
