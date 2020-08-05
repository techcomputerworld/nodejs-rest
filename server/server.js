//require('./config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(require('./routes/usuario'));
var bodyParser = require('body-parser');

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));


var uri = 'mongodb://192.168.1.242:27017/cafe';
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('Base de datos ONLINE'))
    .catch(err => console.error(err));
// if (err) throw err;
// if (res)
//     console.log('Base de datos ONLINE');

// mongoose.connect(uri, {
//     connectTimeoutMS: 1000
//         // Note that mongoose will **not** pull `bufferCommands` from the query string
// }).then(
//     () => { console.log('Base de datos ONLINE') },

// ).catch(
//     () => 
// )
// ;
// mongoose.connect(uri, options).then(
//     () => { console.log('Base de datos ONLINE') },
//     err => { throw err }
// );
//establecer conexion con base de datos 
// mongoose.connect('mongodb://192.168.1.241:27017/cafe', (err, res) => {
//     //useNewUrlParser: true,
//     //useUnifiedTopology: true
//     if (res) {
//         console.log('Base de datos ONLINE');
//     }
//     if (err) throw error;

// });

app.listen(3000, () => {
    console.log('Escuchando puerto: ', 3000);
})