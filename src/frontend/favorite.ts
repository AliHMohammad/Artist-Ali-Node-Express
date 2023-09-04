import { updateArtist } from "./api.js";
import { Artist } from "./interface.js";


function showFavoriteBtn(artist: Artist): void {
    //Displays the correct favorite button on DOM
    console.log(artist.id);
    
    if (artist.isFavorite) {
        document.querySelector(`#artist-${artist.id} .remove-from-favorites-btn`)?.classList.remove("hidden");
        document.querySelector(`#artist-${artist.id} .add-to-favorites-btn`)?.classList.add("hidden");
    } else {
        document.querySelector(`#artist-${artist.id} .remove-from-favorites-btn`)?.classList.add("hidden");
        document.querySelector(`#artist-${artist.id} .add-to-favorites-btn`)?.classList.remove("hidden");
    }
}

async function addArtistToFavorites(artist: Artist, newIsFavoriteValue: boolean): Promise<void> {
    //Adds the artist to favorites by updating the isFavorite property.
    //We send a PUT-request with the artist.id to apply the change in the database
    console.log(artist);
    updateFavoriteBtn(artist.id, newIsFavoriteValue);

    artist.isFavorite = newIsFavoriteValue;
    await updateArtist(artist);
}

async function removeArtistFromFavorites(artist: Artist, newIsFavoriteValue: boolean): Promise<void> {
    //Removes the artist from favorites by updating the isFavorite property.
    //We send a PUT-request with the artist.id to apply the change in the database
    console.log(artist);
    updateFavoriteBtn(artist.id, newIsFavoriteValue);

    artist.isFavorite = newIsFavoriteValue;
    await updateArtist(artist);
}

function updateFavoriteBtn(artistID: number | undefined, newIsFavoriteValue: boolean): void {
    //Displays the correct favorite button on DOM after a click has been applied
    if (newIsFavoriteValue === false) {
        document.querySelector(`#artist-${artistID} .add-to-favorites-btn`)?.classList.remove("hidden");
        document.querySelector(`#artist-${artistID} .remove-from-favorites-btn`)?.classList.add("hidden");
    } else if (newIsFavoriteValue === true) {
        document.querySelector(`#artist-${artistID} .add-to-favorites-btn`)?.classList.add("hidden");
        document.querySelector(`#artist-${artistID} .remove-from-favorites-btn`)?.classList.remove("hidden");
    }
}

export {showFavoriteBtn, addArtistToFavorites, removeArtistFromFavorites}