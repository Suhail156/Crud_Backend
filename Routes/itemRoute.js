import express from 'express'
import { createItems, deleteItems, getAllitems, getById, updateItems } from '../Controller/itemsController.js'

const router=express.Router()
router.post('/create',createItems)
router.get('/allitems',getAllitems)
router.get('/getbyid/:id',getById)
router.patch('/update/:id',updateItems)
router.delete('/delete/:id',deleteItems)

export default router