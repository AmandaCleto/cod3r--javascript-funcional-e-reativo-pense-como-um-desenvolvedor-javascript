//é possivel agora criar versoes intermediarias das funções
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

const tamanhoPadrao = textoComTamanhoEntre(3)(255);
const validarTamanhoNome = tamanhoPadrao('Nome inválido!');

const pessoa = {
    nome: 'Amanda',
    age: 23,
};
validarTamanhoNome(pessoa.nome);