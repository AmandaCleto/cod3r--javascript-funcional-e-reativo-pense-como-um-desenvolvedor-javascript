const letras = [
    'O', 'L', 'Á',
    'M', 'U', 'N', 'D', 'O',
    '!', '!', '!',
];

const resultado = letras.reduce((acc, valor) => acc + valor);
console.log(resultado);


const letras2 = [
    ['O', 'L', ['Á']],
    'M', ['U', 'N'], 'D', 'O',
    ['!', ['!'], ['!']],
];

const retirarArrayInterno = letras2.flat(Infinity);
const resultado2 = retirarArrayInterno.reduce((acc, valor) => acc + valor);
console.log(resultado2);

//faz o map 1o e depois achata os valores
const resultado3 = letras2.flatMap(valor => [valor]).reduce((acc, valor) => acc + valor);
console.log(resultado3);