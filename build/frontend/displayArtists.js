import { clearDialogWindow, openDialogWindow } from "./helpers.js";
import { addArtistToFavorites, removeArtistFromFavorites, showFavoriteBtn } from "./favorite.js";
import { deleteArtist, getArtist } from "./api.js";
import { displayUpdateArtistForm } from "./updateArtist.js";
function showArtists(artists) {
    document.querySelector("#artists-output").innerHTML = "";
    //Loop through artists array.
    for (const artist of artists) {
        showArtist(artist);
    }
}
function showArtist(artist) {
    //Create a grid-item for artist in html
    const html = /*html*/ `
        <article class="artist-grid-item" id="artist-${artist.id}">
            <p class="center artist-grid-item-name">${artist.name}</p>
            <img class="center artist-grid-item-image" src="${artist.image}">
            <button class="view-details-btn">View details</button>
            <button class="add-to-favorites-btn float-right">Add to favorites</button>
            <button class="remove-from-favorites-btn float-right">Remove from favorites</button>
        </article>
    `;
    document.querySelector("#artists-output")?.insertAdjacentHTML("beforeend", html);
    //Displays the correct favorite button in accordance with the artist.isFavorite property.
    //If artist.isFavorite is false, then "Add to favorites"-button is displayed and vice versa.
    showFavoriteBtn(artist);
    document.querySelector(`#artist-${artist.id} .view-details-btn`)?.addEventListener("click", () => showDetailsArtist(artist.id));
    document.querySelector(`#artist-${artist.id} .add-to-favorites-btn`)?.addEventListener("click", () => addArtistToFavorites(artist, true));
    document.querySelector(`#artist-${artist.id} .remove-from-favorites-btn`)?.addEventListener("click", () => removeArtistFromFavorites(artist, false));
}
async function showDetailsArtist(artistID) {
    //Fetch artist based on the artistID recieved.
    //The now fetched artist is used to populate the detailed view dialog.
    const artist = await getArtist(artistID);
    console.log(artist);
    clearDialogWindow();
    const html = /*html*/ `
        <article class="artist-details-container">

            <div class="artist-details-btns">
                <button class="artist-details-update-artist">Update artist</button>
                <button class="artist-details-delete-artist">Delete artist</button>
            </div>

            <div class="artist-details-image-container">
                <img class="artist-details-image" src="${artist.image}">
            </div>

            <div class="artist-details-information">
                <p class="bold center">${artist.name}</p>
                <p>Gender: ${artist.gender}</p>
                <p>Born ${artist.birthdate}</p>
                <p>Active since ${artist.activeSince}</p>
                <p>Genres: ${artist.genres.join(", ")}</p>
                <p>Labels: ${artist.labels.join(" & ")}</p>
                <p>Description: ${artist.shortDescription}</p>
                <a href="${artist.website}">Website</a>
            </div>

        </article>
    `;
    document.querySelector("#dialog-display")?.insertAdjacentHTML("beforeend", html);
    //Send artist to DELETE-request when clicking on "delete artist"-button
    document.querySelector(".artist-details-delete-artist")?.addEventListener("click", async () => await deleteArtist(artist));
    document.querySelector(".artist-details-update-artist")?.addEventListener("click", () => displayUpdateArtistForm(artist));
    openDialogWindow();
}
export { showArtists };
