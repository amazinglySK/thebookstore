import mongoose from "mongoose"

const TextbookSchema = new mongoose.Schema({
    name: String,
    img_url : String,
    variations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Variation" }],
    general_in_stock: Boolean,
});

const TextbookModel = mongoose.models["Textbooks"] || mongoose.model("Textbooks", TextbookSchema)

export { TextbookModel }