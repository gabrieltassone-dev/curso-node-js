let empleados = [{
    id: 1,
    nombre: 'Gabriel',
}, {
    id: 2,
    nombre: 'Franco',
}, {
    id: 3,
    nombre: 'Silvana',
}];

let salarios = [{
    id: 1,
    salario: 2000,
}, {
    id: 2,
    salario: 10000,
}];

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id == id)

    //Primero controlamos el error
    if (!empleadoDB) {
        callback(`No se encontró un empleado con el id ${id}`)
    } else {
        callback(null, empleadoDB)
    }
}


let getSalario = (empleado, callback) => {

    let salarioEmpleado = salarios.find(salario => salario.id == empleado.id)

    if (!salarioEmpleado) {
        callback(`No se encontró el salario para el usuario ${empleado.nombre.toUpperCase()}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioEmpleado.salario
        })
    }
}

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }


    getSalario(empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })

    console.log(empleado);
});