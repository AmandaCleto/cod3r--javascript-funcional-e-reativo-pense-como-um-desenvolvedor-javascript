//Os dois tipos de operadores:

//1. Operadores de criação
const { of, from } = require('rxjs');

//2. Operadores Encadeáveis (Pipeable Op.)
const { last, map } = require('rxjs/operators');

const observable = of(1, 2, 'Ana', false, 'último');
observable
    .pipe(
        last(),
        map(value => value[0]), map(value => `A letra encontrada foi: ${value}`)
    )
    .subscribe(function(valor) {
        console.log(valor);
    });

const observable2 = from([1, 2, 'Ana', false, 'pessoa']);
observable2
    .pipe(
        last(),
        map(value => value[0]), map(value => `A letra encontrada foi: ${value}`)
    )
    .subscribe(function(valor) {
        console.log(valor);
    });