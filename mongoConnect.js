import { MongoClient } from "mongodb";
import { uri } from "./credentials.js";

const client = new MongoClient(uri)
const db = client.db('trader-joes')

export const produce = db.collection('produce')
export const meat = db.collection('meats')
export const dairy = db.collection('dairy')

export default produce