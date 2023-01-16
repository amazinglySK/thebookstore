import mongoose from "mongoose";
import ItemModel from "./ItemModel"

const NotebookSchema = new mongoose.Schema({
    price : {type : Number, require : true}
})


export default ItemModel.discriminator("Notebooks", NotebookSchema, {discriminatorKey : "_type"})