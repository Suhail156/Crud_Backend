import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength: 100 },
    description: { type: String, maxlength: 500 },
    category: { type: String },
    price: { type: Number, required: true }
});
const Item=mongoose.model('Item',ItemSchema)
export default Item
