/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoGasolina = 4.49;
const precoEtanol = 3.20;
const tipoCombustivel = 'gasolina';
const kmPorLitro = 7;
const distancia = 120;
let valorViagem = 0; 

if (tipoCombustivel === 'gasolina'){
    valorViagem = precoGasolina * (distancia/kmPorLitro);
} else {
    valorViagem = precoEtanol * (distancia/kmPorLitro);
}

console.log('R$ '+valorViagem.toFixed(2));