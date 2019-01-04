const express = require('express')

let { verificaToken, verificaRole } = require('../middlewares/autenticacion')

let app = express()

let Categoria = require('../models/categoria')

//Mostrar todas las categorias
app.get('/categoria', (req, res) => {

    Categoria.find({})
        .sort('descripcion')
        .populate('usuario', 'nombre email')
        .exec((err, categorias) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err: err
                })
            }

            Categoria.count((err, conteo) => {
                res.json({
                    ok: true,
                    categorias: categorias,
                    cuantas: conteo
                })
            })
        })
})

//Muestra una categoria
app.get('/categoria/:id', (req, res) => {

    id = req.params.id

    Categoria.findById(id, (err, categoriaDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            })
        }

        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }
            })
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        })

    })

})

//Crear nueva categoria
app.post('/categoria', verificaToken, (req, res) => {

    let body = req.body

    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.usuario._id
    })

    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            })
        }

        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err: err
            })
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        })
    })

})

// Actualiza la descripción de una categoría
app.put('/categoria/:id', (req, res) => {
    let id = req.params.id
    let body = req.body

    let descCategoria = {
        descripcion: body.descripcion
    }

    Categoria.findByIdAndUpdate(id, descCategoria, { new: true, runValidators: true }, (err, categoriaDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            })
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        })
    })
})

// Borra físicamente una categoría
app.delete('/categoria/:id', [verificaToken, verificaRole], (req, res) => {

    let id = req.params.id

    Categoria.findByIdAndRemove(id, (err, categoriaBorrada) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            })
        }

        if (categoriaBorrada === null) {
            return res.status(400).json({
                ok: false,
                error: {
                    meesage: 'Categoria no encontrada'
                }
            })
        }

        res.json({
            ok: true,
            categoria: categoriaBorrada
        })
    })

})

module.exports = app