import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async(data) => {
    try{
       await axios.post(`${url}/add`, data);
    }
    catch(error){
        console.log("Error in addUser API", error.message);
        
    }
}

export const getUsers = async() => {
    try{
        let response = await axios.get(`${url}/users`);
        // console.log(response);
        return response.data;
    }
    catch(error){
        console.log("Error in getUsers API", error.message);
    }
}

export const setConversation = async(data) => {
    try{
        await axios.post(`${url}/conversation/add`, data);
    }
    catch(error){
        console.log("Error in setConversation API", error.message);
    }
}

export const getConversation = async(data) => {
    try{
        let response = await axios.post(`${url}/conversation/get`, data);

        return response.data;
    }
    catch(error){
        console.log("Error in getConversation API", error.message);
    }
}

export const newMessage = async(data) => {
    try{
        await axios.post(`${url}/message/add`, data);
    }
    catch(error){
        console.log("Error in newMessage API", error.message);
    }
}
export const getMessages = async(id) => {
    try{
        let response = await axios.get(`${url}/message/get/${id}`);

        return response.data;
    }
    catch(error){
        console.log("Error in getMessage API", error.message);
    }
}

export const UploadFile = async(data) => {
    try{
        return await axios.post(`${url}/file/upload`, data);
    }
    catch(error){
        console.log("Error in UploadFile API", error.message);
    }
}


