import { getArtists } from "./api.js";
import { searchArtists } from "./search.js";
import { initiateEventListeners } from "./helpers.js";
window.addEventListener("load", main);
async function main(event) {
    console.log("App is running");
    //Fetches artists
    await getArtists();
    //Runs artists through different filters.
    //First filtering by search - value, then filter - value, lastly sorting by sort - value
    //After filtering, display artists in the DOM
    searchArtists();
    initiateEventListeners();
}
