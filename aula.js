let variavel = 10; //Valor  variável que pode ser alterado
const pi = 3.14; //Valor constante que não pode ser alterado

console.log(variavel);
variavel = 20;
console.log(variavel);

console.log(pi);
// pi = 5; Vai dar erro!

//Operações matemáticas: + - * /
//Desafio 1

function somar(x,y){
    return x+y;
}

console.log(somar(5,5));

let precoCombustivel = 10;
let gastoMedio = 2;
let distancia = 0;

function valorDaViagem(precoCombustivel, gastoMedio){
    return precoCombustivel * gastoMedio;
}
distancia = valorDaViagem(precoCombustivel, gastoMedio);

console.log(distancia);

function ehPar(x){
    if(x % 2 === 0){
        return true;
    } else {
        return false;
    }
}
console.log(ehPar(5));

/* 
== tipagem fraca
=== tipagem forte 
*/

/* função auto executada */
(function (){
    const a = 5;
    const b = 6;
    console.log(a + b);
})();

/* Objetos */

const pessoa = {
    nome: 'Judenilson',
    idade: 40,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();

console.log(pessoa.idade);
console.log(pessoa['idade']);

// Técnica Destructuryn
// const {tabuada, numeroMaiorMenor, numerosPares} = require('./auxiliary');