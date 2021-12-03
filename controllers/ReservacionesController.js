const PostModel = require("../models/Reservaciones");

module.exports.get = async (req, res, next)=>{
    const posts = await PostModel.find().populate("ID_Vuelo").populate("ID_Usuario").exec()
    res.json(posts);
};
module.exports.getByID = async (req, res, next)=>{
    console.log('Id en el controller '+req.params.id);
    const posts = await PostModel.findOne({_id: req.params.id}).populate("ID_Vuelo").populate("ID_Usuario").populate({
        path: 'ID_Vuelo',
        populate:{
            path: 'ID_Avion',
            populate:{
                path:'ID_Horario'
            }
    
        }
    
    }).exec()
    console.log('controller reserva '+posts)
    if(posts){
        res.json(posts);
    }else{
        res.json({result: "{Id de reservación es inválida, o no existe el registro"});
    }
};
module.exports.getByUsuario = async (req, res, next)=>{
    console.log(req.params.id);
    const posts = await PostModel.find({ID_Usuario: req.params.id}).populate("ID_Vuelo").populate("ID_Usuario").exec()
   console.log(posts);
 
    if(posts){
        res.json(posts);
    }else{
        res.json({result: "{Id de reservación es inválida, o no existe el registro"});
    }
};


module.exports.create = (req, res, next)=>{
    const {ID_Vuelo, ID_Usuario, numReservacion,CantidadAsientos, Estado} = req.body;
    if (!ID_Vuelo  ||  !ID_Usuario  ||  !numReservacion  ||  !CantidadAsientos) {
        res.json({ success: false, msg: 'Existen algún valor nulo' });
    } else {
        var newR= new PostModel({ID_Vuelo:ID_Vuelo, ID_Usuario:ID_Usuario, numReservacion:numReservacion,CantidadAsientos:CantidadAsientos, Estado: 1});
       

        newR.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'La reservación ya existe' });
            }
            res.json({ success: true, msg: 'Reservación creada existosamente', Reserva:newR });
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