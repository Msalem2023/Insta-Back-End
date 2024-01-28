import { Types, Schema, model } from "mongoose";

const LikeSchema = new Schema({
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
const LikeModel = model('Like', LikeSchema)
export default LikeModel
