const express = require('express')

const app = express()

const hbs = require('hbs')

const helpers = require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Gabriel'
    })
})

app.get('/products', (req, res) => {

    res.render('products')
})

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
})