/*

1) Crie um programa que dado um número imprima a sua tabuada.

2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]

6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]

*/
function tabuada(x){
   for(let i = 1; i < 11; i++){
      console.log(i + ' x ' + x + ' = ' + i*x);
   }
}
tabuada(3);

function numerosPares(list){
   for(let i = 0; i < list.length; i++){
      if (list[i] % 2 === 0){
         console.log(list[i]);
      }
   }
}
const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numerosPares(listaNumeros);

function letraInicial(list){
   for(let i = 0; i < list.length; i++){
      if (list[i][0] === 'y'){
         console.log(list[i]);
      }
   }
}
const listaNomes = ['jud', 'yasmin', 'yuri', 'geraldo'];
letraInicial(listaNomes);

function pares(){
   const lista = [];
   for(let i = 10; i <= 50; i++){
      if (i % 2 === 0){
         lista.push(i);
      }
   }
   return lista;
}
console.log(pares());

function mediaAlunos(list){
   let nota = 0;
   for(let i = 0; i < list.length; i++){
      nota += list[i];
   }
   let media = nota/list.length;
   if (media < 5){
      console.log('Reprovado com nota ' + media);
   }
}

function notaMaisAlta(list){
   let nota = 0;
   for(let i = 0; i < list.length; i++){
      if (list[i] > nota){
         nota = list[i];
      }
   }
   console.log('Nota mais alta: ' + nota);   
}
const notas = [2, 7, 3, 8, 0, 4];
mediaAlunos(notas);
notaMaisAlta(notas);

const n = 5%2 ===0;
console.log(n);