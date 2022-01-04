//atribuição por referencia
//uma cópia de referencia de um endereço de memoria para outra, ao alterar um
//ambos serão alterados
const pessoa = {
    nome: 'Lisa',
}

const pessoaNova = pessoa;
pessoaNova.nome = 'Luana';

console.log(pessoa);


//para que isso não ocorra, você pode clonar o objeto e atribuir para nova instancia.
//clonagem rasa
const objeto = {
    nome: 'cadeira',
}

const objetoNovo = {...objeto};
objetoNovo.nome = 'mesa';

console.log(objeto);
console.log(objetoNovo);


