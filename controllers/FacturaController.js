const PostModel = require("../models/Factura");

module.exports.get = async (req, res, next)=>{
    const posts = await PostModel.find().populate("ID_Reservacion").exec()
    res.json(posts);
};
module.exports.getByID = async (req, res, next)=>{
    const posts = await PostModel.findOne({ _id: id }).exec()
    if(posts){
        res.json({result: "Registro encontrado"});
        res.json(posts);
    }else{
        res.json({result: "{Id de factura es inválida, o no existe el registro"});
    }
}
module.exports.create = (req, res, next)=>{
    const {ID_Reservacion, NumeroFactura, Descripcion, TotalColones, TotalDolares, FechaReservacion} = req.body;
    const post = new PostModel({ID_Reservacion, NumeroFactura, Descripcion, TotalColones, TotalDolares, FechaReservacion});
    post.save();
    res.json(post);
};
module.exports.create = (req, res, next)=>{
    const {ID_Reservacion, NumeroFactura, Descripcion, TotalColones, TotalDolares, FechaReservacion} = req.body;
    if (!ID_Reservacion || !NumeroFactura || !Descripcion || !TotalColones || !TotalDolares || !FechaReservacion) {
        res.json({ success: false, msg: 'Existen algún valor nulo' });
    } else {
        var newF= new PostModel({ID_Reservacion:ID_Reservacion, NumeroFactura: NumeroFactura , Descripcion:Descripcion, TotalColones:TotalColones, TotalDolares:TotalDolares, FechaReservacion:FechaReservacion});
       

        newF.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'La factura ya existe' });
            }
            res.json({ success: true, msg: 'Factura creada existosamente' });
        });
    }
};
module.exports.delete = async (req, res, next)=>{
    const post = await PostModel.findByIdAndRemove(req.params.id);
    if(post){
        res.json({result: "Registro borrado correctamente"});
    }else{
        res.json({result: "{Id de la factura es inválida}"})
    }
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