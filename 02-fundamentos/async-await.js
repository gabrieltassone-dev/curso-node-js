// let getNombre = async() => {

//     return 'Gabriel';
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Gabriel')
        }, 3000);
    })
}

let saludo = async() => {

    let nombre = await getNombre()

    return `Hola ${nombre}`
}

getNombre().then(nombre => {
        console.log(nombre);
    })
    .catch(err => {
        console.log('Error: ', err);
    })

saludo().then(mensaje => {
    console.log(mensaje);
})