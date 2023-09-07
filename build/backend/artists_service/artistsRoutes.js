import express from "express";
import { createArtist, deleteArtist, getAllArtists, getSingleArtist, updateArtist } from "./artistsController.js";
const router = express.Router();
//Get all artists from artists.json
router.get("/", getAllArtists);
//Get a single artist by id from artists.json
router.get("/:id", getSingleArtist);
//Create a artist in artists.json
router.post("/", createArtist);
//Delete a single artist by id from artists.json
router.delete("/:id", deleteArtist);
//Update a single artist by id from artists.json
router.put("/:id", updateArtist);
export { router };
