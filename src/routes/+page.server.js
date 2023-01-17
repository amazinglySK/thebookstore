import { mongoConn, mongoDisconn } from "../lib/dbFuncs"
import { NotebookModel } from "../models/Notebook";
import { TextbookModel } from "../models/TextbookModel";
import { getAllUniformSummaries } from "../lib/postFuncs";
import { Variants } from "../models/Variants";

export async function load() {
    mongoConn()

    let uniforms_data = await getAllUniformSummaries();
    let textbooks_data = await TextbookModel.find()
    let notebooks_data = await NotebookModel.find()

    // mongoDisconn()
    return {
        uniforms : uniforms_data
    }
}

