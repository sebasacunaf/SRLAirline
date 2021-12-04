const {Schema, model} = require('mongoose')
const FacturaSchema = new Schema({
    ID_Reservacion:{
        type: Schema.Types.ObjectId, 
        ref: "Reservaciones"
    },
    ID_Usuario:{
        type: Schema.Types.ObjectId, 
        ref: "Usuario"
    },
    NumeroFactura: Number,
    Descripcion: String, 
    TotalColones: Number, 
    TotalDolares: Number,
    FechaReservacion: String,
    Estado: Number,
})
const FacturaModel = model("Factura", FacturaSchema);
module.exports = FacturaModel;