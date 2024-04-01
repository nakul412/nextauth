import mongoose from "mongoose";

export const  loginModel = mongoose.Schema({
    email: String,
    password: String,
    image : String,
    name:  String,
})

export const  Login = mongoose.models.logins || mongoose.model("logins", loginModel)