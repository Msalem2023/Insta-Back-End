import CommentModel from "../../../../DB/model/Comment.model.js"

export const comment = async (req, res, next) => {
    const commentator = req.user.id
    const { id, comment } = req.body
    console.log(id)
    const Comment = await CommentModel.create({ userId: commentator, PostId: id, Comment: comment })
    return res.json({ message: "done", Comment })
}
export const updateComment = async (req, res, next) => {
    const commentator = req.user.id
    const { commentid, comment } = req.body
    const Comment = await CommentModel.findByIdAndUpdate({ _id: commentid }, { Comment: comment }, { new: true })
    return res.json({ message: "done", Comment })
}
export const deleteComment = async (req, res, next) => {
    // const commentator = req.user.id
    const { id } = req.params
    const Comment = await CommentModel.findByIdAndDelete({ _id: id })
    return res.json({ message: "done" })
}