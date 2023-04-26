const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

app.get('/', (req, res) => {
    res.json({msg: 'vercel server working'});
})


