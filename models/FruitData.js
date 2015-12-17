var mongoose = require('mongoose');

var FruitDataSchema = new mongoose.Schema({
  FIELD1: String,
  FIELD2: String,
  FIELD3: String,
  FIELD4: String
}, 
{
  collection: 'fruit-data-collection'
});

mongoose.model('FruitData', FruitDataSchema);