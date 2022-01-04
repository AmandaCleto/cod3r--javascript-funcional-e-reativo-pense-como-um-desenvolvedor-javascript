//closure é quando uma função "lembra" seu escopo léxico,
//mesmo quando a função é executada fora do seu escopo léxico (nome do arquivo, dentro da funcao, em outra função).

const fora = require('./closure-escopo.js');


const x = 1000;
// console.log(somarMais3());s
console.log(fora());
