const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const app = express();
const port = process.env.PORT || 3000;
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and view location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Pankaj Sable'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Pankaj Sable'
    });
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Pankaj Sable',
        msg: 'Contact me on: sablepankaj190@gmail.com'
    });
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'Provide a search term'
        })
    }
    console.log(req.query);
    res.send({
        products: []
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Address must be provided'
        })
    }
    const { address } = req.query;

    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({
                error
            });
        }
        debugger
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }
            const forecast = forecastData.weather_descriptions[0] + ". " +
                "It is currently " + forecastData.temperature + " degrees outside, and it feels like " +
                forecastData.feelslike + " degrees.";

            res.send({
                location,
                address,
                forecast,
                imageUrl: forecastData.weatherIconUrl
            });
        });
    });
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Pankaj Sable',
        msg: 'Help Article was not found.'
    });
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Pankaj Sable',
        msg: 'Page not found.'
    });
})


app.listen(port, () => {
    console.log("Server is up and running!!" + port);
});