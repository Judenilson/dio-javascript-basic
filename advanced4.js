//const entrada = [1,0,2,3,0,4,5,0];
const entrada = [2,0,4,0];
let saida = [];
let tamanhoEntrada = entrada.length;
for (let i = 0; i < tamanhoEntrada; i++) {
    if (entrada[i] != 0 ){
        saida.push(entrada[i]);        
    } else{
        saida.push(0);
        saida.push(0);
    }
    if (saida.length === tamanhoEntrada){break}
}
console.log(saida);