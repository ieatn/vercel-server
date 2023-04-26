const express = require('express')
const app = express()
app.use(express.json())
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
app.use(cors())

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

app.get('/', (req, res) => {
    res.json({msg: 'vercel server working'});
})
app.get('/api', (req, res) => {
    res.json({msg: 'api data'});
})
