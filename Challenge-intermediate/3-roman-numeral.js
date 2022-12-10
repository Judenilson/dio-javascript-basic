// Desafio: Numeral Romano

// Desafio
// Os algarismos romanos são representados por sete símbolos diferentes: I, V, X, L, C, D e M. Cada um com seu respectivo valor: 

// I : 1 
// V : 5 
// X : 10 
// L : 50 
// C : 100 
// D : 500 
// M : 1000 

// Eles são geralmente escritos do maior para o menor. Porém, para escrevermos “4” não usamos “IIII”, mas sim “IV” porque 5 - 1 = 4.

// Entrada
// Você receberá uma entrada em numeral romano.
 
// Saída
// Você deverá imprimir o numeral romano convertido para um número inteiro. 

// Entrada	Saída
// "V"	    5
// "II"	    2
// "MCII"	1102
 
const numeros = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };
  
// const entrada = "MCIV"; //1104
// const entrada = "MCII"; //1102
// const entrada = "V";
//   const entrada = "MMMCDXLIV"; //3444
  
  result = 0;
  for (let i = 0; i < entrada.length; i++) {
    if (i < entrada.length - 1) {
      if (numeros[entrada[i]] < numeros[entrada[i + 1]]) {
        result -= numeros[entrada[i]];
      } else {
        result += numeros[entrada[i]];
      }
    } else {
      result += numeros[entrada[i]];
    }
  }
  console.log(result);