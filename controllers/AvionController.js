const PostModel = require("../models/Avion");


module.exports.get = async (req, res, next)=>{
    const posts = await PostModel.find().exec()
    res.json(posts);
};
module.exports.getByID = async (req, res, next)=>{
    const id = req.params.id;
    const posts = await PostModel.findOne({ _id: id }).exec()
    if(posts){
        res.json({result: "Registro encontrado"});
        res.json(posts);
    }else{
        res.json({result: "{Id del avión inválido, o no existe el registro"});
    }
}
module.exports.create = (req, res, next)=>{
    const {ID_TipoAvion,ID_Horario,CodigoAvion} = req.body;
    const post = new PostModel({ID_TipoAvion: ID_TipoAvion,ID_Horario: ID_Horario,CodigoAvion:CodigoAvion});
    post.save();
    res.json(post);
};

module.exports.create = (req, res, next)=>{
    const {ID_TipoAvion,ID_Horario,CodigoAvion} = req.body;
    if (!ID_TipoAvion|| !ID_Horario||CodigoAvion ) {
        res.json({ success: false, msg: 'Existen algún valor nulo' });
    } else {
        var newA= new PostModel({ID_TipoAvion: ID_TipoAvion,ID_Horario: ID_Horario,CodigoAvion:CodigoAvion});
       

        newA.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'El avión ya existe' });
            }
            res.json({ success: true, msg: 'Avión creado existosamente' });
        });
    }
};
module.exports.delete = async (req, res, next)=>{
    const post = await PostModel.findByIdAndRemove(req.params.id);
    if(post){
        res.json({result: "Registro borrado correctamente"});
    }else{
        res.json({result: "{Id del avión es inválida}"})
    }
};
module.exports.update = async (req, res, next)=>{
    const {CodigoAvion} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {CodigoAvion},
        {new: true}
    )
    res.json(post);
};