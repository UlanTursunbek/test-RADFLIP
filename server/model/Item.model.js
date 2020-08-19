import mongoose from 'mongoose'

const itemsSchema = new mongoose.Schema(
  {
    title:  String,
    category:  String,
    description:  String,
    price:  String
  }
)


export default mongoose.model('items', itemsSchema)