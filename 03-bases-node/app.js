//requireds 
// const fs = require('fs')
const colors = require('colors')
const argv = require('./config/yargs')

const { crearArchivo } = require('./multiplicar/multiplicar')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'listar':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

// let argv = process.argv

// let parametro = argv[2]

// let base = parametro.split('=')[1]

// crearArchivo(base)
//     .then(archivo => console.log('Archivo creado: ', base))
//     .catch(err => console.log(err))