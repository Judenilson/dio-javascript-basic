// Desafio: Duplicando Zeros

// Desafio
// Dado um array inteiro de comprimento fixo Arr, duplique cada ocorrência de zero, deslocando os elementos restantes para direita. Fique atento, pois os elementos que estiverem além do comprimento da matriz original, não devem ser gravados. Caso não houver nenhum zero, retorne a matriz original.

// Entrada
// A entrada vai ser composta de um array com tamanho fixo de 8 índices.
// No bootcamp está errada a aentrada nos testes, pois existia um dado a mais que era um Inteiro com o tamanho do array q seria dado.

// Saída
// A saída será composta pelo array com os zeros devidamente duplicados. Caso não haja zero, retorne a própria matriz.

// ENTRADA  SAIDA
// 1        1, 0, 0, 2, 3, 0, 0, 4
// 0
// 2
// 3
// 0
// 4
// 5
// 0

// ENTRADA  SAIDA
// 1        1, 2, 3
// 2
// 3

// ENTRADA  SAIDA
// 2        2, 0, 0, 4
// 0
// 4
// 0
const N = 8; 
const entrada = [1,0,2,3,0,4,5,0];
// const N = 5; 
// const entrada = [1, 0, 1, 0, 1];
// const N = 4;
// const entrada = [2,0,4,0];

let saida = [];

for (let i = 0; i < N; i++) {
  if (entrada[i] != 0) {
    saida.push(entrada[i]);
  } else {
    saida.push(0);
    if (saida.length === N) {
        break;
      }
    saida.push(0);
  }
  if (saida.length === N) {
    break;
  }
}
console.log(saida);
