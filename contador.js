let segundos = 0;


const intervalo = setInterval(() => {
    segundos++;
    console.log(`Han pasado ${segundos} segundos`);
}, 1000);


setTimeout(() => {
    clearInterval(intervalo);
    console.log("El contador ha terminado.");
}, 10000);
