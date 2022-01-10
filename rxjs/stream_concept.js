function gerarNumeros(fn) {
    return {
        iniciar(fn, tempo = 1000) {
            let num = 0;
            const intervalo = setInterval(() => {
                fn(num++)
            }, tempo);

            return {
                parar() {
                    clearInterval(intervalo);
                }
            }
        }
    }
}

const temp1 = gerarNumeros();
const exec1 = temp1.iniciar(numero => {
    console.log(numero * 2)
}, 2000);

const exec11 = temp1.iniciar(numero => {
    console.log(numero * 2)
}, 500);

const temp2 = gerarNumeros();
const exec2 = temp2.iniciar(numero => {
    console.log(numero + 100)
});

setTimeout(() => {
    exec1.parar();
    exec11.parar();
    exec2.parar();
}, 10000)