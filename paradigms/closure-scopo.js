const x=3;
function somarMais3() {
    return x + 3;
}

function fora() {
    const x = 97;
    function somarMais2() {
        return x + 3;
    };
    return somarMais2;
}

module.exports = fora();
