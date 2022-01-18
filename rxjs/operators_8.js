const { from, Observable } = require("rxjs");

function createPipeableOperator(operatorFn) {
    return function (source) {
        return new Observable((subscriber) => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete,
            });
        });
    };
}

function primeiro() {
    return createPipeableOperator(function (subscriber) {
        return {
            next(value) {
                subscriber.next(value);
                subscriber.complete();
            },
        };
    });
}

function utlimo() {
    return createPipeableOperator(function (subscriber) {
        let u;
        return {
            next(value) {
                u = value;
            },
            complete() {
                if (u !== undefined) {
                    subscriber.next(u);
                }
                subscriber.complete();
            },
        };
    });

}

function nenhum() {
    return createPipeableOperator(function (subscriber) {
        return {
            next(value) {
                subscriber.complete();
            },
        };
    });
}

from([1, 2, 3, 4, 5]).pipe(primeiro()).subscribe(console.log);
from([1,2,3,4,5]).pipe(utlimo()).subscribe(console.log);
from([1,2,3,4,5]).pipe(nenhum()).subscribe(console.log);
