/* function fatorial(r) {
    let fat = 1
    for (let c = r; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5)) */

//RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}
console.log(fatorial(5))