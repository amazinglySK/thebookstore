import { mongoConn, mongoDisconn } from "../../../lib/dbFuncs"
import { getNbkById } from "../../../lib/itemFuncs";

export async function load({params}) {
    mongoConn()
    let notebook = await getNbkById(params.slug)
    return {
        notebook
    }
}

