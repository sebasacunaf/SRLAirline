const {Schema, model} = require('mongoose')
const bcrypt = require('bcrypt-nodejs');
const UsuarioSchema = new Schema({
    ID_Rol:{
        type: Schema.Types.ObjectId, 
        ref: "Rol"
    },
    Usuario:  {
        type: String,
        unique: true,
        required: true,
      }, 
      Contrasenna: {
        type: String,
        required: true,
      }, 
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

UsuarioSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('Contrasenna') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.Contrasenna, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.Contrasenna = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UsuarioSchema.methods.comparePassword = async (passw, userPassw, cb) => {
    bcrypt.compare(passw, userPassw, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};
const UsuarioModel = model("Usuario", UsuarioSchema);
module.exports = UsuarioModel;