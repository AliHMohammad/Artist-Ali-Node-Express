const endpoint = "http://localhost:3333";
let artistsList;
async function getArtists() {
    artistsList = await (await fetch(`${endpoint}/artists`)).json();
}
export { getArtists, artistsList };
