// set up ======================================================================
var express = require('express');
var path = require('path');
var Reviews = require('./models/reviews');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var database = require('./config/database');

// configuration ===============================================================
mongoose.connect(database.localUrl); 

// routes ======================================================================
var router = express.Router();
router.use(function(req, res, next){
    console.log('something will happen?');
    next();
});

router.get('/', function(req, res){
    res.json({message: 'welcome to API'})
});

router.route('/reviews')
    .post(function(req, res){
        var reviews = new Reviews();
        console.log(req);
        reviews.name = 'TJ Boskelly';
        reviews.save(function(err){
           if (err)
               res.send(err);
            res.json({message: 'Review Created'});
        });
});

// listen (start app with node server.js) ======================================
app.use('/api', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port);
console.log("App listening on port " + port);