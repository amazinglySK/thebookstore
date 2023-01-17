import mongoose from "mongoose"

const TextbookSchema = new mongoose.Schema({
    name: String,
    variations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Variation" }],
    general_in_stock: Boolean,
});

const TextbookModel = mongoose.model("Textbooks", TextbookSchema)

export default { TextbookModel }