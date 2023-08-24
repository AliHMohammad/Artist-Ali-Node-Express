
import { Artist } from "./interface.js";

function showArtists(artists: Artist[]) {

    for (const artist of artists) {
        showArtist(artist);
    }
}

function showArtist(artist: Artist) {
    const html = /*html*/ `
        <article class="artist-grid-item">
            <p class="center artist-grid-item-name">${artist.name}</p>
            <img class="center artist-grid-item-image" src="${artist.image}">
            <button class="view-details-btn">View details</button>
            <button class="add-to-favorites-btn">Add to favorites</button>
            <button class="remove-from-favorites-btn">Remove from favorites</button>
        </article>
    `;

    document.querySelector("#artists-output")?.insertAdjacentHTML("beforeend", html);

    document.querySelector("#artists-output .artist-grid-item:last-child .view-details-btn")?.addEventListener("click", () => showDetailsArtist(artist));

    document.querySelector("#artists-output .artist-grid-item:last-child .add-to-favorites-btn")?.addEventListener("click", () => addArtistToFavorites(artist));
    document.querySelector("#artists-output .artist-grid-item:last-child .add-to-favorites-btn")?.addEventListener("click", () => removeArtistFromFavorites(artist));
}

function showDetailsArtist(artist: Artist) {
    
}

function addArtistToFavorites(artist: Artist) {

}

function removeArtistFromFavorites(artist: Artist) {
    
}


export {showArtists}
