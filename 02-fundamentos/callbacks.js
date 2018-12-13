setTimeout(() => {
    console.log('Hola mundo');
}, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Gabriel',
        id: id
    }
    if (id === 20) {
        callback(`El usuario con id ${id} no existe en la base de datos`)
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    }

    console.log('Usuario: ', usuario);
})