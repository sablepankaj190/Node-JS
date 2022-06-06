const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
    useNewUrlParser: true
}).then((res) => {
    console.log("DB connection Successful")
}).catch((err) => {
    console.log("Could not connect to db:", err)
});
