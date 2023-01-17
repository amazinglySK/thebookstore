import mongoose from "mongoose"

const NotebookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    in_stock: Boolean,
});

const NotebookModel = mongoose.model("Uniforms", NotebookSchema)

export default { NotebookModel }