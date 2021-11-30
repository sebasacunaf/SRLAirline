const PostModel = require("../models/Avion");


module.exports.get = async (req, res, next)=>{
    const posts = await PostModel.find().populate("ID_TipoAvion").populate("ID_Horario").exec()
    res.json(posts);
};
module.exports.getByID = async (req, res, next)=>{
    const id = req.params.id;
    const posts = await PostModel.findOne({ _id: req.params.id }).exec()
    if(posts){
        res.json(posts);
    }else{
        res.json({result: "{Id del avión inválido, o no existe el registro"});
    }
}
module.exports.create = (req, res, next)=>{
    const {ID_TipoAvion,ID_Horario,CodigoAvion,Estado} = req.body;
    if (!ID_TipoAvion|| !ID_Horario|| !CodigoAvion ) {
        res.json({ success: false, msg: 'Existen algún valor nulo' });
    } else {
        var newA= new PostModel({ID_TipoAvion: ID_TipoAvion,ID_Horario: ID_Horario,CodigoAvion: CodigoAvion, Estado: 1});
        newA.save(function (err) {
            if (err) {
                console.log(ID_TipoAvion)
                console.log(ID_Horario)
                console.log(CodigoAvion)
                console.log(err)
                return res.json({ success: false, msg: 'El avión ya existe' });
            }
            res.json({ success: true, msg: 'Avión creado existosamente' });
        });
    }
};
module.exports.delete = async (req, res, next)=>{
    const {CodigoAvion, Estado} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {CodigoAvion, Estado},
        {new: true}
    )
    res.json(post);
};
module.exports.update = async (req, res, next)=>{
    const {CodigoAvion, Estado} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {CodigoAvion, Estado},
        {new: true}
    )
    res.json(post);
};