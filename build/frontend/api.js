const endpoint = "http://localhost:3333";
let artistsList;
async function getArtists() {
    artistsList = await (await fetch(`${endpoint}/artists`)).json();
}
async function getArtist(artistID) {
    return await (await fetch(`${endpoint}/artists/${artistID}`)).json();
}
async function createArtist(newArtist) {
    const newArtistAsJSON = JSON.stringify(newArtist);
    const response = await fetch(`${endpoint}/artists`, {
        method: "POST",
        body: newArtistAsJSON,
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        console.log("New artist created successfully");
        artistsList = await response.json();
    }
    else {
        console.error("Something went wrong trying to create new artist");
    }
}
async function deleteArtist(artist) {
    const response = await fetch(`${endpoint}/artists/${artist.id}`, {
        method: "DELETE"
    });
    if (response.ok) {
        console.log("New artist deleted successfully");
        artistsList = await response.json();
    }
    else {
        console.error("Something went wrong trying to delete artist");
    }
}
async function updateArtist(updatedArtist) {
    const updatedArtistAsJSON = JSON.stringify(updatedArtist);
    const response = await fetch(`${endpoint}/artists/${updatedArtist.id}`, {
        method: "PUT",
        body: updatedArtistAsJSON,
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        console.log("New artist updated successfully");
        artistsList = await response.json();
    }
    else {
        console.error("Something went wrong trying to update artist");
    }
}
export { getArtists, getArtist, artistsList, createArtist, deleteArtist, updateArtist };
