import express from "express";
import LivroController from "../controllers/LivroController.js";

const router = express.Router();

router
.get("/livro", LivroController.index)
.post("/livro", LivroController.store)
.put('/livro/:id', LivroController.update)
.get('/livro/:id', LivroController.edit)
.delete('/livro/:id', LivroController.delete)


export default router;