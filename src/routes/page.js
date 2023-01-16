import mongoose from "mongoose";

/**@type {import("mongoose").Model}*/
const Textbook = "../models/TextbookModel";

/**@type {import("mongoose").Model}*/
const Uniform  = require("../models/UniformModel");


export default async function get() {
    await mongoose.connect(process.env.MONGODB_URL)
    let uniforms = await Uniform.find();
    let textbooks = await Textbook.find();
    let notebooks = await Textbook.find();

    console.log(uniforms)
    console.log(textbooks)
    console.log(notebooks)

    return {
        body : {
            uniforms,
            textbooks,
            notebooks,
        }
    }

}