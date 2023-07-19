import autor from "../models/Autor.js";

class AutorController{

    static index = async (req, res) => {
        try {
            const result = await autor.find();
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static store = async (req, res) => {
        try {   
            const result = await autor.create(req.body);
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static update = async (req, res) => {
        try {   
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, {$set: req.body})
            const result = await autor.findById(id);
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static edit = async (req, res) => {
        try {   
            const id = req.params.id;
            const result = await autor.findById(id);
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
            const result = await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor deletado com sucesso!"});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

}

export default AutorController;