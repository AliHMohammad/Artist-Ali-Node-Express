import express, {Express} from "express";
import cors from "cors";
import { router as artistRouter } from "./artists.js";

const app: Express = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`App is running on localhost:${port}`);
})

app.use("/artists", artistRouter)

