// Desafio: Fatorial Desajeitado

// Desafio
// O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.

// Entrada
// A entrada consiste em um valor inteiro positivo N.

// Saída
// A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.

// Exemplo 1:
// Entrada	Saída
// 4	    7
// Explicação: 7 = 4 * 3 / 2 + 1

// Exemplo 2:
// Entrada	Saída
// 10	    12
// Explicação: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1

let n = 4;

if (n <= 2) {
  console.log(n);
} else {
  let numbers = [];
  let i = n;
  let j = 0;
  while (i > 0) {
    numbers[j] = i;
    i--;
    j++;
  }

  let multiplication = [];
  let division = [];

  for (let i = 0; i < numbers.length - 1; i += 4) {
    multiplication.push(numbers[i] * numbers[i + 1]);
  }
  j = 0;
  for (let i = 2; i < numbers.length; i += 4) {
    division.push(parseInt(multiplication[j] / numbers[i]));

    if (j + 2 == multiplication.length && i + 4 === numbers.length) {
      division.push(multiplication[j + 1]);
    }

    if (i + 3 === numbers.length) {
      if ((i + 2) % 4 === 0) {
        division.push(numbers[i + 2]);
      }
    }
    j++;
  }

  let r = division[0];
  for (let i = 1; i < division.length; i++) {
    r -= division[i];
  }
  for (let i = 3; i < numbers.length; i += 4) {
    r += numbers[i];
  }
  console.log(r);
}

// 3 = 6
// 4 = 7
// 5 = 7
// 6 = 8
// 7 = 6
// 8 = 9
// 9 = 10
// 10 = 12
// 11 = 9
// 12 = 13

//0 1 2
//3*2/1
//6/1
//6

//0 1 2 3 4
//5 * 4/3 + 2 - 1
//20/3 +2 -1
//6 + 2 -1
//7

//0 1 2 3 4 5
//6*5/4 +3 -2*1
//30/4 +3 -2
//7 +3 -2
//8

//0 1 2 3 4 5 6 7 8 9
//10*9/8 +7 -6*5/4 +3 -2*1
//90/8 +7 -30/4 +3 -2
//11 +7 -7 +3 -2
//12

//0 1 2 3 4 5 6 7 8
//9*8/7 +6 -5*4/3 +2 -1
//72/7 +6 -20/3 +2 -1
//10 +6 -6 +2 -1
//11
