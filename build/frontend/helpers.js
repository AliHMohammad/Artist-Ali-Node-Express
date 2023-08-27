import { displayCreateArtistForm } from "./createArtist.js";
import { searchArtists } from "./search.js";
function openDialogWindow() {
    const dialog = document.querySelector("#dialog-window");
    dialog.showModal();
}
function closeDialogWindow() {
    const dialog = document.querySelector("#dialog-window");
    dialog.close();
}
function clearDialogWindow() {
    document.querySelector("#dialog-display").innerHTML = "";
}
function initiateEventListeners() {
    document.querySelector("#dialog-close-btn")?.addEventListener("click", closeDialogWindow);
    document.querySelector("#search-bar")?.addEventListener("input", searchArtists);
    document.querySelector("#filter")?.addEventListener("change", searchArtists);
    document.querySelector("#sort")?.addEventListener("change", searchArtists);
    document.querySelector("#create-artist-btn")?.addEventListener("click", displayCreateArtistForm);
}
export { openDialogWindow, closeDialogWindow, clearDialogWindow, initiateEventListeners };
