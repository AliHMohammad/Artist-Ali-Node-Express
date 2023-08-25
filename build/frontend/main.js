import { getArtists } from "./api.js";
import { searchArtists } from "./search.js";
import { initiateEventListeners } from "./helpers.js";
window.addEventListener("load", main);
async function main(event) {
    console.log("App is running");
    await getArtists();
    searchArtists();
    initiateEventListeners();
}
