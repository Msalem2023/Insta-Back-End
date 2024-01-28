import LikeModel from "../../../../DB/model/Like.model.js"

export const like = async (req, res, next) => {
    try {
        const liker = req.user.id
        const { id } = req.body
        const alreadyliked = await LikeModel.find({ PostId: id })
        console.log(alreadyliked)
        if (alreadyliked?.length<1) {
            const Like = await LikeModel.create({ PostId: id, userId: liker })
            return res.json({ Like })
        } else {
            for (let i = 0; i < alreadyliked.length; i++) {
                if (JSON.stringify(alreadyliked[i].userId) === JSON.stringify(liker)) {
                    const id = alreadyliked[i]._id   
                         console.log(id)
                    const destroy = await LikeModel.findOneAndDelete({ _id: id })
                    
                } else {
                    const newLike = await LikeModel.create({ PostId: id, userId: liker })
                    console.log(newLike)
                    return res.json({ newLike })
                }

            }


        }
    } catch (error) {
        console.log(error)
    }

}
export const dislike = async (req, res, next) => {
    const liker = req.user.id
    const { id } = req.body
    const dislike = await LikeModel.findOneAndDelete({ PostId: id })

    return res.json({ message: "done" })
}