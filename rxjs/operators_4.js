const { Observable } = require("rxjs");

function elementosComDelay(tempo, ...elementos) {
    return new Observable(subscriber => {
        (elementos || []).forEach((elemento, indice) => {
          setTimeout(() => {
            subscriber.next(elemento);

            if(elementos.length === indice + 1) {
                subscriber.complete();
            }
          }, tempo * (indice + 1))
        })
    })
}

elementosComDelay(1000, 1, 2, 3, 4, 5).subscribe(console.log)