const fs = require('fs');
const path = require('path');

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
       try {
            const arquivos = fs.readdirSync(caminho);
            const arquivosCompletos = arquivos.map(arquivo => path.join(caminho, arquivo));
            resolve(arquivosCompletos);
       } catch (error) {
           reject(error)
       }
    })
}

function filtrarElementosTerminadosCom(sufixo) {
    return function(array) {
        return array.filter(element => element.endsWith(sufixo))
    }
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

function removerSeIncluir(padraoTextual) {
    return function(array) {
        return array.filter(linha => !linha.includes(padraoTextual))
    }
}

function removerSeApenasNumero(array) {
    return array.filter(linha => {

        const number = parseInt(linha.trim());
        return number !== number;
    });
}

function removerSimbolos(simbolos) {
    return function(array) {
        return array.map(elemento => {
            return simbolos.reduce((acc, simbolo) => {
                     return  acc.split(simbolo).join('');
                }, elemento);
            }
        );
    }
}

function mesclarElementos(array) {
    return array.join(' ');
}

function separarTextoPor(simbolo) {
    return function(texto) {
        return texto.split(simbolo);
    }
}

function ordernarAtributoNumerico(attr, ordem = 'ascendente') {
    return function (array) {
        const ascendente = (valor1, valor2) => valor1[attr] - valor2[attr];
        const descendente = (valor1, valor2) => valor2[attr] - valor1[attr];

        return array.sort(ordem === 'ascendente' ? ascendente : descendente);
    }
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
    ordernarAtributoNumerico
}