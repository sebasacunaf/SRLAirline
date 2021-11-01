const {Schema, model} = require('mongoose')
const VueloSchema = new Schema({
    ID_Avion: {
        type: Schema.Types.ObjectId, 
        ref: "Avion"
    },
    CodigoVuelo: Number, 
    Descripcion: String, 
    Origen: String, 
    Destino: String,
    FechaIda: String, 
    FechaRegreso: String, 
    EspaciosDisponibles: Object
})
const VueloModel = model("Vuelos", VueloSchema);
module.exports = VueloModel;