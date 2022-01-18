function textoComTamanhoEntre(min) {
    return function(max) {
        return function(erro) {
            //Lazy Evaluation
            return function(texto) {
                const tamanho = (texto || '').trim().length;
                if(tamanho > max || tamanho < min) {
                    throw erro;
                }
            }
        }
    }

}

const pessoa = {
    nome: 'Amanda',
    age: 23,
};

textoComTamanhoEntre(3)(255)('Nome inválido!')(pessoa.nome);