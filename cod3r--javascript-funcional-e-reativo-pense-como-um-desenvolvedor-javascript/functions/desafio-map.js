// Criar duas funções MAP:
// 1- Criar função somar os valores do objeto: quantidade * item, cada item com sua soma

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const pegarSomas = (item) => item.qtde * item.preco;
console.log(carrinho.map(pegarSomas));

// 2- Criar função que contenha somente os nomes do carrinho

const pegarNomes = (item) => item.nome;
console.log(carrinho.map(pegarNomes));