const PostModel = require("../models/Factura");

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
    const {ID_Reservacion, NumeroFactura, Descripcion, TotalColones, TotalDolares, FechaReservacion} = req.body;
    const post = new PostModel({ID_Reservacion, NumeroFactura, Descripcion, TotalColones, TotalDolares, FechaReservacion});
    post.save();
    res.json(post);
};
module.exports.delete = async (req, res, next)=>{
    const post = await PostModel.findByIdAndRemove(req.params.id);
    if(post){
        res.json({result: "Registro borrado correctamente"});
    }else{
        res.json({result: "{Id de la Factura inválido}"})
    }
};
module.exports.update = async (req, res, next)=>{
    const {ID_Reservacion, NumeroFactura, Descripcion, TotalColones, TotalDolares, FechaReservacion} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {ID_Reservacion, NumeroFactura, Descripcion, TotalColones, TotalDolares, FechaReservacion},
        {new: true}
    )
    res.json(post);
};