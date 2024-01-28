import { TopDeals, advancedSearch, getUserPreferrences, search, sendData } from "./controller/Post.js";
import{Router} from "express"
const router = Router()
router.post('/finalStep',getUserPreferrences)
router.get('/data',sendData)
router.get('/Location',search)
router.post('/TopDeals',TopDeals)
router.get('/advancedSearch',advancedSearch)
// router.get("/multipleSearch",multipleSearch)

export default router
