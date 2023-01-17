import mongoose from "mongoose"
import {ItemSchema} from "./ItemModel"

const TextbookSchema = new mongoose.Schema({
    classes : {type : Array, required : false},
    prices : {type : Array, required : false},
})


export default ItemSchema.discriminator("Textbook", TextbookSchema, {discriminatorKey : "_type"})