import connection from "../DB/Connection.js"
import userRouter from "./modules/user/user.router.js"
import LikeRouter from "./modules/Like/Like.router.js"
import CommentRouter from "./modules/Comment/comment.router.js"
import FriendsRouter from "./modules/Friends/Friends.router.js"


import ChatRouter from "./modules/Chat/Chat.router.js"
import PostRouter from"./modules/Post/Post.router.js"
// import bookingRouter from"./modules/Reservation/reservation.router.js"


const bootstrap=(app,express)=>{
    connection()
    app.use(express.json())
    app.use('/Chat',ChatRouter)
    app.use('/Friends',FriendsRouter)


    app.use('/Like',LikeRouter)
    app.use('/Comment',CommentRouter)
    app.use('/Post',PostRouter)
    app.use('/user',userRouter)


}
export default bootstrap