const PostModel = require("../models/Horario");

module.exports.get = async (req, res, next)=>{
    const posts = await PostModel.find().populate('ID_Ruta').exec()
    res.json(posts);
};
module.exports.getByID = async (req, res, next)=>{
    const posts = await PostModel.findOne({ _id: req.params.id }).populate('ID_Ruta').exec()
    if(posts){
        res.json(posts);
    }else{
        res.json({result: "{Id de horario es inválida, o no existe el registro"});
    }
}

module.exports.create = (req, res, next)=>{
    const {ID_Ruta,Dia, HoraSalida, HoraLlegada, Precio, Estado} = req.body;
    if (!ID_Ruta || !Dia || !HoraSalida  || !HoraLlegada  || !Precio ) {
        res.json({ success: false, msg: 'Existen algún valor nulo' });
    } else {
        var newH= new PostModel({ID_Ruta:ID_Ruta ,Dia:Dia, HoraSalida: HoraSalida , HoraLlegada:HoraLlegada, Precio: Precio, Estado: 1});
    
        newH.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'El horario ya existe' });
            }
            res.json({ success: true, msg: 'Horario creado existosamente' });
        });
    }
};
module.exports.delete = async (req, res, next)=>{
    const {ID_Ruta,Dia, HoraSalida, HoraLlegada, Precio, Estado} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {ID_Ruta,Dia, HoraSalida, HoraLlegada, Precio, Estado},
        {new: true}
    )
    res.json(post);
};
module.exports.update = async (req, res, next)=>{
    const {ID_Ruta,Dia, HoraSalida, HoraLlegada, Precio, Estado} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {ID_Ruta,Dia, HoraSalida, HoraLlegada, Precio, Estado},
        {new: true}
    )
    res.json(post);
};