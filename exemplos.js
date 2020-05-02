let nome = ('Saori');
let idade = ('34');
let sobrenome = ('Kabuchi');

console.log (nome);
console.log(idade);
console.log(sobrenome);

const valorIngressoAdulto = 20;
console.log(valorIngressoAdulto);

let nome = 'Rafaela'; //string literal
let idade = 34; //number literal
let estaAprovado = true; //boolean
let sobrenome = undefined; //undefined
let corSelecionada = null; //redefinir um valor

let pessoa = {
    nome: 'Rafaela',
    idade: 34,
    estaAprovado: true,
    sobrenome: 'Kabuchi'
};
console.log(pessoa);


// Arrays

let familia = [60, 38, 34, 25];
console.log(familia.length);
console.log(familia[2])

let nomeDoColega = ['Tyagi', 38, 'São Paulo'];
console.log(nomeDoColega.length);

let corSite = "azul";
function resetaCor(){
    corSite = "";
};

console.log(corSite);
resetaCor();
console.log(corSite);


// verbo + substantivo = função
//resetaCor 
//transformarObjto
//alterarCor

let corSite = "azul";
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("verde", "claro");
console.log(corSite);

//funções
//realiza uma tarefa, não devolve nada

function dizerNome(){
    console.log('Rafaela');
}
dizerNome();

// faz um calculo operação e retorna algo
function multiplicadorPorDois (valor){
    return valor * 2;
}

//console.log(multiplicadorPorDois(50));

let resultado = multiplicadorPorDois(25);

console.log(resultado);


//operadores aritmeticos (matematicos)
let salario = 3;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario / salario);
console.log(salario * salario);
console.log(salario ** salario);

//operadores de incremento ++ --
let idade = 34;

console.log(idade++);
console.log(idade);

//operadores de atribuição
let valorTecladoGamer = 100;
console.log(valorTecladoGamer);

//operadores de igualdade
console.log( 1 === 1);

//operador ternário
let pontos = 100;
let tipo = pontos > 100? 'premium' : 'comum';
console.log(tipo);

//operadores de comparação
//operadores lógico
//operador logico e (&&) - retorna TRUE se os dois operando forem true
//operador (||) - retornar true se um dos operandos forem true
//operador

console.log(false && true);
console.log(false && false);
console.log(true && false);

//let maiorDeIdade = true;
//let possuirCarteiraDeMotorista = true;
//let podeAplicar = maiorDeIdade && possuirCarteiraDeMotorista;
//console.log(podeAplicar);

let maiorDeIdade = false;
let possuirCarteiraDeMotorista = false;
let podeAplicar = maiorDeIdade || possuirCarteiraDeMotorista;

//Operador NOt (!)
console.log('pode aplicar: ',podeAplicar);

let candidatoRecusado = !podeAplicar;

console.log('Candidato Recusado',candidatoRecusado);


//false || true
//false || 'rafaela'
//false || 1
// falsy / undefined / null / 0 / false / ' ' / NaN - not a number
// truthy

let corPersonalizada = 'vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);

//exercicio de troca de cores

let a = 'vermelho';
let b = 'azul';

let troca = a;
a = b;
b = troca;

console.log(a);
console.log(b);

//if .. else
//se a hora estiver entre 06:00 até 12:00 = bom dia!
//se a hora esiver entre 12:0 até 18:00 = boa tarde!
//caso contrário = Boa noite!

if (condicao){
    //codigo a ser executado
}
else if (outra condiçao){
    //codigo a ser executado
}
else{
    //código a ser executado
}

let hora = 8;

if (hora > 6 && hora < 12) {
    console.log("Bom dia!");
}
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde!");
}
else {
    console.log("Boa Noite!");
}



//switch case

let permissao; //usuario comum, gerente, diretor

permissao = 'diretor';

switch (permissao) {
    case 'comum' : 
    console.log('usuario comum');
    break;

    case 'gerente' : 
    console.log('usuario gerente');
    break;

    case 'diretor' : 
    console.log('usuario fodão');
    break;

    default: 
    console.log('usuário zé ninguem');
}

// 1. For
for(let i = 1; i <= 5; i++) {
console.log('estou aprendendo FOR!', i);
}

// 1. For
for(let i = 1; i <= 5; i++) {
if (i % 2 !== 0){
    console.log(i);
}
}


// while loop
let i  = 5;

while (i >= 1){
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}


//do .. while
let i = 0;
do {
    console.log('digitando...!');
    i++;
} while (i < 10)
	
const pessoa = {
    nome: 'Saori',
    idade: '34'
};
//key-value
for(let chave in pessoa) {
    console.log(chave, pessoa['nome']);
}

const cores = ['vermelho', 'azul', 'verde', 'branco', 'amarelo', 'roxo'];
for(let indice in cores){
    console.log(indice, cores[indice])
}	


//for-of
const cores = ['vermelho', 'azul', 'verde', 'branco', 'amarelo', 'roxo'];
for(let cor of cores){
    console.log(cor);
}


//exercicios
//escreva uma função que usa 2 numeros e retorna o maior que eles

let valorMax = max (3,7);
console.log(valorMax);

function max(numero1, numero2) {
    if(numero1 > numero2)
    return numero1;
    else return numero2;
}

let valorMaior = max (26,2);
console.log(valorMaior);

function max(numero1, numero2){
    return numero1>numero2 ? numero1 : numero2;
}

const resultado = fizzBuzz(3);
console.log(resultado);

function fizzBuzz(entrada){
    if ( typeof entrada !== 'number')
        return 'não é um numero';
    if ((entrada % 3 === 0) && (entrada %5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    
    return entrada;
}