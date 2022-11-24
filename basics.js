// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 
/*
Desafio 1
Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

Entrada
A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

Saída
A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.
Entrada	Saída
5       50
20	
*/
var a = parseInt(gets());
var N = parseInt(gets());
let result = 0;
for (let i = 0; i <= N; i++){
  if (i % a === 0){
    result += i;
  }
}
print(result);

/*
Desafio 2
Neste desafio temos N moedas que precisam ser organizadas em forma de triângulo, desse modo, você deverá escrever um programa que imprima a altura máxima que podemos alcançar usando essas N moedas.

Entrada
A primeira linha terá o valor de 1 moeda, a segunda linha terá o valor de 2 moedas e assim por diante.

Saída
A saída consiste no retorno da altura máxima que o triângulos de moedas terá.
Entrada	Saída
7	    3
Explicação: A altura máxima será de 3, colocando 1, 2 e então 3 moedas. Não é possível usar a moeda que irá sobrar.
*/

let N = parseInt(gets()); 
let n = 1 + 8*N; 
let qtdLinhas = 0;
let somaMoedas = 0;
let i = 1;
while(i < N){
  somaMoedas += i
  if (somaMoedas > N){
    break;
  }
  qtdLinhas += 1;
  i++;
}
print(qtdLinhas);

/*Desafio 3
O programa deve ler um valor inteiro D indefinidas vezes, ele só irá parar quando o valor de D for igual a 0. Para cada D lido, imprima a soma dos 5 pares consecutivos a partir de D, inclusive ele mesmo , se for par. Se o valor de entrada for 4, por exemplo, a saída deve ser 40, que é o resultado da operação: 4+6+8+10+12, enquanto que se o valor de entrada for 11, por exempo, a saída deve ser 80, que é a soma de 12+14+16+18+20.

Entrada
O arquivo de entrada contém muitos valores inteiros. O último valor do arquivo é zero.

Saída
Imprima a saida conforme a explicação acima e o exemplo abaixo.
Exemplo de Entrada  Exemplo de Saída
4                   40
11                  80
0
*/
let x = parseInt(gets());
while (x !== 0)
{
  let y = 0;
  if  (x % 2 !== 0){ 
    x = x + 1;
  }
  y = x;
  for(let i = 0; i < 4; i++){
    x += 2;
    y += x;
  }
  print(y);
  x = parseInt(gets());
}

/*
Desafio 4
Dado o comprimento dos lados de um triângulo equilátero, escreva um programa para encontrar a área da circunferência do triângulo equilátero dado.

Entrada
A entrada será dada por um inteiro N que representará os lados do triângulo. 

Saída
A saída deverá retornar “A area da circunferencia é: “,  e em seguida o valor do perimetro do triângulo, conforme exemplo abaixo.
Entrada	Saída
6	    A area da circunferencia eh: 37.70
*/
let pi = 3.14159265358979323846;
let lado = gets();
let area = 0;
area = ((lado * lado)/3) * pi;
print("A area da circunferencia eh: " + area.tofixed(2));

/*
Desafio 5
Dado um número inteiro ( n ) , retorne a diferença entre o produto de seus dígitos e a soma de seus dígitos.

Entrada
A entrada consiste em um número inteiro ( n );

Saída
A saída consiste na multiplicação do produto dos dígitos ( n ), a soma de seus dígitos e a diferenção entre o produto e a soma, como no exemplo abaixo: 
Entrada	Saída
234	    15
Explicação: 
Produto de dígitos = 2 * 3 * 4 = 24
Soma dos dígitos = 2 + 3 + 4 = 9
Resultado = 24 - 9 = 15
*/

let lines = gets(); 
let soma = 0;
let produto = 1;

for (let i = 0; i < lines.length; i++) {
    let digito = parseInt(lines[i], 10); 
    soma += digito;
    produto *= digito;
}
print(produto - soma);
