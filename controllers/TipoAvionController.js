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
    if (!Anno || !Modelo || !Marca || !CantidadPasajeros || !CantidadFilas || !CantidadColumnas) {
        res.json({ success: false, msg: 'Existen algún valor nulo' });
    } else {
        var newTipoA = new PostModel({ Anno: Anno,Modelo:Modelo,Marca:Marca,CantidadPasajeros:CantidadPasajeros,CantidaFilas:CantidaFilas,CantidadColumnas:CantidadColumnas});
       

        newTipoA.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'El tipo avión ya existe' });
            }
            res.json({ success: true, msg: 'Tipo avión creado existosamente' });
        });
    }
};
module.exports.delete = async (req, res, next)=>{
    const post = await PostModel.findByIdAndRemove(req.params.id);
    if(post){
        res.json({result: "Registro borrado correctamente"});
    }else{
        res.json({result: "{Id del Tipo de Avión inválida}"})
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