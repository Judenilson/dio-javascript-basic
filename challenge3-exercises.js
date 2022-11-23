/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/
const nota1 = 6;
const nota2 = 8;
const nota3 = 7;
let media = (nota1 + nota2 + nota3)/3;

function classificar(media){
    if (media < 5){
        return 'reprovação';
    } if (media < 7){
        return 'recuperação';
    }
    return 'passou de semestre';    
}
console.log('Média: ' + media.toFixed(1) + ' situação: ' + classificar(media));

/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/
const peso = 109;
const altura = 1.75;
let imc = peso / Math.pow(altura, 2);

function calcularImc(imc){
    if (imc < 18.5){
        return 'Abaixo do peso';
    } if (imc < 25){
        return 'Peso normal';
    } if (imc < 30){
        return 'Acima do peso';
    } if (imc < 40){
        return 'Obeso';
    } 
    return 'Obesidade Grave';
}
console.log('IMC: ' + imc.toFixed(2) + ' situação: ' + calcularImc(imc));

/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let condicaoPagamento = 'dinheiro';
const valorProduto = 10;

function calcularValor(valor, condicaoPagamento){
    if (condicaoPagamento === 'debito'){
        return valor * 0.9;
    } if (condicaoPagamento === 'dinheiro' || condicaoPagamento === 'pix'){
        return valor * 0.85;
    } if (condicaoPagamento === 'duas vezes'){
        return valor;
    } return valor * 1.1;
}

console.log('Valor do produto: R$ ' + valorProduto.toFixed(2) + ' Condição: ' + condicaoPagamento + ' Valor a pagar: R$ ' + calcularValor(valorProduto, condicaoPagamento).toFixed(2));
condicaoPagamento = 'debito';
console.log('Valor do produto: R$ ' + valorProduto.toFixed(2) + ' Condição: ' + condicaoPagamento + ' Valor a pagar: R$ ' + calcularValor(valorProduto, condicaoPagamento).toFixed(2));
condicaoPagamento = 'pix';
console.log('Valor do produto: R$ ' + valorProduto.toFixed(2) + ' Condição: ' + condicaoPagamento + ' Valor a pagar: R$ ' + calcularValor(valorProduto, condicaoPagamento).toFixed(2));
condicaoPagamento = 'duas vezes';
console.log('Valor do produto: R$ ' + valorProduto.toFixed(2) + ' Condição: ' + condicaoPagamento + ' Valor a pagar: R$ ' + calcularValor(valorProduto, condicaoPagamento).toFixed(2));
condicaoPagamento = 'mais vezes';
console.log('Valor do produto: R$ ' + valorProduto.toFixed(2) + ' Condição: ' + condicaoPagamento + ' Valor a pagar: R$ ' + calcularValor(valorProduto, condicaoPagamento).toFixed(2));