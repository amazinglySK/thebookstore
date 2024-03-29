import { mongoConn, mongoDisconn } from "../lib/dbFuncs"
import { getAllNotebookSummaries, getAllTextbookSummaries, getAllUniformSummaries } from "../lib/itemFuncs";

export async function load() {
    mongoConn()

    let uniforms_data = await getAllUniformSummaries();
    let textbooks_data = await getAllTextbookSummaries()
    let notebooks_data = await getAllNotebookSummaries()
    return {
        uniforms : uniforms_data,
        notebooks : notebooks_data,
        textbooks : textbooks_data,
    }
}

