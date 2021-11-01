const PostModel = require("../models/Usuario");

module.exports.get = async (req, res, next)=>{
    const posts = await PostModel.find().exec
    res.json(posts);
};
module.exports.getByID = async (req, res, next)=>{
    const posts = await PostModel.findOne({ _id: id }).exec();
    if(posts){
        res.json({result: "Registro encontrado"});
        res.json(posts);
    }else{
        res.json({result: "{Id de inválido, o no existe el registro"});
    }
}
module.exports.create = (req, res, next)=>{
    const {ID_Rol,Usuario,Contrasenna,Nombre,Apellidos, Celular, TelefonoTrabajo, Correo,FechaNacimiento, Latitud,Longitud, 
        Descripcion} = req.body;
    const post = new PostModel({ID_Rol,Usuario,Contrasenna,Nombre,Apellidos, Celular, TelefonoTrabajo, Correo,FechaNacimiento, Latitud,Longitud, 
        Descripcion});
    post.save();
    res.json(post);
};
module.exports.delete = async (req, res, next)=>{
    const post = await PostModel.findByIdAndRemove(req.params.id);
    if(post){
        res.json({result: "Registro borrado correctamente"});
    }else{
        res.json({result: "{Id del Horario inválido}"})
    }
};
module.exports.update = async (req, res, next)=>{
    const {ID_Ruta,Dia, Minutos, HoraSalida, HoraLlegada, Precio} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {ID_Rol,Usuario,Contrasenna,Nombre,Apellidos, Celular, TelefonoTrabajo, Correo,FechaNacimiento, Latitud,Longitud, 
            Descripcion},
        {new: true}
    )
    res.json(post);
};