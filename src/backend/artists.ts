import express, { Request, Response } from "express";
import fs from "fs/promises";
import { Artist } from "../frontend/interface";

const router = express.Router();

router.get("/", async (request: Request, response: Response) => {
    //Get all artists from artists.json
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists: Artist[] = JSON.parse(String(artistsAsJSON));
    console.log(artists);
    response.send(artists);
});

router.post("/", async (request: Request, response: Response) => {
    //Create a artist in artists.json
    const newArtist: Artist = request.body;
    console.log(newArtist);
    newArtist.id = new Date().getTime();

    const artistsAsJSON = await fs.readFile("artists.json");
    const artists: Artist[] = JSON.parse(String(artistsAsJSON));

    artists.push(newArtist);

    fs.writeFile("artists.json", JSON.stringify(artists));
    response.json(artists);
});

router.get("/:id", async (request: Request, response: Response) => {
    //Get a single artist by id from artists.json
    const id = Number(request.params.id);
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists: Artist[] = JSON.parse(String(artistsAsJSON));

    const artist = artists.find((artist) => artist.id === id);

    response.send(artist);
});

router.delete("/:id", async (request: Request, response: Response) => {
    //Delete a single artist by id from artists.json
    const id = Number(request.params.id);
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists: Artist[] = JSON.parse(String(artistsAsJSON));

    const index = artists.findIndex((artist) => artist.id === id);
    artists.splice(index, 1);

    fs.writeFile("artists.json", JSON.stringify(artists));
    response.json(artists);
});

router.put("/:id", async (request: Request, response: Response) => {
    //Update a single artist by id from artists.json
    const artistsAsJSON = await fs.readFile("artists.json");
    const artists: Artist[] = JSON.parse(String(artistsAsJSON));
    const updatedArtist: Artist = request.body;

    const artistToUpdate = artists.find((artist) => artist.id === updatedArtist.id);

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
});


export {router}