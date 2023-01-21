import mongoose from "mongoose"

const NotebookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img_url : String,
    uid : String,
    in_stock: Boolean,
});

const NotebookModel = mongoose.models["Notebooks"] || mongoose.model("Notebooks", NotebookSchema)

export { NotebookModel }