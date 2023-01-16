import mongoose from "mongoose"
import Item from "./ItemModel"

const UniformSchema = new mongoose.Schema({
    sizes : {type : Array, required : false},
    prices : {type : Array, required : false},
    in_stock : Boolean,
});

export default mongoose.model("Uniforms", UniformSchema);