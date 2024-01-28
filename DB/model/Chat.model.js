import { Types, Schema, model } from "mongoose";

const ChatSchema = new Schema({
    Sender: {
        type: Types.ObjectId,
        ref: "user",
    },
    Receiver: {
        type: Types.ObjectId,
        ref: "user",
    },

}, {
    toJSON: { virtuals: true },
    timestamps: true
})
ChatSchema.virtual("Messages", {
    ref: "Message",
    foreignField: "ChatId",
    localField: "_id"
})
const ChatModel = model('Chat', ChatSchema)
export default ChatModel