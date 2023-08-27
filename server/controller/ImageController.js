import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = "http://localhost:8000"; 

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "fs"
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

export const uploadFile = async(req, res) => {
    try{
        if(!req.file){
            return res.status(404).json("File not found");
        }

        const imageUrl = `${url}/file/${req.file.filename}`;

        return res.status(200).json(imageUrl);
    }
    catch(error){
        console.log("Error in uploadFile Controller: ", error);
    }
}

export const getImage = async(req, res) => {
    try{
        const file = await gfs.files.findOne({filename: req.params.filename});

        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(res);


    }
    catch(error){
        console.log("Error in getImage Controller: ", error)
    }
}



