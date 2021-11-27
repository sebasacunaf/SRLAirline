const {Schema, model} = require('mongoose')
const ReservacionesSchema = new Schema({
    ID_Vuelo:{
        type: Schema.Types.ObjectId, 
        ref: "Vuelos"
    },
    ID_Usuario:{
        type: Schema.Types.ObjectId, 
        ref: "Usuario"
    },
    numReservacion: Number, 
    CantidadAsientos: Number,
})
const ReservacionesModel = model("Reservaciones", ReservacionesSchema);
module.exports = ReservacionesModel;