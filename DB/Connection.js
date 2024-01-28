import mongoose from "mongoose";

const connection= async()=>{
    return (await mongoose.connect('mongodb://localhost:27017/Insta')).isObjectIdOrHexString(result=>{
        console.log('DB successfully connected')
    })
}
export default connection