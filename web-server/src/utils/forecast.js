const request = require('request');


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6bd45218dfc4a06c56fecc58dbb00369&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude);
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            const { temperature, feelslike, weather_descriptions } = body.current;
            const weatherIconUrl = body.current.weather_icons[0];
            console.log(body);
            callback(undefined, {
                temperature, feelslike, weather_descriptions, weatherIconUrl 
            })
        }
    })
}

module.exports = forecast