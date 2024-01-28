import { Types, Schema, model } from "mongoose";

const FriendsSchema = new Schema({
    Followers:{
        type:Types.ObjectId,
        ref:"user",
    },
    Following: {
        type:Types.ObjectId,
        ref:"user"
    },
}, {
    timestamps: true
})
const FriendsModel = model('Friends', FriendsSchema)
export default FriendsModel
