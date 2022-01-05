//para saber se uma promise é uma promise
const p = new Promise(() => {});

Promise.resolve(p) === p; //if true it is a promise! if it is false so it is not a promise!

function composicao(...funcoes) {
    return function(textoInicial) {
        return funcoes.reduce(async (acc, fn) => {
            if(Promise.resolve(acc) === acc) {
                return fn(await acc);
            } else {
                return fn(acc);
            }
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
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(texto.split('').join(' '));
        }, 3000);
    });
}

const resultado = composicao(gritar, enfatizar, espacar);
resultado('Texto de teste').then((result) => console.log(result));


