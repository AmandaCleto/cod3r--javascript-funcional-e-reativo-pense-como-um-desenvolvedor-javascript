const path = require("path");
const fn = require("./functions");
const _  = require('lodash');
const { first, map , interval, take} = require('rxjs');
const { toArray } = require('rxjs/operators');

const caminho = path.join(__dirname, "../", "/data");
const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>',
    '\r', '[', ']', '(', ')', '!'
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.filtrarElementosTerminadosCom(".srt"),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        // first(),
        fn.removerSeVazio(),
        fn.removerSeApenasNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerSeVazio(),
        fn.removerSeApenasNumero(),
        toArray(),
        fn.agruparPalavras(),
        map(array => _.sortBy(array, el => -el.quantidade))
        // map(array => _.sortBy(array, el => el.quantidade))
    )
    .subscribe(console.log)

