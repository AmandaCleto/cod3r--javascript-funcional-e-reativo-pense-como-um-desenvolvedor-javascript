const { from } = require("rxjs");
const { mergeMap, map } = require("rxjs/operators"); //junta dois observables

const obs1 = from([1, 2, 3]);
const obs2 = from([5, 2, 1]);

obs1.pipe(mergeMap((n1) => obs2.pipe(map((n2) => `${n1} => ${n2}`)))).subscribe(
    console.log
);
