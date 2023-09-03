import express from "express";
import cors from "cors";
import { router as artistRouter } from "./artists.js";
const app = express();
const port = 3333;
app.use(express.json());
app.use(cors());
app.listen(port, () => {
    console.log(`App is running on localhost:${port}`);
});
//Use 'artistRouter' subrouter if the HTTP request starts with the pathing "/artists"
app.use("/artists", artistRouter);
