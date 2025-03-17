let express = require('express')
let connectToDb = require('./config/connectToDb')
let routes = require('./routes/user.routes')
require('dotenv').config()

let port = process.env.PORT || 8080

let app = express()

app.use(express.json())

app.use('/api/user', routes)

app.use("*", (req,res,next)=>{
    try {
        res.status(404).json({error:true, message:"page not found"})
    } catch (error) {
        next(error)
    }
})

app.use((err,req,res,next)=>{
    try {
        res.status(500).json({error:true, message: err.message})
    } catch (error) {
        next(err)
    }
})

let dbStart = async() => {

    try {
        await connectToDb()
        console.log("db connceted successfully")

       app.listen(port, ()=> {
        console.log(`server is started on port: ${port}`)
       })
    
    }

    catch (error) {
        console.log("connection failed",error.message)
    }
}


dbStart()
