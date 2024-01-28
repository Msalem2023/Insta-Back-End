import joi from "joi"

export const Signup ={
body:joi.object({
    UserName:joi.string().required(),
    Email:joi.string().email().required(),
    Password:joi.number().required(),
    CPassword:joi.number().valid(joi.ref("Password")).required()
}).required()
}
export const SignIn ={
    body:joi.object({
        Email:joi.string().email().required(),
        Password:joi.number().required(),
    }).required()
    }
    