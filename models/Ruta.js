const {Schema, model} = require('mongoose')
const RutaSchema = new Schema({
    Ruta: String, 
    Duracion: String,
    Estado: Number,
})
const RutaModel = model("Ruta", RutaSchema);
module.exports = RutaModel;