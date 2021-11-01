const {Schema, model} = require('mongoose')
const UsuarioSchema = new Schema({
    ID_Rol:{
        type: Schema.Types.ObjectId, 
        ref: "Rol"
    },
    Usuario: String, 
    Contrasenna: String, 
    Nombre: String, 
    Apellidos: String, 
    Celular: String, 
    TelefonoTrabajo: String, 
    Correo: String, 
    FechaNacimiento: Date,
    Latitud: Number, 
    Longitud: Number, 
    Descripcion: String
})
const UsuarioModel = model("Usuario", UsuarioSchema);
module.exports = UsuarioModel;