const PostModel = require("../models/TipoAvion");

module.exports.get = async (req, res, next)=>{
    const posts = await PostModel.find().exec()
    res.json(posts);
};
module.exports.getByID = async (req, res, next)=>{
    const posts = await PostModel.findOne({ _id: req.params.id }).exec()
    if(posts){
        ///res.json({result: "Registro encontrado"});
        res.json(posts);
    }else{
        res.json({result: "{Id de inválido, o no existe el registro"});
    }
}
module.exports.create = (req, res, next)=>{
    const {Anno,Modelo, Marca, CantidadPasajeros,CantidaFilas,CantidadColumnas} = req.body;
    const post = new PostModel({Anno,Modelo, Marca, CantidadPasajeros,CantidaFilas,CantidadColumnas});
    post.save();
    res.json(post);
};
module.exports.delete = async (req, res, next)=>{
    const post = await PostModel.findByIdAndRemove(req.params.id);
    if(post){
        res.json({result: "Registro borrado correctamente"});
    }else{
        res.json({result: "{Id del Tipo de Avión inválido}"})
    }
};
module.exports.update = async (req, res, next)=>{
    const {Anno,Modelo, Marca, CantidadPasajeros,CantidaFilas,CantidadColumnas} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {Anno,Modelo, Marca, CantidadPasajeros,CantidaFilas,CantidadColumnas},
        {new: true}
    )
    res.json(post);
};