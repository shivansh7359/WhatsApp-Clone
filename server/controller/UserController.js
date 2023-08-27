import User from "../models/User.js";

//add new user
export const addUser = async(req, res) => {
    try{
       let exist =  await User.findOne({sub: req.body.sub});

       if(exist){
        res.status(200).json({
            msg: "User already exist",
        });
        return;
       }

       const newUser = new User(req.body);
       await newUser.save();
       return res.status(200).json({
        newUser: newUser,
       });
        
    }
    catch(error){
        console.log("Error in Add User Controller");
        console.log(error.message);
    }
}


//get users
export const getUsers = async(req, res) => {
    try{
        const users = await User.find({});
        return res.status(200).json(users);
    }
    catch(error){
        console.log("Error in Get User Controller");
        console.log(error.message);
    }
}

