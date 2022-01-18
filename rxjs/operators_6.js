const { of, Observable } = require('rxjs');

function terminadosCom(parteFinal) {
    return function (fonte) {
        return new Observable(subscriber => {
            fonte.subscribe({
                next(valor) {
                    if(Array.isArray(valor)) {
                        subscriber.next(
                            valor.filter((el) => el.endsWith(parteFinal))
                        );
                    } else if(valor.endsWith(parteFinal)) {
                        subscriber.next(valor);
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

of(['Ana Clara', 'Maria Silva', 'Pedro Rocha']).pipe(terminadosCom('a')).subscribe(console.log);