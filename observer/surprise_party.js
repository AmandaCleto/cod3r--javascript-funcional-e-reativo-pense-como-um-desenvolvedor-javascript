const readline = require('readline');

function obterResposta (pergunta)  {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(pergunta, resposta => {
            resolve(resposta);
            rl.close();
        })
    })
}

function namorado(e) {
    setTimeout(() => {
        console.log('Namorado: Apaga as luzes...');
        console.log('Namorado: Pede silêncio...');
        console.log('Todo Mundo: SUPRESA!!!!');
    },2000)
}

function sindico(e) {
    console.log('Sindico: Monitorando o barulho');
    console.log(e.data);
}

//subject
async function porteiro(interessados) {
    while(true) {
        const resp = await obterResposta('A namorada chegou? (s/N/q)');

        if(resp.toLowerCase() === 's') {
            //os observadores são notificados
            (interessados || []).forEach(element => element({data: Date.now()}));
        } else if (resp.toLowerCase() === 'q') {
            break;
        }
    }
}

//registro de 2 observadores
porteiro([sindico, namorado]);
