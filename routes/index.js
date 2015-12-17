var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var FruitData = mongoose.model('FruitData');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
  FruitData.find({FIELD2: "Ethnicity"}, {_id: 0, FIELD3:1, FIELD4:1}, function(err, data){
  if(err){ return next(err); }
  res.json(data);
  });
});

module.exports = router;