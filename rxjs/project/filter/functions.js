const fs = require("fs");
const path = require("path");
const { Observable } = require("rxjs");

function lerDiretorio(caminho) {
    return new Observable((subscriber) => {
        try {
            fs.readdirSync(caminho).forEach((arquivo) => {
                subscriber.next(path.join(caminho, arquivo));
            });
            subscriber.complete();
        } catch (error) {
            subscriber.error(error);
        }
    });
}

function createPipeableOperator(operatorFn) {
    return function (source) {
        return new Observable((subscriber) => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || ((e) => subscriber.error(e)),
                complete: sub.complete,
            });
        });
    };
}

function filtrarElementosTerminadosCom(sufixo) {
    return createPipeableOperator((subscriber) => ({
        next(texto) {
            if (texto.endsWith(sufixo)) {
                subscriber.next(texto);
            }
        },
    }));
}


function lerArquivos(caminhos) {
    return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
            resolve(conteudo.toString());
        } catch (error) {
            reject(error);
        }
    });
}

function removerSeVazio(array) {
    return array.filter((linha) => linha.trim());
}

function removerSeIncluir(padraoTextual) {
    return function (array) {
        return array.filter((linha) => !linha.includes(padraoTextual));
    };
}

function removerSeApenasNumero(array) {
    return array.filter((linha) => {
        const number = parseInt(linha.trim());
        return number !== number;
    });
}

function removerSimbolos(simbolos) {
    return function (array) {
        return array.map((elemento) => {
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join("");
            }, elemento);
        });
    };
}

function mesclarElementos(array) {
    return array.join(" ");
}

function separarTextoPor(simbolo) {
    return function (texto) {
        return texto.split(simbolo);
    };
}

function ordernarAtributoNumerico(attr, ordem = "ascendente") {
    return function (array) {
        const ascendente = (valor1, valor2) => valor1[attr] - valor2[attr];
        const descendente = (valor1, valor2) => valor2[attr] - valor1[attr];

        return array.sort(ordem === "ascendente" ? ascendente : descendente);
    };
}

module.exports = {
    lerDiretorio,
    filtrarElementosTerminadosCom,
    lerArquivos,
    removerSeVazio,
    removerSeIncluir,
    removerSeApenasNumero,
    removerSimbolos,
    mesclarElementos,
    separarTextoPor,
    ordernarAtributoNumerico,
};
