import { userdata } from "../models/userModel.js"



export const checkuser = (req,res)=>{
    const usersData = userdata();
    res.render("index.ejs",{user:userdata});
}