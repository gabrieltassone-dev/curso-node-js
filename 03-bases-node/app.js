//requireds 
const fs = require('fs')
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv

const { crearArchivo } = require('./multiplicar/multiplicar')

// let argv = process.argv

// let parametro = argv[2]

// let base = parametro.split('=')[1]

// crearArchivo(base)
//     .then(archivo => console.log('Archivo creado: ', base))
//     .catch(err => console.log(err))