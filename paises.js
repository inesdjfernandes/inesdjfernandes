var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PaisesSchema   = new Schema({
    cod_pais: {type: String, nullable:false},
    cod_zonageo: {type: Number, nullable:false} //será number/string??
});
/////
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ZonaSchema   = new Schema({
});
///
module.exports = mongoose.model('zona', ZonaSchema);
module.exports = mongoose.model('paises', PaisesSchema);