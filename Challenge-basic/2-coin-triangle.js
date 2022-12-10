// Desafio: Triângulo de Moedas

// Neste desafio temos N moedas que precisam ser organizadas em forma de triângulo, desse modo, você deverá escrever um programa que imprima a altura máxima que podemos alcançar usando essas N moedas.

// Entrada
// A primeira linha terá o valor de 1 moeda, a segunda linha terá o valor de 2 moedas e assim por diante.

// Saída
// A saída consiste no retorno da altura máxima que o triângulos de moedas terá.
// Entrada	Saída
// 7	    3
// Explicação: A altura máxima será de 3, colocando 1, 2 e então 3 moedas. Não é possível usar a moeda que irá sobrar.


let valorMoeda = 7
let qtdLinhas = 0;
let somaMoedas = 0;
let i = 1;
while(i < valorMoeda){
  somaMoedas += i
  if (somaMoedas > valorMoeda){
    break;
  }
  qtdLinhas += 1;
  i++;
}
console.log(qtdLinhas);
