const {Schema, model} = require('mongoose')
const TipoAvionSchema = new Schema({
    Anno: String, 
    Modelo: String,
    Marca: String, 
    CantidadPasajeros: Number,
    CantidadFilas: Number,
    CantidadColumnas: Number
})
const TipoAvionModel = model("TipoAvion", TipoAvionSchema);
module.exports = TipoAvionModel;