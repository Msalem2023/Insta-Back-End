import { Types, Schema, model } from "mongoose";

const MessageSchema = new Schema({
    Message: {
        type: String,
    },
    ChatId: {
        type: Types.ObjectId,
        ref: "Chat",
    },
    Sender: {
        type: Types.ObjectId,
        ref: "user",
    },

}, {
    timestamps: true
})
const MessageModel = model('Message', MessageSchema)
export default MessageModel