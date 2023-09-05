import express from "express";
import fs from "fs/promises";
const router = express.Router();
router.get("/", async (request, response) => {
    //Get all artists from artists.json
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists = JSON.parse(String(artistsAsJSON));
    console.log(artists);
    response.status(200).json(artists);
});
router.post("/", async (request, response) => {
    //Create a artist in artists.json
    const newArtist = request.body;
    console.log(newArtist);
    newArtist.id = new Date().getTime();
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists = JSON.parse(String(artistsAsJSON));
    const alreadyExists = artists.find(artist => artist.name.toLowerCase() === newArtist.name.toLowerCase());
    //Hvis artist allerede findes, så send 404. Ellers, push newArtist, opdater artists.json og send 200
    if (alreadyExists) {
        response.status(404).json({ error: "Artist trying to create already exists in database" });
    }
    else {
        artists.push(newArtist);
        fs.writeFile("artists.json", JSON.stringify(artists));
        response.status(200).json(artists);
    }
});
router.get("/:id", async (request, response) => {
    //Get a single artist by id from artists.json
    const id = Number(request.params.id);
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists = JSON.parse(String(artistsAsJSON));
    const artist = artists.find((artist) => artist.id === id);
    //Hvis du kan finde en artist ud fra given id, så send 200. Ellers, send 400
    if (artist) {
        response.status(200).json(artist);
    }
    else {
        response.status(404).json({ error: "Could not get specific artist from database" });
    }
});
router.delete("/:id", async (request, response) => {
    //Delete a single artist by id from artists.json
    const id = Number(request.params.id);
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists = JSON.parse(String(artistsAsJSON));
    const index = artists.findIndex((artist) => artist.id === id);
    //Hvis du ikke kan finde noget, der har en passende id, så send 404.
    //Ellers, fjern artist på index-plads og send 200
    if (index === -1) {
        response.status(404).json({ error: "Could not delete specified artist from database" });
    }
    else {
        artists.splice(index, 1);
        fs.writeFile("artists.json", JSON.stringify(artists));
        response.status(200).json(artists);
    }
});
router.put("/:id", async (request, response) => {
    //Update a single artist by id from artists.json
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists = JSON.parse(String(artistsAsJSON));
    const updatedArtist = request.body;
    const artistToUpdate = artists.find((artist) => artist.id === updatedArtist.id);
    console.log(updatedArtist);
    //Hvis artistToUpdate findes, så opdater oplysninger og send 200
    //Ellers, send 404 og giv en error
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
        fs.writeFile("artists.json", JSON.stringify(artists));
        response.status(200).json(artists);
    }
    else {
        response.status(404).json({ error: "Could not find artist from database" });
    }
});
export { router };
