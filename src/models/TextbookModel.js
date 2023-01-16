import mongoose from "mongoose";
import ItemModel from "./ItemModel";

const TextbookSchema = new mongoose.Schema({
    classes : {type : Array, required : false},
    prices : {type : Array, required : false},
})


export default mongoose.model("Textbooks", TextbookSchema)