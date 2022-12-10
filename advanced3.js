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
const entrada = "MMMCDXLIV"; //3444

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