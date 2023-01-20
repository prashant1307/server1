const PORT = process.env.PORT || 8080;
const express = require('express')

const cors=require("cors");


const app = express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res) => res.send('hello'))

app.listen(PORT,() => {console.log('server started on port 8080')})