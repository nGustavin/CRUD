const express = require('express')
const cors = require('cors')

import './database/connection'

import Routes from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.listen(3333)
app.use(Routes)
