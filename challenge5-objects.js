/*

1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/
class Carro {
    marca;
    cor;
    consumo;

    constructor(marca, consumo){
        this.marca = marca;
        this.consumo = consumo;
    }

    custoViagem (km, valorCombustivel){
        return valorCombustivel * (km / this.consumo);
    }

    print (){
        console.log(`marca: ${this.marca}, cor: ${this.cor}, consumo: ${this.consumo}`);
    }
};

const carroA = new Carro('vw', 7);
carroA.cor = 'prata';

console.log(carroA.custoViagem(120, 4.49).toFixed(2));
carroA.print();

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
        const imc = this.peso / Math.pow(this.altura,2);
        return imc;
    }
    print (){
        console.log(`nome: ${this.nome}, peso: ${this.peso}, altura: ${this.altura}, imc: ${this.calcularImc()}`);
    }
}

const pessoa = new Pessoa('Judenilson', 109, 1.75);
console.log(`O IMC de ${pessoa.nome} é ${pessoa.calcularImc().toFixed(2)}`);
pessoa.print();
new Pessoa('Jude',20,1.5).print();