
import multer from "multer";
import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from "dotenv";
dotenv.config();

const storage = new GridFsStorage({
    url: process.env.DATABASE_URL,
    options: {useUnifiedTopology: true, useNewUrlParser: true},
    file: (req, file) => {
        const match = ["image/jpg", "image/png"];

        if(match.indexOf(file.mimeType) === -1) {
            return `${Date.now()}-file-${file.originalname}`;
        }
        return{
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
})

export default multer({storage});
