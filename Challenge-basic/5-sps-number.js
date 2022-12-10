// Desafio: Subtraindo o Produto e a Soma de um Número

// Dado um número inteiro ( n ) , retorne a diferença entre o produto de seus dígitos e a soma de seus dígitos.

// Entrada
// A entrada consiste em um número inteiro ( n );

// Saída
// A saída consiste na multiplicação do produto dos dígitos ( n ), a soma de seus dígitos e a diferenção entre o produto e a soma, como no exemplo abaixo: 
// Entrada	Saída
// 234	    15
// Explicação: 
// Produto de dígitos = 2 * 3 * 4 = 24
// Soma dos dígitos = 2 + 3 + 4 = 9
// Resultado = 24 - 9 = 15

let lines = "234"; 
let soma = 0;
let produto = 1;

for (let i = 0; i < lines.length; i++) {
    let digito = parseInt(lines[i], 10); 
    soma += digito;
    produto *= digito;
}
console.log(produto - soma);
