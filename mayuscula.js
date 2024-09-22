const fs = require('fs');


fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    
    const contenidoMayusculas = data.toUpperCase();

   
    fs.writeFile('output.txt', contenidoMayusculas, (err) => {
        if (err) {
            console.error('Error al escribir el archivo:', err);
            return;
        }
        console.log('El contenido se ha convertido a mayúsculas y se ha guardado en output.txt');
    });
});
