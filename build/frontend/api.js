const endpoint = "http://localhost:3333";
let artistsList;
async function getArtists() {
    artistsList = await (await fetch(`${endpoint}/artists`)).json();
}
async function updateArtistIsFavorite(artist, newIsFavoriteValue) {
    const objekt = { isFavorite: newIsFavoriteValue };
    const objektAsJSON = JSON.stringify(objekt);
    const response = await fetch(`${endpoint}/artists/updateFavorite/${artist.id}`, {
        method: "PUT",
        body: objektAsJSON,
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        console.log("Updated Artist isFavorite successfully");
    }
    else {
        console.error("Something went wrong trying to update isFavorite");
    }
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
        const data = await response.json();
        console.log(data);
        //Evt opdater artistsList med response.body
    }
    else {
        console.error("Something went wrong trying to create new artist");
    }
}
export { getArtists, artistsList, updateArtistIsFavorite, createArtist };
