import { NotebookModel } from "../models/Notebook"
import { TextbookModel } from "../models/TextbookModel"
import { UniformModel } from "../models/UniformModel"

export const getAllUniformSummaries = async () => {
    let uniforms_data = await UniformModel.find()
    let summaries = uniforms_data.map((v, _) => {
        return {
            name : v["name"], 
            img : v["img_url"], 
            in_stock : v["general_in_stock"], 
            url : `/uni/${v["uid"]}`,
        }
    })
            
    return summaries
}
export const getAllNotebookSummaries = async () => {
    let notebook_data = await NotebookModel.find()
    let summaries = notebook_data.map((v, _) => {
        return {
            name : v["name"], 
            img : v["img_url"], 
            in_stock : v["general_in_stock"], 
            url : `/nbk/${v["uid"]}`,
        }
    })
    return summaries
}
export const getAllTextbookSummaries = async () => {
    let textbook_data = await TextbookModel.find()
    let summaries = textbook_data.map((v, _) => {
        return {
            name : v["name"], 
            img : v["img_url"], 
            in_stock : v["general_in_stock"], 
            url : `/tb/${v["uid"]}`,
        }
    })
    return summaries
}

export const getUniById = async (id) => {
    let uni = await UniformModel.findOne({uid : id})
    return {
        variations :uni["variations"],
        name : uni["name"],
        img : uni["img_url"],
    }
}

export const getTbById = async (id) => {
    let tb = await TextbookModel.findOne({uid : id})
    return {
        variations :tb["variations"],
        name : tb["name"],
        img : tb["img_url"],
    }
}

export const getNbkById = async (id) => {
    let nbk = await NotebookModel.findOne({uid : id})
    return {
        name : nbk["name"],
        price : nbk["price"],
        img : nbk["img_url"],
        in_stock : nbk["in_stock"]
    }
}