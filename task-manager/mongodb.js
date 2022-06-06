// CRUD operations

const { MongoClient, ObjectId } = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager-api';


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }
    const db = client.db(databaseName);

    db.collection("tasks").deleteOne({
        description: "Wake up on time and go to gym"
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})

