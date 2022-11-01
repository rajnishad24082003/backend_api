const User = require("../schema/User")

const createtask  =async (req,res)=>{
    try{
    const task =await User.create(req.body);
    res.status(201);
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

const gettasks  =async (req,res)=>{
    try
    {
        const {email:emailID,password:passwordID} = req.params;
        const emailCheck = await User.find({email:emailID});
        const passwordCheck = await User.find({password:passwordID});
        if(!(emailCheck && passwordCheck))
        {
            return res.status(404).json({msg:`incorrect email or password`})
        }
        res.status(200).json("logged in");
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

module.exports = {createtask,gettasks}