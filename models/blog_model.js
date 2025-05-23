import mongoose from "mongoose";

const Schema = mongoose.Schema
const blogSchema = new Schema({
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    dateAndTime: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
        required: true
    }
})

export default mongoose.model("Blogs", blogSchema)