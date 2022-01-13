const { interval } = require('rxjs');
const { map, concatAll } = require('rxjs/operators');

interval(1000)
    .pipe(
        map(_ => [1,2,3]),
        concatAll() //retira do array e deixa cada qual em uma linha
        //transforma um high order observable (retorna outros observables) em um first order observable (retorna dados puros [numbers, objects...])
    )
    .subscribe(console.log)



