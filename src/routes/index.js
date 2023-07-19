import express from "express";
import livro from "./livroRoutes.js";

const route = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de node.js"})
    })

    app.use(
        express.json(),
        livro
    )
}

export default route;