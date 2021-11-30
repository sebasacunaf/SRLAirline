const PostModel = require("../models/Ruta");

module.exports.get = async (req, res, next)=>{
    const posts = await PostModel.find().exec()
    res.json(posts);
};
module.exports.getByID = async (req, res, next)=>{
    const posts = await PostModel.findOne({ _id: req.params.id}).exec()
    if(posts){
        res.json(posts);
    }else{
        res.json({result: "{Id de inválido, o no existe el registro"});
    }
}

module.exports.create = (req, res, next)=>{
    const {Ruta,Duracion} = req.body;
    if (!Ruta || !Duracion ) {
        res.json({ success: false, msg: 'Existen algún valor nulo' });
    } else {
        var newR= new PostModel({Ruta: Ruta,Duracion:Duracion, Estado: 1});
       

        newR.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'La ruta ya existe' });
            }
            res.json({ success: true, msg: 'Ruta creada existosamente' });
        });
    }
};
module.exports.delete = async (req, res, next)=>{
    const {Ruta,Duracion, Estado} = req.body;
    console.log(req.body);
    const user = await PostModel.findOneAndUpdate(
      { _id: req.params.id },
      {Ruta,Duracion, Estado},
      { new: true } 
    );
    res.json(user);
};
module.exports.update = async (req, res, next)=>{
    const {Ruta,Duracion, Estado} = req.body;
    console.log(req.body);
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {Ruta,Duracion, Estado},
        {new: true}
    )
    console.log('actualizado');
    res.json(post);
};