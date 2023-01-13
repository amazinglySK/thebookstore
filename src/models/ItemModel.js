const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema({
    name : String,
    in_stock : Boolean,
}, {
    collection : "items",
    discriminatorKey : "_type",
})

module.exports = mongoose.Model("Items", ItemSchema)