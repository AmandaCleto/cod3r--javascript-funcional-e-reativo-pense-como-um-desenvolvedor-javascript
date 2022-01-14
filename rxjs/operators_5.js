const { from, Observable, last } = require('rxjs');

function primeiro() {
    return function(source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(value) {
                    subscriber.next(value);
                    subscriber.complete();
                }
            })
        })
    }
}

function utlimo() {
    return function(source) {
        return new Observable(subscriber => {
            let u
            source.subscribe({
                next(value) {
                    u = value
                },
                complete() {
                    if(u !== undefined) {
                        subscriber.next(u)
                    }
                    subscriber.complete();
                }
            })
        })
    }
}
function nenhum() {
    return function(source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(value) {
                    subscriber.complete();
                },
            })
        })
    }
}

from([1,2,3,4,5]).pipe(primeiro()).subscribe(console.log);
from([1,2,3,4,5]).pipe(utlimo()).subscribe(console.log);
from([1,2,3,4,5]).pipe(nenhum()).subscribe(console.log);