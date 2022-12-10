// Desafio: Removendo Letras Duplicadas

// Desafio
// Dado uma string S, retorne os valores removendo todas as letras que aparecem de forma duplicada, restando apenas letras que aparecem uma vez.

// Entrada
// A entrada consiste em uma string com letras duplicadas

// Saída
// A saída deverá retornar  a string sem as letras duplicadas, conforme exemplo abaixo

// Entrada	  Saída
// abbcddeof	abcdeof
// aabbcc	    abc

// const s = "aabbcc";
const s = "abbcddeof";

let result = "";

for (let index = 0; index < s.length; index++) {
  const str = s[index];

  if (result.includes(str)) continue;

  while (s[index] === s[index - 1]) {
    result = result.slice(0, -1);
  }
  result += str;
}

console.log(result);
