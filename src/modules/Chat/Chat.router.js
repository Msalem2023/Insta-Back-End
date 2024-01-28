import {Router} from"express"
import { auth } from "../../middleware/auth.js"
import { Chatting, Message } from "./controller/Chat.js"
const router=Router()
router.post('/Chat',auth,Chatting)
router.post('/Message',auth,Message)



export default router