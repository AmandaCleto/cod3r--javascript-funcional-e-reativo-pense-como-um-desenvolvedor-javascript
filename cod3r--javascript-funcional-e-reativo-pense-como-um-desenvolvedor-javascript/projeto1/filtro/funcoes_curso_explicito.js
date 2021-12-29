const fs = require('fs');
const path = require('path');

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
       try {
            let arquivos = fs.readdirSync(caminho);
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo));
            resolve(arquivos);
       } catch (error) {
           reject(error)
       }
    })
}

function filtrarElementosTerminadosCom(array, sufixo) {
    return array.filter(element => element.endsWith(sufixo))
}

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'});
            resolve(conteudo.toString());
        } catch (error) {
            reject(error);
        }
    })
}

function removerSeVazio(array) {
    return array.filter(linha => linha.trim())
}

function removerSeIncluir(array, padraoTextual) {
    return array.filter(linha => !linha.includes(padraoTextual))
}

function removerSeApenasNumero(array) {
    return array.filter(linha => {

        const number = parseInt(linha.trim());
        return number !== number;
    });
}

function removerSimbolos(simbolos, array) {
    return array.map(elemento => {
        let textoSemSimbolos = elemento;
        simbolos.forEach(simbolo => {
            textoSemSimbolos = textoSemSimbolos.split(simbolo).join('');
        })
        return textoSemSimbolos;
    });
}


module.exports = {
    lerDiretorio,
    filtrarElementosTerminadosCom,
    lerArquivos,
    removerSeVazio,
    removerSeIncluir,
    removerSeApenasNumero,
    removerSimbolos,
}