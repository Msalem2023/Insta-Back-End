import ChatModel from "../../../../DB/model/Chat.model.js"

export const Chatting = async (req, res, next) => {
    try {
        const Sender = req.user.id
        const { id } = req.body
        const SenderChats = await ChatModel.findOne({ userId: Sender })
        if (SenderChats) {
            const Chat = await ChatModel.findOne({ Receiver:id }).populate([{
                path:"Messages"
            }])
            if(!Chat){
                const NewChat=await ChatModel.create({Sender,Receiver:id})
            }else{
                return res.json({Chat})
            }
        } 
    } catch (error) {
        console.log(error)
    }

}
export const dislike = async (req, res, next) => {
    const liker = req.user.id
    const { id } = req.body
    const dislike = await LikeModel.findOneAndDelete({ userId: liker }, { $pull: { 'Like.Like': liker } }, { new: true })

    return res.json({ message: "done" })
}