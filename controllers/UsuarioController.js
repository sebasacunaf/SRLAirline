const PostModel = require("../models/Usuario");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = 'secret';

module.exports.get = async (req, res, next)=>{
    const posts = await PostModel.find().populate("Rol").exec()
    res.json(posts);
}
module.exports.getByID = async (req, res, next)=>{
    const posts = await PostModel.findOne({ _id: req.params.id }).populate("Rol").exec()
    if(posts){
        res.json(posts);
    }else{
        res.json({result: "{Id de usuario es inválida, o no existe el registro"});
    }
};
// creación de nuevos usuarios
module.exports.signup = async (req, res, next) => {
    const { Rol, Usuario, Contrasenna, Nombre, Apellidos, Celular, TelefonoTrabajo, Correo,FechaNacimiento, Descripcion } = req.body;
    if (!Rol || !Usuario || !Contrasenna || !Nombre || !Apellidos || !Celular || !TelefonoTrabajo || !Correo || !FechaNacimiento || !Descripcion) {
        res.json({ success: false, msg: 'Existen algún valor nulo' });
    } else {
        var newUser = new PostModel({ Rol: Rol,Usuario:Usuario,Contrasenna:Contrasenna,Nombre:Nombre,Apellidos:Apellidos, Celular:Celular, TelefonoTrabajo:TelefonoTrabajo, Correo:Correo,FechaNacimiento:FechaNacimiento, Descripcion:Descripcion, Estado:1 });
        // save the user

        newUser.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'El usuario ya existe' });
            }
            res.json({ success: true, msg: 'Usuario creado existosamente' });
        });
    }
};
// logueo de usuarios
module.exports.signin = async (req, res, next) => {

    const { Usuario, Contrasenna } = req.body;

    const user = await PostModel.findOne({ Usuario: Usuario }).exec();

    if (!user) {
        res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
    } else {
        //Si el usuario existe verifica si las contraseñas
        user.comparePassword(Contrasenna, user.Contrasenna, function (err, isMatch) {
            if (isMatch && !err) {
              // Si el usuario es correcto y la contraseña coindice se procede a crear el token
              const token = jwt.sign(
                { Usuario: Usuario },
                secret,
                { expiresIn: "2h" }
              );
              // return the information including token as JSON
              const payload = { Rol: user.Rol, Usuario: user.Usuario, Contrasenna: user.Contrasenna, Nombre: user.Nombre, Apellido: user.Apellido,
            Celular: user.Celular, TelefonoTrabajo: user.TelefonoTrabajo, Correo: user.Correo, FechaNacimiento: user.FechaNacimiento, Descripcion: user.Descripcion, Estado: user.Estado };
              res.json({ success: true, token: token, user: payload });
            } else {
                //si la contraseña no coincide se procede a indicar el error
                //res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                res.json({ success: false, msg: 'Authentication failed. Wrong password.' });
            }
        });
    }
};

module.exports.update = async (req, res, next)=>{
    const {Rol,Usuario,Contrasenna,Nombre,Apellidos, Celular, TelefonoTrabajo, Correo,FechaNacimiento, 
        Descripcion,Estado} = req.body;

        bcrypt.genSalt(10, function (err, salt) {
        
            bcrypt.hash(Contrasenna, salt, null, async function (err, hash) {
               
              
              Contrasenna = hash;
              const post = await PostModel.findOneAndUpdate(
                { _id: req.params.id},
                {Rol,Usuario,Contrasenna,Nombre,Apellidos, Celular, TelefonoTrabajo, Correo,FechaNacimiento,
                    Descripcion, Estado},
                {new: true}
            ) 
          
            console.log('actualizado');
              res.json(post);
            });
        });
}
module.exports.delete = async (req, res, next)=>{
    const {Rol,Usuario,Contrasenna,Nombre,Apellidos, Celular, TelefonoTrabajo, Correo,FechaNacimiento, 
        Descripcion,Estado} = req.body;

        bcrypt.genSalt(10, function (err, salt) {
        
            bcrypt.hash(Contrasenna, salt, null, async function (err, hash) {
               
              
              Contrasenna = hash;
              const post = await PostModel.findOneAndUpdate(
                { _id: req.params.id},
                {Rol,Usuario,Contrasenna,Nombre,Apellidos, Celular, TelefonoTrabajo, Correo,FechaNacimiento,
                    Descripcion, Estado},
                {new: true}
            ) 
          
              
              res.json(post);
            });
        });
}

