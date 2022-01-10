//destructuring
//noop = nao faz nada
const { Observable, noop } = require('rxjs');

function entre(min, max) {
    return new Observable(subscriber => {
        let i = min;
        while(i <= max) {
            subscriber.next(i)
            i++;
        }
        subscriber.complete();
   });
}
entre(4, 10).subscribe(num => console.log(`num: ${num}`), noop, () => console.log('Fim :D'));