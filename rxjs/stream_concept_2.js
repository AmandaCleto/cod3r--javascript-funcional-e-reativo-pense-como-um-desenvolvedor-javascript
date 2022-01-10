function gerarElementos(array) {
    return {
        iniciar(fn) {
            let indice = 0;
            const intervalo = setInterval(() => {
                if(indice >= array.length) {
                    clearInterval(intervalo);
                } else {
                    fn(array[indice])
                    indice++;
                }
            }, 1000);

            return {
                parar() {
                    clearInterval(intervalo);
                }
            }
        }
    }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const temp1 = gerarElementos(numeros);
const exec1 = temp1.iniciar((numero) => {
    console.log(Math.pow(2,numero));
})


setTimeout(() => {
    exec1.parar();
}, 4000);
