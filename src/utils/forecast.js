const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ad91d37f56b3369016fd5fd9c1388447&query=' +latitude+','+longitude+'&units=f'
    request({url: url, json: true},(error,response) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if (response.body.error){
            callback('Unable to find location!',undefined)
        }else{
            callback(undefined,'It is currently '+ response.body.current.temperature + ' degrees out. It feels like '+ response.body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast