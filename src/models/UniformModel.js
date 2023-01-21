import mongoose from "mongoose"

const UniformSchema = new mongoose.Schema({
    name: String,
    uid : String,
    variations: [{ type : Object }],
    img_url : String,
    general_in_stock: Boolean,
});

const UniformModel = mongoose.models["Uniforms"] || mongoose.model("Uniforms", UniformSchema)

export { UniformModel }