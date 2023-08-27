import {Server} from "socket.io";

const io = new Server(9000, {
    cors:{
        origin: "http://localhost:3000"
    }
});

let users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({...userData, socketId});
}

const getUser = (userId) => {
    return users.find(user => user.sub == userId);
}

io.on("connection", (socket) => {
    console.log("User connected");

    //to add user and online offline functionality
    socket.on("addUsers", userData => {
        addUser(userData, socket.id);   //req from FE to BE
        io.emit("getUsers", users); //send from backend to frontend
    })

    //for chat functionality
    socket.on("sendMessage", data => {
        const user = getUser(data.receiverId);
        io.to(user.socketId).emit("getMessage", data);
        //.to is used to send msg 
    })


})



