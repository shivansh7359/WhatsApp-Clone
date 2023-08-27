import express from "express";
import dbConnect from "./database/db.js";
import Route from "./routes/route.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());
app.use("/", Route);

dbConnect();

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



