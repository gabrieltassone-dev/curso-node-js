const axios = require('axios')

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=3b1cbb1a0ebb0a65824d4215df65486f`)

    return resp.data.main.temp

}

module.exports = {
    getClima
}