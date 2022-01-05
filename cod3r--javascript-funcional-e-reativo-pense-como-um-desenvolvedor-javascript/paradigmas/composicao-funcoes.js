function composicao(...funcoes) {
    return function(textoInicial) {
        return funcoes.reduce((acc, fn) => {
            return fn(acc);
        }, textoInicial);
    }
}

function gritar(texto) {
    return texto.toUpperCase();
}

function enfatizar(texto) {
    return `${texto}!!!`;
}

function espacar(texto) {
    return texto.split('').join(' ');
}

const resultado = composicao(gritar, enfatizar, espacar);
const resultadoSemEspacar = composicao(gritar, enfatizar);
console.log(resultado('Texto de teste'));
console.log(resultadoSemEspacar('Texto de teste'));
