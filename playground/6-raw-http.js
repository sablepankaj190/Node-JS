const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=6bd45218dfc4a06c56fecc58dbb00369&query=45,-75';


const req = http.request(url, (response) => {
    let data = '';  
    response.on('data', (chunk) => {
        data += chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

req.on('error', (error) => {
    console.log("An Error: ", error);
})
req.end();
