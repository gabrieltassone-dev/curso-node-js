// Funcion normal
function sumar(a, b) {
    return a + b
}

// Funcion flecha
let suma = (a, b) => {
    return a + b
}

let sumarFlecha = (a, b) => a + b

console.log(sumar(10, 30));

console.log(suma(40, 30));

console.log(sumarFlecha(10, 15));


function saludar() {
    return 'Hola mundo'
}

console.log(saludar());

let saludo = () => 'Hola mundo'

console.log(saludo())

let saludoPersonalizado = nombre => `Hola ${nombre}`
console.log(saludoPersonalizado('Gabriel Tassone'));


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    },
    //el this apunta a lo que vale this fuera de la funcion de flecha
    getNombreFlecha: () => `${this.nombre} ${this.apellido} - poder: ${this.poder}`
}

console.log(deadpool.getNombreFlecha());