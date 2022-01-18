//esperar 3000
//gerar números de 500

const { timer, Subscription } = require("rxjs");
const obs1 = timer(3000, 500);
const obs2 = timer(3000, 500);

const sub1 = obs1.subscribe((num) => {
    console.log(`#1 Gerou o número: ${num}`)
})
const sub2 = obs2.subscribe((num) => {
    console.log(`#1 Gerou o número: ${num}`)
})
//METODO 1: unsubcribe em cada obsevable


//METODO 2: pode colocar dentro da outra, e irá parar ambos
// sub1.add(sub2);


//METODO 3: Concentrar em uma subscription
const subscription = new Subscription();
subscription.add(sub1);
subscription.add(sub2);



//depois de 5000 unsubscribe
setTimeout(() => {
    // sub1.unsubscribe(); // METODO 1
    // sub2.unsubscribe();

    // sub1.unsubscribe(); // METODO 2

    subscription.unsubscribe(); //METODO 3

}, 5000);