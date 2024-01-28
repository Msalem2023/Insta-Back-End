import {Router} from 'express'
import { auth } from '../../middleware/auth.js'
import { comment, deleteComment, updateComment } from './controller/Comment.js'
const router = Router()

router.post('/comment',auth,comment)
router.put('/updatecomment',auth,updateComment)
router.delete("/:id",deleteComment)



export default router