const PostModel = require("../models/Factura");

module.exports.get = async (req, res, next)=>{
    const posts = await PostModel.find().populate("ID_Reservacion").populate("ID_Usuario").exec()
    res.json(posts);
};
module.exports.getByID = async (req, res, next)=>{
    const posts = await PostModel.findOne({ _id: req.params.id }).populate("ID_Reservacion").populate("ID_Usuario").exec()
    if(posts){
        res.json(posts);
    }else{
        res.json({result: "{Id de factura es inválida, o no existe el registro"});
    }
}
module.exports.getByUsuario = async (req, res, next)=>{
    console.log(req.params.id);
    const posts = await PostModel.find({ID_Usuario: req.params.id}).populate("ID_Reservacion").populate("ID_Usuario").exec()
   console.log(posts);
 
    if(posts){
        res.json(posts);
    }else{
        res.json({result: "{Id de reservación es inválida, o no existe el registro"});
    }
};
module.exports.create = (req, res, next)=>{
    const {ID_Reservacion,ID_Usuario, NumeroFactura, Descripcion, TotalColones, TotalDolares, FechaReservacion} = req.body;
    const post = new PostModel({ID_Reservacion,ID_Usuario, NumeroFactura, Descripcion, TotalColones, TotalDolares, FechaReservacion});
    post.save();
    res.json(post);
};
module.exports.create = (req, res, next)=>{
    const {ID_Reservacion,ID_Usuario, NumeroFactura, Descripcion, TotalColones, TotalDolares, FechaReservacion, Estado} = req.body;
    if (!ID_Reservacion || !ID_Usuario || !NumeroFactura || !Descripcion || !TotalColones || !TotalDolares || !FechaReservacion) {
        res.json({ success: false, msg: 'Existen algún valor nulo' });
    } else {
        var newF= new PostModel({ID_Reservacion:ID_Reservacion,ID_Usuario:ID_Usuario, NumeroFactura: NumeroFactura , Descripcion:Descripcion, TotalColones:TotalColones, TotalDolares:TotalDolares, FechaReservacion:FechaReservacion, Estado: 1});
       

        newF.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'La factura ya existe' });
            }
            res.json({ success: true, msg: 'Factura creada existosamente' });
        });
    }
};
module.exports.delete = async (req, res, next)=>{
    const {Descripcion, TotalColones, TotalDolares, FechaReservacion, Estado} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {Descripcion, TotalColones, TotalDolares, FechaReservacion, Estado},
        {new: true}
    )
    res.json(post);
};
module.exports.update = async (req, res, next)=>{
    const {Descripcion, TotalColones, TotalDolares, FechaReservacion} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {Descripcion, TotalColones, TotalDolares, FechaReservacion},
        {new: true}
    )
    res.json(post);
};