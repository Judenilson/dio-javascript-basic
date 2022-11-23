/* Programa para calcular o valor de uma viagem.

são 3 variáveis. Sendo elas:
1 - Preço de Combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;
*/

const precoCombustivel = 4.49;
const kmPorLitro = 7;
const distancia = 120;

function valorDaViagem(precoCombustivel, kmPorLitro, distancia){
    return precoCombustivel * (distancia / kmPorLitro);
}

console.log(valorDaViagem(precoCombustivel, kmPorLitro, distancia).toFixed(2));