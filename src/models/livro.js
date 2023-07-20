import mongoose, { mongo } from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores", required: true},
        editora: {type: mongoose.Schema.Types.ObjectId, ref: "editoras", required: true},
        numeroPaginas: {type: Number}
    }
);

const livro = mongoose.model("livros", livroSchema);

export default livro;