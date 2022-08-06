import { meat } from "./mongoConnect.js"

export const queryMeat = async (req, res) => {
    const allMeats = await meat.find().toArray()
    res.send(allMeats)
}