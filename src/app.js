import express from "express";
import db from "./config/DbConnect.js";
import livros from "./models/livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão!"))
db.once("open", ()=>{
    console.log("Conexão com o DB feita com sucesso!");
})

const app = express();

app.use(express.json())

routes(app)

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo =  req.body.titulo;
    res.json(livros);
})

app.patch('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo =  req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso!`);
})


function buscaLivro(id)
{
    return livros.findIndex(livro => livro.id == id)
}


export default app