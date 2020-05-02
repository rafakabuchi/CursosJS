let maiorDeIdade = false;
let possuirCarteiraDeMotorista = false;
let podeAplicar = maiorDeIdade || possuirCarteiraDeMotorista;

//Operador NOt (!)
console.log('pode aplicar: ',podeAplicar);

let candidatoRecusado = !podeAplicar;

console.log('Candidato Recusado',candidatoRecusado);
