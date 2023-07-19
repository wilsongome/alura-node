import express from "express";
import AutorController from "../controllers/AutorController.js";

const router = express.Router();

router
.get("/autor", AutorController.index)
.post("/autor", AutorController.store)
.put('/autor/:id', AutorController.update)
.get('/autor/:id', AutorController.edit)
.delete('/autor/:id', AutorController.delete)


export default router;