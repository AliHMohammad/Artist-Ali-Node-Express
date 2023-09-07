import { Artist } from "../../frontend/interface";
import fs from "fs/promises";

async function readArtists(): Promise<Artist[]> {
    const artistsAsJSON = await fs.readFile("artists.json");
    return JSON.parse(String(artistsAsJSON));
}

function writeArtists(newArtistFile: Artist[]): void {
    fs.writeFile("artists.json", JSON.stringify(newArtistFile));
}

export { readArtists, writeArtists };
