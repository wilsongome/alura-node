import livro from "../models/livro.js";

class LivroController{

    static index = async (req, res) => {
        try {

            const editora = req.query.editora ? req.query.editora : null;
            const autor = req.query.autor ? req.query.autor : null;
            var filter = {};
            if(editora != null){
                filter['editora'] = editora;
            }
            if(autor != null){
                filter['autor'] = autor;
            }
           
            const result = await livro.find(filter)
            .populate('autor')
            .populate('editora')
            .exec();
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static store = async (req, res) => {
        try {   
            const result = await livro.create(req.body);
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static update = async (req, res) => {
        try {   
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, {$set: req.body}).populate('autor').exec();
            const result = await livro.findById(id);
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static edit = async (req, res) => {
        try {   
            const id = req.params.id;
            const result = await livro.findById(id).populate('autor').populate('editora').exec();
            if(result == null){
                res.status(404).json({message: "Object not found!"});
            }else{
                res.status(200).json(result);
            }
        } catch (error) {
            res.status(400).json({message: "ID inválido!"});
        }
    }

    static delete = async (req, res) => {
        try {   
            const id = req.params.id;
            const result = await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro deletado com sucesso!"});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

}

export default LivroController;