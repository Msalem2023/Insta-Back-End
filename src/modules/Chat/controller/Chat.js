import ChatModel from "../../../../DB/model/Chat.model.js"
import MessageModel from "../../../../DB/model/Message.model.js"

export const Chatting = async (req, res, next) => {
    try {
        const Sender = req.user.id
        const { id } = req.body
        const SenderChat = await ChatModel.find({ $or: [{ Sender }, { Receiver: Sender }] })
        if (SenderChat) {
            const sender = SenderChat.find(e => JSON.stringify(e.Receiver) === JSON.stringify(id))

            if (!sender) {
                const Receiver = SenderChat.find(e => JSON.stringify(e.Sender) === JSON.stringify(id))
                if (!Receiver) {
                    const Chat = await ChatModel.create({ Sender, Receiver: id })
                    return res.json({ Chat })

                } else {
                    const Chat = await ChatModel.findById({ _id: Receiver._id }).populate([{
                        path: "Sender"
                    }]).populate([{
                        path: "Receiver"
                    }]).populate([{
                        path: "Messages"
                    }])
                    return res.json({ Chat })
                }

            } else {
                const Chat = await ChatModel.findById({ _id: sender._id }).populate([{
                    path: "Sender"
                }]).populate([{
                    path: "Receiver"
                }]).populate([{
                    path: "Messages"
                }])
                return res.json({ Chat })
            }

        } else {
            const Chat = await ChatModel.create({ Sender, Receiver: id })
            return res.json({ Chat })
        }
    } catch (error) {
        console.log(error)
    }

}
export const Message = async (req, res, next) => {
    const Sender = req.user.id
    const { ChatId, Message } = req.body
    const NewMessage = await MessageModel.create({ Message, Sender, ChatId })

    return res.json({ message: "done", NewMessage })
}