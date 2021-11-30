const PostModel = require("../models/Reservaciones");

module.exports.get = async (req, res, next)=>{
    const posts = await PostModel.find().populate("ID_Vuelo").populate("ID_Usuario").exec()
    res.json(posts);
};
module.exports.getByID = async (req, res, next)=>{
    const posts = await PostModel.findOne(req.params.id).populate("ID_Vuelo").populate("ID_Usuario").exec()
    if(posts){
        res.json(posts);
    }else{
        res.json({result: "{Id de reservación es inválida, o no existe el registro"});
    }
};
module.exports.create = (req, res, next)=>{
    const {ID_Vuelo, ID_Usuario, numReservacion,CantidadAsientos} = req.body;
    const post = new PostModel({ID_Vuelo, ID_Usuario, numReservacion,CantidadAsientos});
    post.save();
    res.json(post);
};

module.exports.create = (req, res, next)=>{
    const {ID_Vuelo, ID_Usuario, numReservacion,CantidadAsientos, Estado} = req.body;
    if (!ID_Vuelo  ||  !ID_Usuario  ||  !numReservacion  ||  !CantidadAsientos) {
        res.json({ success: false, msg: 'Existen algún valor nulo' });
    } else {
        var newR= new PostModel({ID_Vuelo:ID_Vuelo, ID_Usuario:ID_Usuario, numReservacion: numReservacion,CantidadAsientos:CantidadAsientos, Estado: 1});
       

        newR.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'La reservación ya existe' });
            }
            res.json({ success: true, msg: 'Reservación creada existosamente' });
        });
    }
};
module.exports.delete = async (req, res, next)=>{
    const {ID_Vuelo, ID_Usuario, numReservacion,CantidadAsientos, Estado} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {ID_Vuelo, ID_Usuario, numReservacion,CantidadAsientos, Estado},
        {new: true}
    )
    res.json(post);
};
module.exports.update = async (req, res, next)=>{
    const {ID_Vuelo, ID_Usuario, numReservacion,CantidadAsientos, Estado} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {ID_Vuelo, ID_Usuario, numReservacion,CantidadAsientos, Estado},
        {new: true}
    )
    res.json(post);
};