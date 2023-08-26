import { Artist } from "./interface.js"

const endpoint = "http://localhost:3333";

let artistsList: Artist[];

async function getArtists(): Promise<void> {
    artistsList = await(await fetch(`${endpoint}/artists`)).json();
}

async function updateArtistIsFavorite(artist: Artist, newIsFavoriteValue: boolean) {
    const objekt = { isFavorite: newIsFavoriteValue }
    const objektAsJSON = JSON.stringify(objekt);
    const promise = await fetch(`${endpoint}/artists/updateFavorite/${artist.id}`, {
        method: "PUT",
        body: objektAsJSON,
        headers: { "Content-Type": "application/json" },
    });

    if (promise.ok) {
        console.log("Updated Artist isFavorite successfully");
    } else {
        console.error("Something went wrong trying to update isFavorite");
    }
}




export {getArtists, artistsList, updateArtistIsFavorite}