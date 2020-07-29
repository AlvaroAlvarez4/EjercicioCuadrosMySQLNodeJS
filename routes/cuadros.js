var express = require('express');
var router = express.Router();
let connection = require('../config/db.js')



/* GET cuadros page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// localhost:3000/cuadros/pintor
router.post('/pintor', function(req, res) {
    console.log(req.body)
    let name = req.body.name;
    let tipo_pintura = req.body.tipo_pintura;

    let sql = ` INSERT INTO  cuadro (tipo_pintura) VALUES ('${tipo_pintura}') `

    connection.query(sql, function(err, result) {
        if (err) {
            throw err;
        }
        let cuadro_id = result.insertId
        let sql2 = `INSERT INTO pintor (name,cuadro_id) VALUES ('${name}', ${cuadro_id})`;

        connection.query(sql2, function(err, result2) {
            if (err) throw err;
            res.send('ok')
        })

    })



})


module.exports = router;