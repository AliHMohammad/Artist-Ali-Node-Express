import express, {Express, Request, Response} from "express";
import fs from "fs/promises";
import cors from "cors";

const app: Express = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`App is running on localhost:${port}`);
})

app.get("/", (request: Request, response: Response) => {
    response.send("Hello World");
})
