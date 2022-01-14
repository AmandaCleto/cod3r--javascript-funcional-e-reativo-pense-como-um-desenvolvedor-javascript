const { from, asyncScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators')

//comportamento padrão é sincrono
console.log('começo')

from([1,2,3,4,5]).subscribe(console.log)

console.log('fim')


console.log('\n\n')


//podemos deixar assincrono
console.log('começo 2')

from([1,2,3,4,5]).pipe(observeOn(asyncScheduler)).subscribe(console.log)

console.log('fim 2')
