import { getArtists } from "./api.js";
import { searchArtists } from "./search.js";
import { initiateEventListeners } from "./helpers.js";

window.addEventListener("load", main);

async function main(event: Event): Promise<void> {
    console.log("App is running");
    //Fetches artists
    await getArtists();
    //Runs artists through different filters.
    //First filtering by search - value, then filter - value, lastly sorting by sort - value
    searchArtists();
    initiateEventListeners();
}
