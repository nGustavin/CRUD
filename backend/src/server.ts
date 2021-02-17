const express = require('express')
const cors = require('cors')
import { Response, Request } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.json({message: "Hello world!"})
})

app.use(express.json())
app.use(cors())
app.listen(3333)
