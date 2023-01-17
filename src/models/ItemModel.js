import mongoose from "mongoose"

export const ItemSchema = new mongoose.Schema({
    name : String,
    in_stock : Boolean,
}, {
    collection : "items",
    discriminatorKey : "_type",
})

const ItemModel = mongoose.model("Items", ItemSchema)
export default {ItemModel}