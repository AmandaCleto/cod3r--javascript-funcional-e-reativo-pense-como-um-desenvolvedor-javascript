const path = require("path");
const fn = require("./implicity_functions");

const caminho = path.join(__dirname, "../", "/data");
const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>',
    '\r', '[', ']', '(', ')',
]

function agruparPalavras(palavras) {
  return Object.values(palavras.reduce((acc, palavra) => {
        const palavraMinuscula = palavra.toLowerCase();
        const quantidade = acc[palavraMinuscula] ? acc[palavraMinuscula].quantidade + 1: 1;
        acc[palavraMinuscula] = {
            palavra: palavraMinuscula,
            quantidade,
        }

        return acc;
    }, {}));
}

fn.lerDiretorio(caminho)
    .pipe(

    )
    .subscribe(console.log)

// fn.lerDiretorio(caminho)
//     .then(fn.filtrarElementosTerminadosCom(".srt"))
//     .then(fn.lerArquivos)
//     .then(fn.mesclarElementos)
//     .then(fn.separarTextoPor('\n'))
//     .then(fn.removerSeVazio)
//     .then(fn.removerSeIncluir('-->'))
//     .then(fn.removerSeApenasNumero)
//     .then(fn.removerSimbolos(simbolos))
//     .then(fn.mesclarElementos)
//     .then(fn.separarTextoPor(' '))
//     .then(fn.removerSeVazio)
//     .then(fn.removerSeApenasNumero)
//     .then(agruparPalavras)
//     .then(fn.ordernarAtributoNumerico('quantidade', 'descendente'))
//     .then(console.log);
