import { mongoConn } from "../lib/dbFuncs"
import { UniformModel } from "../models/UniformModel";

export default async function load() {
    mongoConn()

    let uniforms = await UniformModel.find()
    console.log(uniforms)

    return {
        uniforms
    }
}

