const { Observable, Subject } = require('rxjs');

function getObservable() {
    return new Observable(subscriber => {
        setTimeout(() => {
            console.log("#1- Observable");
            subscriber.next(Math.random());
            subscriber.complete();
        }, 1000);
    });
}

const obs = getObservable();
obs.subscribe(console.log);
obs.subscribe(console.log);


function getSubject() {
    const subj = new Subject();
    setTimeout(() => {
        console.log("\n#2- Subject");
        subj.next(Math.random());
        subj.complete();
    }, 1000);
    return subj;
}

const subj = getSubject();
subj.subscribe(console.log);
subj.subscribe(console.log);