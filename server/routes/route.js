import express from "express";
import { addUser, getUsers } from "../controller/UserController.js";
import { getConversation, newConversation } from "../controller/ConversationController.js";
import { getMessages, newMessage } from "../controller/MessageController.js";
import { getImage, uploadFile } from "../controller/ImageController.js";
import upload from "../utils/upload.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);

route.post("/file/upload", upload.single("file"),  uploadFile);
route.get("/file/:filename", getImage);


export default route;