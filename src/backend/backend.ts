import express, {Express, Request, Response} from "express";
import fs from "fs/promises";
import cors from "cors";
import { Artist } from "../frontend/interface";

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

app.get("/artists", async (request: Request, response: Response) => {
    console.log("I am in");
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists: Artist[] = JSON.parse(String(artistsAsJSON));
    console.log(artists);
    response.send(artists);
})
