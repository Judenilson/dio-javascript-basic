// Desafio: Calculando o Perímetro de um Triângulo Equilátero

// Dado o comprimento dos lados de um triângulo equilátero, escreva um programa para encontrar a área da circunferência do triângulo equilátero dado.

// Entrada
// A entrada será dada por um inteiro N que representará os lados do triângulo. 

// Saída
// A saída deverá retornar “A area da circunferencia é: “,  e em seguida o valor do perimetro do triângulo, conforme exemplo abaixo.
// Entrada	Saída
// 6	    A area da circunferencia eh: 37.70


let pi = 3.14159265358979323846;
let lado = 6;
let area = 0;
area = ((lado * lado)/3) * pi;
console.log("A area da circunferencia eh: " + area.toFixed(2));
