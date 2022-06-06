const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true
}).then((res) => {
    console.log("DB connection Successful")
}).catch((err) => {
    console.log("Could not connect to db:", err)
});
