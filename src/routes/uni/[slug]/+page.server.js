import { mongoConn, mongoDisconn } from "../../../lib/dbFuncs"
import { getUniById } from "../../../lib/itemFuncs";

export async function load({params}) {
    mongoConn()
    let uniform = await getUniById(params.slug)
    return {
        uniform
    }
}

