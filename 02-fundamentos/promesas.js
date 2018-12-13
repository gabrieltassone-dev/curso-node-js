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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id == id)

        if (!empleadoDB) {
            reject(`No se encontró un empleado con el id ${id}`)
        } else {
            resolve(empleadoDB)
        }
    })
}

// getEmpleado(1).then(empleado => {
//     console.log('Empleado de BD: ', empleado);

//     getSalario(empleado).then(empleado => {
//         console.log('Salario: ', empleado.salario);
//     }).catch(err => {
//         console.log(err);
//     })

// }).catch(err => {
//     console.log(err)
// });

getEmpleado(3).then(empleado => {
        console.log('Empleado de BD: ', empleado);

        return getSalario(empleado);

    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    })
    .catch(err => {
        console.log(err)
    });

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioEmpleado = salarios.find(salario => salario.id == empleado.id)

        if (!salarioEmpleado) {
            reject(`No se encontró el salario para el usuario ${empleado.nombre.toUpperCase()}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioEmpleado.salario
            })
        }
    })
}