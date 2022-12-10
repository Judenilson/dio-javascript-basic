// Desafio: Porcentagem de Diferença Entre Dois Números

// Descrição
// Dados dois números A e B, onde o valor de ‘B’ é incrementado ou decrementado por alguma porcentagem de ‘A’. Sua tarefa é descobrir qual é a porcentagem de diferença entre esses dois valores.

// Entrada
// A entrada é composta por dois números inteiros, A e B. 

// Saída
// A saída será a diferença de porcentagem entre os valores A e B.  

// Exemplo 1
// Entrada	Saída
// 20       25%
// 25

// Exemplo 2
// Entrada	Saída
// 30       16%
// 35


let A=30, B=35;

let dif = B-A;
let result = (dif/A)*100;
console.log(parseInt(result)+"%");