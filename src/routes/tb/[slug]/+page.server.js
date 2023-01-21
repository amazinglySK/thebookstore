import { mongoConn, mongoDisconn } from "../../../lib/dbFuncs"
import { getTbById } from "../../../lib/itemFuncs";

export async function load({params}) {
    mongoConn()
    let textbook = await getTbById(params.slug)
    return {
        textbook
    }
}

