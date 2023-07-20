import express from "express";
import EditoraController from "../controllers/EditoraController.js";

const router = express.Router();

router
.get("/editora", EditoraController.index)
.post("/editora", EditoraController.store)
.put('/editora/:id', EditoraController.update)
.get('/editora/:id', EditoraController.edit)
.delete('/editora/:id', EditoraController.delete)


export default router;