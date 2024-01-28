import { Types, Schema, model } from "mongoose";

const CommentSchema = new Schema({
    Comment: String,
    userId:{
        type:Types.ObjectId,
        ref:"user",
    },
    PostId: {
        type:Types.ObjectId,
        ref:"Post"
    },
}, {
    timestamps: true
})
const CommentModel = model('Comment', CommentSchema)
export default CommentModel
