// Criar duas funções REDUCE, MAP, FILTER:
// 1- Criar função que pegue os itens frageis

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: true},
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: false},
]

const pegueFrageis = (item) => item.fragil == true;
console.log(carrinho.filter(pegueFrageis));

// 2- Criar função que pegue os itens frageis, e retorne as somas de totais
const somas = (item) => item.qtde * item.preco;
console.log(carrinho.filter(pegueFrageis).map(somas));

// 3- Criar função que gere a média dos valores

const media = (acc, el, index, array) => {
    const novaQtde = array.length
    const novoTotal = acc.total + el
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

const mediaInicial = { qtde: 0, total: 0, media: 0 }
console.log(carrinho.filter(pegueFrageis).map(somas).reduce(media, mediaInicial).media);