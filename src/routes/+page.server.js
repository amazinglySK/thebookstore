import { mongoConn } from "../lib/dbFuncs"
import Textbook from "../models/TextbookModel"

export default async function load(){
    mongoConn()

    let textbooks = await Textbook.find()
    console.log(textbooks)

    return {
        textbooks
    }
}

