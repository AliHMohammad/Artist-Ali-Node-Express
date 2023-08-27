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

app.get("/artists", async (request: Request, response: Response) => {
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists: Artist[] = JSON.parse(String(artistsAsJSON));
    console.log(artists);
    response.send(artists);
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

app.delete("/artists/:id", async (request: Request, response: Response) => {
    const id = Number(request.params.id);
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists: Artist[] = JSON.parse(String(artistsAsJSON));

    const index = artists.findIndex((artist) => artist.id === id)
    artists.splice(index, 1);

    fs.writeFile("artists.json", JSON.stringify(artists));
    response.json(artists);
})

app.put("/artists/:id", async (request: Request, response: Response) => {
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists: Artist[] = JSON.parse(String(artistsAsJSON));
    const updatedArtist: Artist = request.body;

    const artistToUpdate = artists.find(artist => artist.id === updatedArtist.id);

    console.log(updatedArtist);
    
    if (artistToUpdate) {
        artistToUpdate.name = updatedArtist.name;
        artistToUpdate.gender = updatedArtist.gender;
        artistToUpdate.birthdate = updatedArtist.birthdate;
        artistToUpdate.activeSince = updatedArtist.activeSince;
        artistToUpdate.genres = updatedArtist.genres;
        artistToUpdate.labels = updatedArtist.labels;
        artistToUpdate.website = updatedArtist.website;
        artistToUpdate.image = updatedArtist.image;
        artistToUpdate.shortDescription = updatedArtist.shortDescription;
        artistToUpdate.isFavorite = updatedArtist.isFavorite;
    }

    fs.writeFile("artists.json", JSON.stringify(artists));
    response.json(artists);
})