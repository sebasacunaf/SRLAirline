const {Schema, model} = require('mongoose')
const FacturaSchema = new Schema({
    ID_Reservacion:{
        type: Schema.Types.ObjectId, 
        ref: "Reservaciones"
    },
    NumeroFactura: Number,
    Descripcion: String, 
    TotalColones: Number, 
    TotalDolares: Number,
    FechaReservacion: String
})
const FacturaModel = model("Factura", FacturaSchema);
module.exports = FacturaModel;