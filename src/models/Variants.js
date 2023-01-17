import mongoose from "mongoose"

export const VariantSchema = new mongoose.Schema({
    name: String,
    price: Number,
    in_stock: Boolean,
})

const Variant = mongoose.model("Variations", VariantSchema)

export default Variant;