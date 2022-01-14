const { of, Observable } = require('rxjs');

function terminadosCom(textoFinal) {}

of('Ana Clara', 'Maria Silva', 'Pedro Rocha').pipe(terminadosCom('Silva')).subscribe(console.log);