import mongoose from "mongoose"
import {ItemSchema} from "./ItemModel"

const UniformSchema = new mongoose.Schema({
    sizes : {type : Array, required : false},
    prices : {type : Array, required : false},
});

export default ItemSchema.discriminator("Uniform", UniformSchema, { discriminatorKey : "_type" });