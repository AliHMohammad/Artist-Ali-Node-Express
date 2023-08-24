import { Artist } from "./interface.js"

const endpoint = "http://localhost:3333";

let artistsList: Artist[];

async function getArtists(): Promise<void> {
    artistsList = await(await fetch(`${endpoint}/artists`)).json();
}






export {getArtists, artistsList}