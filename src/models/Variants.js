import mongoose from "mongoose"

export const VariantSchema = new mongoose.Schema({
    name: String,
    price: Number,
    in_stock: Boolean,
})

const Variants = mongoose.models["Variants"] || mongoose.model("Variants", VariantSchema)

export { Variants };