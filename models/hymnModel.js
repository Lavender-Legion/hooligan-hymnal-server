var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hymnSchema = new Schema({
  title: String,
  id: String,
  lyrics: String
});

var Hymns = mongoose.model('Hymns', hymnSchema);

module.exports = Hymns;