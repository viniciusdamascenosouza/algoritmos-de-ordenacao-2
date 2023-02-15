const listaLivros = require('./arrays2');

function mergeSort(array) {
    if (array.length > 1) {
        const metadeArray = Math.floor(array.length / 2);

        const parte1 = mergeSort(array.slice(0, metadeArray));
        const parte2 = mergeSort(array.slice(metadeArray, array.length));
        array = ordena(parte1, parte2);
    }
    return array;
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        produtoAtualParte1 = parte1[posicaoAtualParte1];
        produtoAtualParte2 = parte2[posicaoAtualParte2];

        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1++
        } else{
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2++;
        }
    }
    return resultado.concat(posicaoAtualParte1 < parte1.length
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaLivros));