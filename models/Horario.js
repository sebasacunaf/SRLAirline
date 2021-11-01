const {Schema, model} = require('mongoose')
const HorarioSchema = new Schema({
    ID_Ruta: {
        type: Schema.Types.ObjectId, 
        ref: "Ruta"
    },
    Dia:String,
    Minutos: String, 
    HoraSalida: String, 
    HoraLlegada: String, 
    Precio: Number
})
const HorarioModel = model("Horario", HorarioSchema);
module.exports = HorarioModel;