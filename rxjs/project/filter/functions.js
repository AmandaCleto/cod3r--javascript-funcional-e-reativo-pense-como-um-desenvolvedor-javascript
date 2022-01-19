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

function filtrarElementosTerminadosCom(sufixo) {
    return createPipeableOperator((subscriber) => ({
        next(texto) {
            if (texto.endsWith(sufixo)) {
                subscriber.next(texto);
            }
        },
    }));
}

function lerArquivo() {
    return createPipeableOperator((subscriber) => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, {
                    encoding: "utf-8",
                });
                subscriber.next(conteudo.toString());
            } catch (error) {
                subscriber.error(error);
            }
        },
    }));
}

function separarTextoPor(simbolo) {
    return createPipeableOperator((subscriber) => ({
        next(texto) {
            texto.split(simbolo).forEach((parte) => {
                subscriber.next(parte);
            });
        },
    }));
}

function removerSeVazio() {
    return createPipeableOperator((subscriber) => ({
        next(texto) {
            if (texto.trim()) {
                subscriber.next(texto);
            }
        },
    }));
}

function removerSeApenasNumero() {
    return createPipeableOperator((subscriber) => ({
        next(texto) {
            const number = parseInt(texto.trim());
            if (number !== number) {
                subscriber.next(texto);
            }
        },
    }));
}

function removerSimbolos(simbolos) {
    return createPipeableOperator((subscriber) => ({
        next(texto) {
            const textoSemSimbolos = simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join("");
            }, texto);
            subscriber.next(textoSemSimbolos);
        },
    }));
}

function agruparPalavras() {
    return createPipeableOperator((subscriber) => ({
        next(palavras) {
            const agrupado= Object.values(palavras.reduce((acc, palavra) => {
                const palavraMinuscula = palavra.toLowerCase();
                const quantidade = acc[palavraMinuscula] ? acc[palavraMinuscula].quantidade + 1: 1;
                acc[palavraMinuscula] = {
                    palavra: palavraMinuscula,
                    quantidade,
                }

                return acc;
            }, {}));
            subscriber.next(agrupado);
        },
    }));
}

function createPipeableOperator(operatorFn) {
    return function (source) {
        return new Observable((subscriber) => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || ((e) => subscriber.error(e)),
                complete: sub.complete || ((e) => subscriber.complete(e)),
            });
        });
    };
}

module.exports = {
    lerDiretorio,
    filtrarElementosTerminadosCom,
    lerArquivo,
    removerSeVazio,
    removerSeApenasNumero,
    removerSimbolos,
    separarTextoPor,
    agruparPalavras,
};
