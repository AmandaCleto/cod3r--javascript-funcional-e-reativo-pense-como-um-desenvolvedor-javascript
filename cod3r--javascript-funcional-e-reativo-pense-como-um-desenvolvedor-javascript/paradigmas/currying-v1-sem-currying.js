function textoComTamanhoEntre(min,max,erro,texto) {
    const tamanho = (texto || '').trim().length;
    if(tamanho > max || tamanho < min) {
        throw erro;
    }
}

const pessoa = {
    nome: 'Amanda',
    age: 23,
};

textoComTamanhoEntre(3, 255, 'Nome inválido!', pessoa.nome);