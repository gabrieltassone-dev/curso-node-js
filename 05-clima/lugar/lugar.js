const axios = require('axios')

const getLUgarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se encontraron resultados para la ciudad ${direccion}`)
    }

    let location = resp.data.results[0]
    let coors = location.geometry.location

    // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    //     .then(resp => {

    //         let location = resp.data.results[0]

    //         console.log(`La dirección con formato es: ${location.formatted_address}`)

    //         console.log(`Latitud: ${location.geometry.location.lat}`)

    //         console.log(`Longitud: ${location.geometry.location.lng}`)


    //         // console.log(JSON.stringify(resp.data, undefined, 2));
    //     })
    //     .catch(e => console.log('Error en la Request: ', e))

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLUgarLatLng
}