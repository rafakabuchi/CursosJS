var agora = new Date()
var hora = agora.getHours()
console.log(`agora são ${hora} horas`)
if (hora >= 7 && hora <= 12) {
    console.log(`bom dia`)
} else if (hora >= 13 && hora <= 18) {
    console.log(`boa tarde`)
} else if (hora >= 19 && hora <= 23) {
    console.log(`boa noite`)
} else {
    console.log(`Boa madrugada!`)
}

/* var hora = 8
if (hora < 5){
console.log("boa madrugada")
}else if(hora < 12 ){
console.log("bom dia")
}else if(hora == 12){
console.log("bom meio dia")
}else if(hora < 18){
console.log("boa tarde")
}else{
    console.log("boa noite")
}*/