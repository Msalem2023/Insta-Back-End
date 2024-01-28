import {Router} from"express"
import { auth } from "../../middleware/auth.js"
import { follow } from "./controller/Friends.js"
const router=Router()
router.post("/Follow",auth,follow)

// router.post("/Unfollow",auth,unfollow)


export default router