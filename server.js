const express = require('express')
const app = express()//declara variable que es producto de exprress

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;//En el entorno local no funciona,entonces le asigna el 3000

//callback que se va a ejecutar.especificamos el folder para que sea publico
app.use(express.static(__dirname + '/public'));//cualquier persona lo ppuede ver y acceder

//express HBS
hbs.registerPartials(__dirname + '/views/parciales') //dirname toma todo el patch
app.set('view engine', 'hbs');

app.get('/', (req, res) => { //solicitud get cuando el path es /
    //res.send('Hola Mundo')
    /*let salida = {
        nombre: 'Gonzalo',
        edad: 32,
        url: req.url
    }

    res.send(salida);*/
    res.render('home', {
        nombre: 'Gonzalo',
        anio: new Date().getFullYear()
    }); //cualquier peticion que entra con / va a renderica home.hbs
})

app.get('/about', (req, res) => { //solicitud get cuando el path es /

    res.render('about', {
        anio: new Date().getFullYear()
    }); //cualquier peticion que entra con / va a renderica home.hbs
})

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`)
})