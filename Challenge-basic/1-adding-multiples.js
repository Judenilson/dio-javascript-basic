// Desafio: Somando Múltiplos

// Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

// Entrada
// A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

// Saída
// A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.

// Entrada	Saída
// 5       50
// 20	


var a = 5
var N = 20
let result = 0;
for (let i = 0; i <= N; i++){
  if (i % a === 0){
    result += i;
  }
}
console.log(result);
