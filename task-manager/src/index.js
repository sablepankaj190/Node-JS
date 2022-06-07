const app = require('./app')
const port = process.env.PORT
module.exports = app

app.listen(port, () => {
    console.log('Server running on port ', port)
})