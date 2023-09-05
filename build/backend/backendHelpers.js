import fs from "fs/promises";
async function readArtists() {
    const artistsAsJSON = await fs.readFile("artists.json");
    return JSON.parse(String(artistsAsJSON));
}
function writeArtists(newArtistFile) {
    fs.writeFile("artists.json", JSON.stringify(newArtistFile));
}
export { readArtists, writeArtists };
