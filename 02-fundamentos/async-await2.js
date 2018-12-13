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

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id == id)

    if (!empleadoDB) {
        throw new Error(`No se encontró un empleado con el id ${id}`)
    } else {
        return empleadoDB
    }
}



let getSalario = async(empleado) => {

    let salarioEmpleado = salarios.find(salario => salario.id == empleado.id)

    if (!salarioEmpleado) {
        throw new Error(`No se encontró el salario para el usuario ${empleado.nombre.toUpperCase()}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioEmpleado.salario
        }
    }
}

// getEmpleado(1).then(empleado => {
//         console.log('Empleado de BD: ', empleado);

//         return getSalario(empleado);

//     })
//     .then(resp => {
//         console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
//     })
//     .catch(err => {
//         console.log(err)
//     });

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id)

    let resp = await getSalario(empleado)

    console.log(`El empleado ${resp.nombre} tiene un salario de $${resp.salario}`);
}

getInformacion(10)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err))