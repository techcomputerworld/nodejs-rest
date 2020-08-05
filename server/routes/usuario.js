const express = require('express');
const app = express();

//obtener nuevas tuplas
app.get('/usuario', function(req, res) {

        res.json('get users')
    })
    //crear nuevas tuplas en la base de datos 
app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }
})

app.put('/usuario/:id', function(req, res) {
    //id del usuario req.params.id
    let id = req.params.id;
    res.json({
        id
    });
})
app.delete('/usuario', function(req, res) {

    res.json('delete usuario');
})

//exportar este fichero usuario.js para poder trabajar con el en server.js 
module.exports = app;