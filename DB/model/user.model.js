import { Types, Schema, model } from "mongoose";

const userSchema = new Schema({
    UserName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: Number,
        required: true
    },

    Img: {
        type: String,
        default: "https://cdn2.iconfinder.com/data/icons/colored-simple-circle-volume-01/128/circle-flat-general-51851bd79-1024.png"
    },
    EmailConfirmed: {
        type: Boolean,
        default: false
    }, Gender: {
        type: String
    }

}, {
    toJSON: { virtuals: true },
    timestamps: true
})
userSchema.virtual("Posts", {
    ref: "Post",
    foreignField: "userId",
    localField: "_id"
})
userSchema.virtual("Messages", {
    ref: "Message",
    foreignField: "Sender",
    localField: "_id"
})
userSchema.virtual("Following", {
    ref: "Friends",
    foreignField: "Following",
    localField: "_id"
})
userSchema.virtual("Followers", {
    ref: "Friends",
    foreignField: "Followers",
    localField: "_id"
})
const userModel = model('user', userSchema)
export default userModel
