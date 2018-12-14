const fs = require('fs')
const colors = require('colors')

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`)
            return;
        }

        let data = ''

        for (let i = 0; i <= 10; i++) {
            data += `${i} * ${base} = ${i*base} \n`;
        }

        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)
        })
    })
}

module.exports = {
    crearArchivo
}