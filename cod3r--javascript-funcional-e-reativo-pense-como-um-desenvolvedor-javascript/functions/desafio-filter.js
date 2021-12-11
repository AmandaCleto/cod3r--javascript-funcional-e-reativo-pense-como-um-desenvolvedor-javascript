// Criar duas funções FILTER:
// 1- Criar função que pegue os itens com quantidade maior que 3

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const pegarQtdeMaior3 = (item) => item.qtde > 3;
console.log(carrinho.filter(pegarQtdeMaior3));

