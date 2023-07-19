import express from "express";
import LivroController from "../controllers/LivroController.js";

const router = express.Router();

router
.get("/livros", LivroController.index)
.post("/livros", LivroController.store)
.put('/livros/:id', LivroController.update)
.get('/livros/:id', LivroController.update)
.delete('/livros/:id', LivroController.delete)


export default router;