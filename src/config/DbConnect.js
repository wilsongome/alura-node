import mongoose from "mongoose";

mongoose.connect("mongodb+srv://wilsongome:lBI5pVHsOWAGOx9A@cluster0.slulr2x.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
