import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoutes from './Routes/userRoutes.js'
import itemRoutes from './Routes/itemRoute.js'
import cors from 'cors'
dotenv.config()
const app=express()
// app.use(cors("http://localhost:3520"))

app.use(
    cors({
      origin: [
        "https://crud-frontend-git-main-muhammad-suhails-projects.vercel.app", // ✅ Add this exact URL
        "https://crud-frontend-kohl-nine.vercel.app" // (Keep this if still needed)
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      credentials: true, // ✅ Allows cookies, auth headers
    })
  );



mongoose.connect(process.env.DB)
 
.then(()=>console.log("db connected"))
.catch((error)=>console.log(error))

app.use(express.json())
app.use('/user',userRoutes)
app.use('/item',itemRoutes)

const PORT=process.env.PORT||7000
app.listen(PORT,()=>{
    console.log(`connected in Port ${PORT}`)    
})