function tabuada(x) {
   for (let i = 1; i < 11; i++) {
      console.log(x + 'x' + i + ' = ' + i * x);
   }
}

function numeroMaiorMenor(list) {
   let maior = 0;
   let menor = Infinity;
   for (let i = 1; i <= list[0]; i++) {
      if (list[i] > maior) {
         maior = list[i];
      }
      if (list[i] < menor) {
         menor = list[i];
      }
   }
   console.log(`Maior número: ${maior}`)
   console.log(`Menor número: ${menor}`)
}

function numerosPares(list) {
   let pares = "Números Pares: "
   for (let i = 1; i <= list[0]; i++) {
      if (list[i] % 2 === 0 ){
         pares += list[i];
         if (i < list[0]){
            pares += ', ';
         }
      }
   }
   console.log(pares);
}

//exporta as funções em um objeto literal.
module.exports = { tabuada, numeroMaiorMenor, numerosPares };