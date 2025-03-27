import express from 'express'
import { allUser, deleteUsers, login, signup } from '../Controller/userController.js'

 const router =express.Router()

 router.post('/signup',signup)
 router.post('/login',login)
 router.get('/allusers',allUser)
 router.delete('/delete/:id',deleteUsers)

 export default router