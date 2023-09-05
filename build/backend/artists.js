import express from "express";
import { readArtists, writeArtists } from "./backendHelpers.js";
const router = express.Router();
router.get("/", async (request, response) => {
    //Get all artists from artists.json
    const artists = await readArtists();
    console.log(artists);
    response.status(200).json(artists);
});
router.get("/:id", async (request, response) => {
    //Get a single artist by id from artists.json
    const id = Number(request.params.id);
    const artists = await readArtists();
    const artist = artists.find((artist) => artist.id === id);
    //If arist is found, send 200. Else, send 404
    if (artist) {
        response.status(200).json(artist);
    }
    else {
        response.status(404).json({ error: "Could not get specific artist from database" });
    }
});
router.post("/", async (request, response) => {
    //Create a artist in artists.json
    const newArtist = request.body;
    console.log(newArtist);
    newArtist.id = new Date().getTime();
    const artists = await readArtists();
    const alreadyExists = artists.find((artist) => artist.name.toLowerCase() === newArtist.name.toLowerCase());
    //If artist's name already exists in the database, then send 400. Else, Push the newArtist, update local JSON-file and send 201
    if (alreadyExists) {
        response.status(400).json({ error: "Artist trying to create already exists in database" });
    }
    else {
        artists.push(newArtist);
        writeArtists(artists);
        response.status(201).json(artists);
    }
});
router.delete("/:id", async (request, response) => {
    //Delete a single artist by id from artists.json
    const id = Number(request.params.id);
    const artists = await readArtists();
    const index = artists.findIndex((artist) => artist.id === id);
    //If firstIndex could not find a matching id, then send 404
    //Else, remove the artist on index-place and send 200
    if (index === -1) {
        response.status(404).json({ error: "Could not delete specified artist from database" });
    }
    else {
        artists.splice(index, 1);
        writeArtists(artists);
        response.status(200).json(artists);
    }
});
router.put("/:id", async (request, response) => {
    //Update a single artist by id from artists.json
    const artists = await readArtists();
    const updatedArtist = request.body;
    let artistToUpdate = artists.find((artist) => artist.id === updatedArtist.id);
    console.log(updatedArtist);
    //If artistToUpdate exists, update its properties and send 200
    //Else, send 404
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
        writeArtists(artists);
        response.status(200).json(artists);
    }
    else {
        response.status(404).json({ error: "Could not find artist from database" });
    }
});
export { router };
