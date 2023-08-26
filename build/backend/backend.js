import express from "express";
import fs from "fs/promises";
import cors from "cors";
const app = express();
const port = 3333;
app.use(express.json());
app.use(cors());
app.listen(port, () => {
    console.log(`App is running on localhost:${port}`);
});
app.get("/", (request, response) => {
    response.send("Hello World");
});
app.get("/artists", async (request, response) => {
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists = JSON.parse(String(artistsAsJSON));
    console.log(artists);
    response.send(artists);
});
app.put("/artists/updateFavorite/:id", async (request, response) => {
    const id = Number(request.params.id);
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists = JSON.parse(String(artistsAsJSON));
    const artistToUpdate = artists.find(artist => artist.id === id);
    const newFavoriteValue = request.body;
    console.log(newFavoriteValue.isFavorite);
    if (artistToUpdate) {
        artistToUpdate.isFavorite = newFavoriteValue.isFavorite;
    }
    fs.writeFile("artists.json", JSON.stringify(artists));
    response.json(artists);
});
