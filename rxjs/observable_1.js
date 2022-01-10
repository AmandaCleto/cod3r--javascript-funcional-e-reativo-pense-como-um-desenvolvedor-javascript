//destructuring
const { Observable } = require('rxjs');

const promise = new Promise((resolve) => {
    resolve('Usando Promises :D');
    //só pode usar um resolve, se quiser usar outro, terá que chamar outro then
});

promise.then(console.log);

const obs = new Observable((subscriber) => {
    //pode usar vários next, assim gerando uma stream de dados
    //pode gerar mais de um dado usando o mesmo observer
    subscriber.next('Usando');
    subscriber.next('Observable');
    setTimeout(() => {
        subscriber.next('Aparece depois, mas aparece ainda.');
        //pode indicar que é o fim do observable também
        subscriber.complete();
        // subscriber.error('erro');
    }, 2000);
    subscriber.next(':D');
});

obs.subscribe(console.log);
obs.subscribe(texto => console.log(texto.toUpperCase()));