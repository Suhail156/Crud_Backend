import Item from "../Models/itemSchema.js";

export const createItems=async(req,res)=>{
    const { title, description, category, price } = req.body;
     console.log(req.body);
     
    if(!title || !price)
        return res.status(400).json({message:"title and price required"})
    try {
        const item=new Item({ title, description, category, price })
        await item.save()
        res.status(201).json({ message: 'Item created successfully', data:item });
    } catch (error) {
        console.log(error);
    }
}

export const getAllitems=async(req,res)=>{
    try {
       const items=await Item.find() 
       res.status(200).json({message:"successfully fetched",data:items})
    } catch (error) {
        console.log(error);
        
    }
}
 export const getById=async(req,res)=>{
      const itemId=req.params.id
    try {
        const items=await Item.findById(itemId)
        if(!items){
            res.status(404).json({message:"item not Found"})
        }
        res.status(200).json({message:"item found",data:items})
    } catch (error) {
        console.log(error);
        
    }
 }

export const updateItems=async(req,res)=>{
    const itemId=req.params.id
     const{title, description, category, price}=req.body
    try {
        const updateItem=await Item.findByIdAndUpdate(itemId,{$set:{title, description, category, price}})


        if(updateItem){
            const updateItem=await Item.findById(itemId)
           
            res.status(200).json({message:"succesfully updated",data:updateItem})
           }
    } catch (error) {
        res.status(404).json({error:"item not found"})
        
    }
}
export const deleteItems=async(req,res)=>{
    const itemId=req.params.id
    try {
        await Item.findByIdAndDelete(itemId)
        res.status(200).json({message:"succesfully deleted"})
    } catch (error) {
        console.log(error);
        
    }
}