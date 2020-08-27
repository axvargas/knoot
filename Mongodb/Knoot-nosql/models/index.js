var mongoose = require('mongoose');
var Anuncios = require('./anuncios')

DATABASE_URL = "mongodb://localhost:27017/Knoot_db"

mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connnection successful!'))
    .catch(err => {
        console.error.bind(console, 'MongoDB connection error:')
    });