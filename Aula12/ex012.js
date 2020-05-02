var idade = 10
console.log(`você tem ${idade} anos`)
if (idade < 15) {
    console.log(`você é ilegível, tenha calma!`)
} else if (idade < 18 || idade > 65) {
    console.log(`Voto opcional`)
} else {
    console.log(`Seja um cidadão, você é obrigado a votar!`)
}