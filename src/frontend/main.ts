import { getArtists, artistsList} from "./api.js";
import { Artist } from "./interface.js";
import { showArtists } from "./displayArtists.js";

window.addEventListener("load", main);


async function main(event: Event): Promise<void> {
    console.log("App is running");
    await getArtists();
    showArtists(artistsList)
}

