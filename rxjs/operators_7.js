const { of, Observable } = require('rxjs');

const ascendente = (valor1, valor2) => valor1 - valor2;
const decrescente = (valor1, valor2) => valor2 - valor1;

function ordenar(sentido) {
    return function (fonte) {
        return new Observable(subscriber => {
            fonte.subscribe({
                next(valor) {
                    if(Array.isArray(valor)) {
                        if(sentido == 'ascendente') {
                            subscriber.next(
                                valor.sort(ascendente)
                            );
                        }
                        if(sentido == 'decrescente') {
                            subscriber.next(
                                valor.sort(decrescente)
                            );
                        }

                    } else {
                        subscriber.next();
                    }
                },

                error(e) {
                    subscriber.error(e);
                },

                complete() {
                    subscriber.complete();
                }
            })
        })
    }
}

of([4,2,4,9,0,-2,1]).pipe(ordenar('decrescente')).subscribe(console.log);