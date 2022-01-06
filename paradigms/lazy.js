//usando currying o seu código é executado mais rápido, por executar o que é
//preciso somente quando for preciso.

function eager(a, b) {
    //processo mais pesado
    const fim = Date.now() + 2500;
    while(Date.now() < fim) {}

    const valor = Math.pow(a,3);
    return valor + b;
}

function lazy(a) {
    const fim = Date.now() + 2500;
    while(Date.now() < fim) {}

    const valor = Math.pow(a,3);
    return function(b) {
        return valor + b;
    }
}

console.time('#1');
console.log(eager(3,100));
console.log(eager(3,200));
console.log(eager(3,300));
console.timeEnd('#1');

console.time('#2');
console.log(lazy(3)(100));
console.log(lazy(3)(200));
console.log(lazy(3)(300));
console.timeEnd('#2');

console.time('#3');
const lazy3 = lazy(3);
console.log(lazy3(100));
console.log(lazy3(200));
console.log(lazy3(300));
console.timeEnd('#3');