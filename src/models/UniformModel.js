const mongoose = require("mongoose")
const ItemModel = require("./ItemModel")

const UniformSchema = new mongoose.Schema({
    sizes : {type : Array, required : false},
    prices : {type : Array, required : false},
});

module.exports = ItemModel.discriminator("Uniform", UniformSchema, { discriminatorKey : "_type" });