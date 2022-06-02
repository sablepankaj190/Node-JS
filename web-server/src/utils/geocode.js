const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FibGVwYW5rYWoiLCJhIjoiY2wzdmNub2lkMGpwczNpcGl3MXRuZWxiZyJ9.vPQtnHMf1r-hhvSBL7jRdg';
    request({ url, json: true }, (error, {body}) => {
        debugger
        if (error) {
            callback('Unable to connect to Geocode service!', undefined);
        } else if (body.features.length == 0) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;