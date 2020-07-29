var express = require('express');
var router = express.Router();
let connection = require('../config/db.js')



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// localhost:3000/
router.post('/', function(req, res) {

})

module.exports = router;