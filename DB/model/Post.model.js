import { Types, Schema, model } from "mongoose";

const PostSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    Like: {
        Like: [Types.ObjectId],
        Show: Boolean,
    },
    Img: {
        type: [String],
        required: true
    },
    Share: {
        userId: Types.ObjectId,
        ToUserId: Types.ObjectId
    },
    userId: {
        type: Types.ObjectId,
        ref: "user",
    },
    Likedalready: {
        type:String,
    },
}, {
    toJSON: { virtuals: true },
    timestamps: true
})
PostSchema.virtual("Comments",{
    ref:"Comment",
    foreignField: "PostId",
localField: "_id"
})
PostSchema.virtual("Likes",{
    ref:"Like",
    foreignField: "PostId",
localField: "_id"
})
const PostModel = model('Post', PostSchema)
export default PostModel
