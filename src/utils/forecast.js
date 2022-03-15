const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2f98ad205f1a2cec1f7c9a463f8ad988&query='+latitude+','+longitude+'&units=m'
    request({url, json: true}, (error, {body}) => {
        if (error)
        {
            callback('Unable to connect to weather service!!', undefined)
        } else if (body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+ '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + 
            body.current.feelslike + ' degrees out and the humidity is '+ body.current.humidity + '%.')
        }
    })
}

module.exports = forecast