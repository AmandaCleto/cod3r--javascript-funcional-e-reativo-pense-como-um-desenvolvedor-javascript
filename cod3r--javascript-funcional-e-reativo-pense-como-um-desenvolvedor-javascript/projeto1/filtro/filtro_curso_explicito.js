const path = require("path");
const fn = require("./funcoes_curso_explicito");

const caminho = path.join(__dirname, "../", "/dados");
const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>',
    '\r', '[', ']', '(', ')',
]

const mesclarConteudos = (array) => array.join(' ');

const separarPorLinhas = (todoConteudo) => todoConteudo.split('\n');

const separarPorPalavras = (todoConteudo) => todoConteudo.split(' ');

function agruparPalavras(palavras) {
    return palavras.reduce((acumulador, palavra) => {
          const palavraMinuscula = palavra.toLowerCase();
          if(acumulador[palavraMinuscula]) {
              acumulador[palavraMinuscula] += 1;
          } else {
              acumulador[palavraMinuscula] = 1;
          }
          return acumulador;
      }, {});
  }


fn.lerDiretorio(caminho)
    .then((arquivos) => fn.filtrarElementosTerminadosCom(arquivos, ".srt"))
    .then((arquivosStr) => fn.lerArquivos(arquivosStr))
    .then((array) => mesclarConteudos(array))
    .then((todoConteudo) => separarPorLinhas(todoConteudo))
    .then((linhas) => fn.removerSeVazio(linhas))
    .then((linhas) => fn.removerSeIncluir(linhas, '-->'))
    .then((linhas) => fn.removerSeApenasNumero(linhas))
    .then((linhas) => fn.removerSimbolos(simbolos, linhas))
    .then((todoConteudo) => mesclarConteudos(todoConteudo))
    .then((todoConteudo) => separarPorPalavras(todoConteudo))
    .then((linhas) => fn.removerSeVazio(linhas))
    .then((linhas) => fn.removerSeApenasNumero(linhas))
    .then(agruparPalavras)
    .then(console.log);

