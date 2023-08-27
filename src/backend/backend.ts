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
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists: Artist[] = JSON.parse(String(artistsAsJSON));
    console.log(artists);
    response.send(artists);
})

app.put("/artists/updateFavorite/:id", async (request: Request, response: Response) => {
    const id = Number(request.params.id);
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists: Artist[] = JSON.parse(String(artistsAsJSON));

    const artistToUpdate = artists.find(artist => artist.id === id);

    const newFavoriteValue = request.body;
    console.log(newFavoriteValue.isFavorite);
    
    if (artistToUpdate) {
        artistToUpdate.isFavorite = newFavoriteValue.isFavorite;
    }

    fs.writeFile("artists.json", JSON.stringify(artists));
    response.json(artists);
})


app.post("/artists", async (request: Request, response: Response) => {
    const newArtist: Artist = request.body;
    console.log(newArtist);
    newArtist.id = new Date().getTime();

    const artistsAsJSON = await fs.readFile("artists.json");
    const artists: Artist[] = JSON.parse(String(artistsAsJSON));

    artists.push(newArtist);

    fs.writeFile("artists.json", JSON.stringify(artists));
    response.json(artists);
})