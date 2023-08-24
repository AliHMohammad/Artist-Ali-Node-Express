import { getArtists, artistsList } from "./api.js";
import { showArtists } from "./displayArtists.js";
import { initiateEventListeners } from "./helpers.js";
window.addEventListener("load", main);
async function main(event) {
    console.log("App is running");
    await getArtists();
    showArtists(artistsList);
    initiateEventListeners();
}
