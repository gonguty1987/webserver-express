const http = require('http');

//crea servidor, recibe request y response con callback
http.createServer((req, res) => {

    //devuelvo en el servidor el string
    res.write(`Hola Mundo`);
    res.end();//indica q termino la repuesta


})
    .listen(8080); //escucha el puerto 8080

console.log('escuchando el puerto 8080');