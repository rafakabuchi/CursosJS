let valores = [1, 2, 7, 37, 1985, 2000, 2020, 26, 13]

valores.sort()
    /*
    console.log(valores)
    for (let pos = 0; pos < valores.length; pos++) {
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    }
    */

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}