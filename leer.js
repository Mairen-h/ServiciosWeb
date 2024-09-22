const fs = require('fs').promises;


function leerArchivo(ruta) {
    return fs.readFile(ruta, 'utf8')
        .then((data) => {
            console.log('Contenido del archivo:');
            console.log(data);
        })
        .catch((error) => {
            console.error('Error al leer el archivo:', error);
        });
}


leerArchivo('input.txt');
