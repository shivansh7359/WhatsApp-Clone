import Conversation from "../models/Conversation.js";


export const newConversation = async(req, res) => {
    try{
        const {senderId, recieverId} = req.body;

        const exist = await Conversation.findOne({members:{$all:[recieverId, senderId]}});

        if(exist){
            return res.status(500).json({
                message: "Conversation already exist"
            });
        }

        const newConversation = new Conversation({
            members : [senderId , recieverId],
        })

        await newConversation.save();

        return res.status(200).json({
            message:"New conversation created successfully",
        })

    }
    catch(error){
        console.log("Error in newConversation Controller");
        return res.status(500).json({
            message: error.message,
        })

    }
}

export const getConversation = async(req, res) => {
    try{
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;

        let conversation = await Conversation.findOne(
            {members: {$all: [senderId, receiverId] }}
        );

        return res.status(200).json(conversation);
    }
    catch(error){
        console.log("Error in getConversation Controller");
        return res.status(500).json({
            message: error.message,
        })
    }
}


