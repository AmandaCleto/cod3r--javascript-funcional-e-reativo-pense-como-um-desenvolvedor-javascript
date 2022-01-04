// Criar duas funções:
// 1- Criar função somar que componha três funções dentro,
// cada uma deve receber um valor, a última deve somar os valores,
// exemplo: somar(1)(2)(3)

function somar(valor1) {
    return function (valor2) {
        return function (valor3) {
            return console.log(valor1 + valor2 + valor3);
        }
    }
}

const somarCurto = (valor1) => (valor2) => (valor3) => console.log(valor1 + valor2 + valor3);

somar(1)(2)(3);
somarCurto(5)(5)(5);


// 2- Criar função somar que componha três funções dentro,
// as duas primeiras recebem valores como parâmetros, e a última,
// recebe uma função que determina qual operação matemática básica será feito

function execute(valor1) {
    return function(valor2) {
        return function (fn) {
            return fn(valor1, valor2);
        }
    }
}

const executeCurto = (valor1) => (valor2) =>  (fn) => fn(valor1, valor2);

const somarDoisNumeros = (a, b) => console.log(a + b);
const subtrairDoisNumeros = (a, b) => console.log(a - b);
const multiplicarDoisNumeros = (a, b) => console.log(a * b);

executeCurto(5)(5)(multiplicarDoisNumeros);