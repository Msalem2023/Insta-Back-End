import PostModel from "../../../../DB/model/Post.model.js"
import userModel from "../../../../DB/model/user.model.js"

export const CreatePost = async (req, res, next) => {
    try {
        const id = req.user.id

        console.log(req.files)
        console.log(req.body)

        const filename =[]
        for (let i = 0; i < req.files.length; i++) {
                    filename.push(req.files[i].filename)
            }
        const { description } = req.body
        const saveData = await PostModel.create({ description, userId:id,Img:filename})
        return res.json({ message: "done", saveData })
    } catch (error) {
        return res.json(error)
    }

}
export const sendData = async (req, res, next) => {
    try {
        const id=req.user.id
        const data = await PostModel.find({userId:id})
        return res.json({ message: "done", data })

    } catch (error) {
        res.json(error)
    }
}
export const specificPost= async(req,res,next)=>{
    const user=req.user.id
    const {id}=req.params
    const post=await PostModel.findById({_id:id}).populate([{
        path:"userId",
    }]).populate([{
        path:"Comments",populate:{
            path:"userId", populate:[{path:"Posts"},{path:"Following Followers",populate:{path:"Followers"}}]
        }
    }])
    const userinfo=await userModel.findById({_id:user}).populate([{
        path:"Posts"
    }]).populate([{
        path:"Followers" ,populate:{path:"Following"}
    }]).populate([{
        path:"Following",populate:{path:"Followers"}
    }])
    return res.json({post,userinfo})
}
export const allPosts= async(req,res,next)=>{
    const loggedInUser=req.user.id
    const posts=await PostModel.find().populate([{
        path:"userId",select:"Img UserName"
    }]).populate([{
        path:"Comments",populate:{
            path:"userId"
        }
    }]).populate([{
        path:"Likes"
    }])
    let Posts=posts.reverse()
    const suggested=await userModel.find()
    return res.json({message:"done",Posts,loggedInUser,suggested})
}


export const search = async (req, res, next) => {
    const { Location } = req.query
    const result = await HotelModel.find({ Location: Location })
    return res.json({ message: "here you are", result })
}
export const TopDeals = async (req, res, next) => {
    const data = await HotelModel.find()
    return res.json({ message: "here you are", data })
}
export const advancedSearch = async (req, res, next) => {
    const { destination, Price, Property, Amenities, Policy, Meal } = req.query
    const data = await HotelModel.find({ Location: destination })
    const Newdata = await HotelModel.find({ $and: [{ Location: destination }, { $or: [{ Meal: Meal }, { Policy: Policy }, { Price: { $lt: Price } }, { Amenities: Amenities }, { HotelName: Property }] }] })
    return res.json({ message: "done", data, Newdata })
}

// export const multipleSearch=async(req,res,next)=>{
//     const{firstinput,secondInput}=req.query
//     console.log(firstinput)
//     console.log(req.query)
//     const data= await HotelModel.find({$and: [{Location: firstinput},
//     {Price: secondInput}]})
//     return res.json({data})
// }