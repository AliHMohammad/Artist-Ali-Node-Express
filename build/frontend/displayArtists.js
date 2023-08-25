import { clearDialogWindow, openDialogWindow } from "./helpers.js";
function showArtists(artists) {
    document.querySelector("#artists-output").innerHTML = "";
    for (const artist of artists) {
        showArtist(artist);
    }
}
function showArtist(artist) {
    const html = /*html*/ `
        <article class="artist-grid-item">
            <p class="center artist-grid-item-name">${artist.name}</p>
            <img class="center artist-grid-item-image" src="${artist.image}">
            <button class="view-details-btn">View details</button>
            <button class="add-to-favorites-btn float-right">Add to favorites</button>
            <button class="remove-from-favorites-btn float-right">Remove from favorites</button>
        </article>
    `;
    document.querySelector("#artists-output")?.insertAdjacentHTML("beforeend", html);
    document.querySelector("#artists-output .artist-grid-item:last-child .view-details-btn")?.addEventListener("click", () => showDetailsArtist(artist));
    document.querySelector("#artists-output .artist-grid-item:last-child .add-to-favorites-btn")?.addEventListener("click", () => addArtistToFavorites(artist));
    document.querySelector("#artists-output .artist-grid-item:last-child .add-to-favorites-btn")?.addEventListener("click", () => removeArtistFromFavorites(artist));
}
function showDetailsArtist(artist) {
    console.log("Show details");
    clearDialogWindow();
    const html = /*html*/ `
        <article class="artist-details-container">

            <div class="artist-details-btns">
                <button class="artist-details-edit-artist">Edit artist</button>
                <button class="artist-details-delete-artist">Delete artist</button>
            </div>

            <div class="artist-details-image-container">
                <img class="artist-details-image" src="${artist.image}">
            </div>

            <div class="artist-details-information">
                <p class="bold center">${artist.name}</p>
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
    openDialogWindow();
}
function addArtistToFavorites(artist) {
}
function removeArtistFromFavorites(artist) {
}
export { showArtists };
