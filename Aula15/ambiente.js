let num = [5, 8, 4]
num[3] = 6
num.push(7)

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`o vetor em ordem crescente é: ${num.sort()}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}