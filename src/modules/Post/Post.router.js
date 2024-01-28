import { auth } from "../../middleware/auth.js";
import { fileUpload, fileValidation } from "../../utilies/multer.js";
import {CreatePost, allPosts, sendData, specificPost } from "./controller/Post.js";
import{Router} from "express"
const router = Router()
// router.post('/finalStep',getUserPreferrences)
router.post('/data',auth,sendData)
router.post('/posts/:id',auth,specificPost)



router.get("/posts",auth,allPosts)

// router.get('/Location',search)
// router.post('/TopDeals',TopDeals)
// router.get('/advancedSearch',advancedSearch)
router.post('/uploadPosts',fileUpload('user/posts',fileValidation.image).array('image[]',5),auth,CreatePost)

// router.get("/multipleSearch",multipleSearch)

export default router
