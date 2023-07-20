import mongoose from "mongoose";

const editoraSchema = mongoose.Schema(
    {
        id : {type: String},
        nome: {type: String, required: true}
    },
    {
        versionKey: false
    }
)

const editora = mongoose.model("editoras", editoraSchema);

export default editora;