const PostModel = require("../models/Vuelos");

module.exports.get = async (req, res, next)=>{
    const posts = await PostModel.find().populate("ID_Avion").exec()
    res.json(posts);
};
module.exports.getByID = async (req, res, next)=>{
    const posts = await PostModel.findOne({ _id: req.params.id}).exec()
    if(posts){
        res.json(posts);
    }else{
        res.json({result: "{Id del vuelo es inválida, o no existe el registro"});
    }
}
module.exports.getByForm = async (req, res, next)=>{
    console.log("parametro " + req.params.Origen + 'Destino: '+req.params.Destino);
    const posts = await PostModel.find({Origen:req.params.Origen, Destino: req.params.Destino}).populate("ID_Avion").exec()
    if(posts){
        console.log("controller " + posts);
        res.json({Vuelos: posts});
    }else{
        res.json({result: "{Id del vuelo es inválida, o no existe el registro"});
    }
}

module.exports.create = (req, res, next)=>{
    const {ID_Avion, CodigoVuelo, Descripcion, Origen, Destino,FechaIda,FechaRegreso,EspaciosDisponibles, Estado} = req.body;
    if (!ID_Avion || !CodigoVuelo || !Descripcion || !Origen || !Destino || !FechaIda || !FechaRegreso || !EspaciosDisponibles ) {
        res.json({ success: false, msg: 'Existen algún valor nulo' });
    } else {
        var newV= new PostModel({ID_Avion:ID_Avion, CodigoVuelo:CodigoVuelo, Descripcion:Descripcion ,Origen:Origen,Destino:Destino,FechaIda:FechaIda,FechaRegreso:FechaRegreso,EspaciosDisponibles:EspaciosDisponibles, Estado: 1});
       

        newV.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'El vuelo ya existe' });
            }
            res.json({ success: true, msg: 'Vuelo creado existosamente' });
        });
    }
};
module.exports.delete = async (req, res, next)=>{
    const {ID_Avion, CodigoVuelo, Descripcion, Origen, Destino,FechaIda,FechaRegreso,EspaciosDisponibles, Estado} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {ID_Avion, CodigoVuelo, Descripcion, Origen, Destino,FechaIda,FechaRegreso,EspaciosDisponibles, Estado},
        {new: true}
    )
    res.json(post);
};
module.exports.update = async (req, res, next)=>{
    const {ID_Avion, CodigoVuelo, Descripcion, Origen, Destino,FechaIda,FechaRegreso,EspaciosDisponibles, Estado} = req.body;
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id},
        {ID_Avion, CodigoVuelo, Descripcion, Origen, Destino,FechaIda,FechaRegreso,EspaciosDisponibles, Estado},
        {new: true}
    )
    res.json(post);
};