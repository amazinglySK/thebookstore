import mongoose from "mongoose"

const UniformSchema = new mongoose.Schema({
    name: String,
    variations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Variation" }],
    general_in_stock: Boolean,
});

export const UniformModel = mongoose.model("Uniforms", UniformSchema)