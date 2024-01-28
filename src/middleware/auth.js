import userModel from "../../DB/model/user.model.js"
import  jwt  from "jsonwebtoken";


export const auth = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.json({ message: "authorization is required" })
    } else {
        const decoded = jwt.verify(authorization, process.env.SIGNITURE)
        if (!decoded?.id) {
            return res.json({ message: "invalid token" })
        } else {
            const user = await userModel.findById({ _id: decoded.id })
            if (!user) {
                return res.json({ message: "not registered" })
            } else {
                req.user = user
                next()
            }
        }
    }
}