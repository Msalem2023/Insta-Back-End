import FriendsModel from "../../../../DB/model/Friends.model.js"

export const follow = async (req, res, next) => {
    const followingUser = req.user.id
    const { id } = req.body
    const following = await FriendsModel.find({ Following: followingUser })
    if (following) {
        const alreadyFriend = following.filter(e => JSON.stringify(e.Followers) === JSON.stringify(id))
        if (alreadyFriend?.length) {
            const FriendshipId = alreadyFriend[0]._id
            const unfollow = await FriendsModel.findByIdAndDelete({ _id: FriendshipId })
            return res.json({ message: "follow" })
        } else {
            const newFriend = await FriendsModel.create({ Following: followingUser, Followers: id })
            return res.json({ message: "following", newFriend })
        }
    } else {
        const newFriend = await FriendsModel.create({ Following: followingUser, Followers: id })
        return res.json({ message: "following", newFriend })
    }
}
    
