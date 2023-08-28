import { Artist } from "./interface.js"

const endpoint = "http://localhost:3333";

let artistsList: Artist[];

async function getArtists(): Promise<void> {
    artistsList = await(await fetch(`${endpoint}/artists`)).json();
}

async function getArtist(artistID: number | undefined): Promise<Artist> {
    return await (await fetch(`${endpoint}/artists/${artistID}`)).json()
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

async function updateArtist(updatedArtist: Artist): Promise<void> {
    const updatedArtistAsJSON = JSON.stringify(updatedArtist);
    const response = await fetch(`${endpoint}/artists/${updatedArtist.id}`, {
        method: "PUT",
        body: updatedArtistAsJSON,
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        console.log("New artist updated successfully");
        const data = await response.json();
        console.log(data);
        //Evt opdater artistsList med response.json()
    } else {
        console.error("Something went wrong trying to update artist");
    }
}


export {getArtists, getArtist, artistsList, createArtist, deleteArtist, updateArtist}