import md5 from "md5";
import User from "../Models/userSchema.js";

export const signup=async(req,res)=>{
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || password.length < 8) {
        return res.status(400).json({ message:'Failed' })
    }
    try {
         const hashedPassword=md5(password)
         const newUser=new User({name,email,phone,password:hashedPassword})
          await newUser.save()
          res.status(201).json({ message: 'signup Successfully',data:newUser });
    } catch (error) {
        console.log(error);
    }
}
 
export const login=async(req,res)=>{
    const { emailOrPhone, password } = req.body;
     console.log(req.body);
     
    const hashedPassword = md5(password)
     try {
        const user = await User.findOne({
            $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
            password: hashedPassword
        })
         console.log(user,'ere');
         
        if (!user) return res.status(400).json({ message: 'User not found' });
        res.status(200).json({ message: 'Login successful', data: user });
     } catch (error) {
        console.log(error);
        
     }
}

export const allUser=async(req,res)=>{
   try {
     const users=await User.find() 
     res.status(200).json({message:"success",data:users})
   } catch (error) {
    console.log(error);
   }
}

export const deleteUsers=async(req,res)=>{
     const userid=req.params.id
    try {
        await User.findByIdAndDelete(userid)
        res.status(200).json({message:"succesfully deleted"})
    } catch (error) {
        console.log(error);
        
    }
}