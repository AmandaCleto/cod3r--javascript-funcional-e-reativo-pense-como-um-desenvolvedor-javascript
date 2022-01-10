//destructuring
const { interval, from } = require('rxjs');

//gerarNumeros = Observable, que implementa o padrão observer
const gerarNumeros = interval(500);

//subscribe = registra o observable
const registro = gerarNumeros.subscribe(numero => {
    console.log(Math.pow(2, numero));
});

//unsubscribe = desregistra o registro feito
setTimeout(() => {
    registro.unsubscribe();
}, 8000);

//para arrays
const array = [1,2,3]
const gerarElementos = from(array);
gerarElementos.subscribe(console.log);
