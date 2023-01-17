import { UniformModel } from "../models/UniformModel"

export const getAllUniformSummaries = async () => {
    let uniforms_data = await UniformModel.find()
    let summaries = uniforms_data.map((v, _) => {return {name : v["name"], img : v["img_url"], in_stock : v["general_in_stock"]}})
    return summaries
}