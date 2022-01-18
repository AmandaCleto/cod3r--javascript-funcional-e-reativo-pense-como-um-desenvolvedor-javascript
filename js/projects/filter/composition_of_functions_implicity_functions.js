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

const palavarasMaisUsadas = fn.composicao(
    fn.lerDiretorio,
    fn.filtrarElementosTerminadosCom(".srt"),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerSeVazio,
    fn.removerSeIncluir('-->'),
    fn.removerSeApenasNumero,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerSeVazio,
    fn.removerSeApenasNumero,
    agruparPalavras,
    fn.ordernarAtributoNumerico('quantidade', 'descendente'),
);

palavarasMaisUsadas(caminho).then(console.log);
