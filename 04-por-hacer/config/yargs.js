const optsDescripcion = {

    descripcion: {
        demand: true,
        alias: 'd',
        descripcion: 'Descripción de la tarea por hacer'
    }
}

const optsCompletado = {

    completado: {
        default: true,
        alias: 'c',
        descripcion: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optsDescripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea', { optsDescripcion, optsCompletado })
    .command('borrar', 'Borra una tarea del archivo json', optsDescripcion)
    .help()
    .argv;

module.exports = {
    argv
}