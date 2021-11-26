const {Schema, model} = require('mongoose')
const RolSchema = new Schema({
    TipoRol: String, 
    Descripcion: String,
   
})
const RolModel = model("Rol", RolSchema);
module.exports = RolModel;