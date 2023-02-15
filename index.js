const { edFolha, edGalho } = require ('./arrays');

function juntaListas(lista1, lista2) {
    let listaFinal = [];

    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;

    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];
        // console.log(`comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}`)

        if(produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1;
            posicaoAtualLista1++;
        } else {
            listaFinal[atual] = produtoAtualLista2;
            posicaoAtualLista2++;
        }
        atual++
    }

    return listaFinal;
}

console.log(juntaListas(edFolha, edGalho));