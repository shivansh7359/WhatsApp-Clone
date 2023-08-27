import Message from "../models/Message.js";
import Conversation from "../models/Conversation.js";

export const newMessage = async(req, res) => {
    try{
        const newMessage = new Message(req.body);
        await newMessage.save();

        // save latest message in conversations 
        await Conversation.findByIdAndUpdate(
            req.body.conversationId,
            {message: req.body.text}
        );

        return res.status(200).json("Message has been sent successfully");
    }
    catch(error){
        console.log("Error in Add Message Controller");
        console.log(error.message);
    }
}

export const getMessages = async(req, res) => {
    try{
        const messages = await Message.find({conversationId: req.params.id});
        
        return res.status(200).json(messages);
    }
    catch(error){
        console.log("Error in Get Messages Controller");
        console.log(error.message);
    }
}
