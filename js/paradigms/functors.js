//wrapper são objetos que implementam a função map
//que também é um 'wrapper' de um valor

function TipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined;
        },
        map(fn) {
            if(this.invalido()) {
                return TipoSeguro(null);
            } else {
                const novoValor = fn(this.valor);
                return TipoSeguro(novoValor);
            }
        },
        flatMap(fn) {
            //achatando o valor final
           return this.map(fn).valor;
        }
    }
}

const resultado = TipoSeguro('esse é um teste').map(valor => valor.toUpperCase());
const resultado2 = TipoSeguro('esse é um teste').map(valor => valor.toUpperCase()).map(valor => null);
console.log(resultado.valor);
console.log(resultado2.valor);