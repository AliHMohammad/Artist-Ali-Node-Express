import { Artist } from "./interface.js"

const endpoint = "http://localhost:3333";

let artistsList: Artist[];

async function getArtists(): Promise<void> {
    artistsList = await(await fetch(`${endpoint}/artists`)).json();
}

async function updateArtistIsFavorite(artist: Artist, newIsFavoriteValue: boolean): Promise<void> {
    const objekt = { isFavorite: newIsFavoriteValue };
    const objektAsJSON = JSON.stringify(objekt);
    const response = await fetch(`${endpoint}/artists/updateFavorite/${artist.id}`, {
        method: "PUT",
        body: objektAsJSON,
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        console.log("Updated Artist isFavorite successfully");
    } else {
        console.error("Something went wrong trying to update isFavorite");
    }
}

async function createArtist(newArtist: Artist): Promise<void> {
    const newArtistAsJSON = JSON.stringify(newArtist);
    const response = await fetch(`${endpoint}/artists`, {
        method: "POST",
        body: newArtistAsJSON,
        headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
        console.log("New artist created successfully");
        const data = await response.json()
        console.log(data);
        //Evt opdater artistsList med response.json()
    } else {
        console.error("Something went wrong trying to create new artist");
    }
}

async function deleteArtist(artist: Artist): Promise<void> {
    const response = await fetch(`${endpoint}/artists/${artist.id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        console.log("New artist deleted successfully");
        const data = await response.json();
        console.log(data);
        //Evt opdater artistsList med response.json()
    } else {
        console.error("Something went wrong trying to delete artist");
    }
}



export {getArtists, artistsList, updateArtistIsFavorite, createArtist, deleteArtist}