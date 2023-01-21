import mongoose from "mongoose"

const TextbookSchema = new mongoose.Schema({
    name: String,
    img_url : String,
    uid : String,
    variations: [{ type: Object }],
    general_in_stock: Boolean,
});

const TextbookModel = mongoose.models["Textbooks"] || mongoose.model("Textbooks", TextbookSchema)

export { TextbookModel }