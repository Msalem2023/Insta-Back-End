import {Router} from"express"
import { auth } from "../../middleware/auth.js"
import { dislike, like } from "./controller/Like.js"
const router=Router()
router.put('/like',auth,like)
router.put('/dislike',auth,dislike)


export default router