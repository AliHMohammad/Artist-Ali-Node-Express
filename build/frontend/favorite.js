import { updateArtistIsFavorite } from "./api.js";
function showFavoriteBtn(artist) {
    console.log(artist.id);
    if (artist.isFavorite) {
        document.querySelector(`#artist-${artist.id} .remove-from-favorites-btn`)?.classList.remove("hidden");
        document.querySelector(`#artist-${artist.id} .add-to-favorites-btn`)?.classList.add("hidden");
    }
    else {
        document.querySelector(`#artist-${artist.id} .remove-from-favorites-btn`)?.classList.add("hidden");
        document.querySelector(`#artist-${artist.id} .add-to-favorites-btn`)?.classList.remove("hidden");
    }
}
async function addArtistToFavorites(artist, newIsFavoriteValue) {
    console.log(artist);
    updateFavoriteBtn(artist.id, newIsFavoriteValue);
    //Send en PUT afsted. Ved PUT success, så opdater artistList med den nye opdateret UDEN AT KØRE DEN GENNEM searchArtists()
    await updateArtistIsFavorite(artist, newIsFavoriteValue);
}
async function removeArtistFromFavorites(artist, newIsFavoriteValue) {
    console.log(artist);
    updateFavoriteBtn(artist.id, newIsFavoriteValue);
    //Send en PUT afsted. Ved PUT success, så opdater artistList med den nye opdateret UDEN AT KØRE DEN GENNEM searchArtists()
    await updateArtistIsFavorite(artist, newIsFavoriteValue);
}
function updateFavoriteBtn(artistID, newIsFavoriteValue) {
    if (newIsFavoriteValue === false) {
        document.querySelector(`#artist-${artistID} .add-to-favorites-btn`)?.classList.remove("hidden");
        document.querySelector(`#artist-${artistID} .remove-from-favorites-btn`)?.classList.add("hidden");
    }
    else if (newIsFavoriteValue === true) {
        document.querySelector(`#artist-${artistID} .add-to-favorites-btn`)?.classList.add("hidden");
        document.querySelector(`#artist-${artistID} .remove-from-favorites-btn`)?.classList.remove("hidden");
    }
}
export { showFavoriteBtn, addArtistToFavorites, removeArtistFromFavorites };