const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../index.html'))
})


const port = process.env.PORT || 4004

app.listen(port, ()=>{
    console.log(`Groovin on port ${port}`)
})