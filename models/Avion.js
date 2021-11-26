const {Schema, model} = require('mongoose');
const AvionSchema = new Schema({
    ID_TipoAvion:{
        type: Schema.Types.ObjectId, 
        ref: "TipoAvion"
    },
    ID_Horario: {
        type: Schema.Types.ObjectId, 
        ref: "Horario"
    },
    CodigoAvion: Number,
    Estado: Number,
})
const AvionModel = model("Avion", AvionSchema);
module.exports = AvionModel;