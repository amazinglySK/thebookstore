const mongoose = require("mongoose")
const ItemModel = require("./ItemModel")

const TextbookSchema = new mongoose.Schema({
    classes : {type : Array, required : false},
    prices : {type : Array, required : false},
})


module.exports = ItemModel.discriminator("Textbooks", TextbookSchema, {discriminatorKey : "_type"})