import express from 'express'
import cors from 'cors'

import { queryMeat } from './meat.js'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 4000

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})

app.get('/get-meat', queryMeat)