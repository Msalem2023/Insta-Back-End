import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cors from "cors"
import bootstrap from "./src/index.router.js"
const app=express()
app.use(cors())
app.use("/uploads",express.static('./uploads'))
const port=4000
bootstrap(app,express)
app.listen(port,()=> console.log(`${port} is working fine`))
