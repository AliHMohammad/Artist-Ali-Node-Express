import { displayCreateArtistForm } from "./createArtist.js";
import { searchArtists } from "./search.js";


function openDialogWindow(): void {
    const dialog = document.querySelector("#dialog-window") as HTMLDialogElement;
    dialog.showModal();
}

function closeDialogWindow(): void {
    const dialog = document.querySelector("#dialog-window") as HTMLDialogElement;
    dialog.close();
}

function clearDialogWindow(): void {
    document.querySelector("#dialog-display")!.innerHTML="";
}



function initiateEventListeners(): void {
    document.querySelector("#dialog-close-btn")?.addEventListener("click", closeDialogWindow);
    document.querySelector("#search-bar")?.addEventListener("input", searchArtists);
    document.querySelector("#filter")?.addEventListener("change", searchArtists);
    document.querySelector("#sort")?.addEventListener("change", searchArtists);
    document.querySelector("#create-artist-btn")?.addEventListener("click", displayCreateArtistForm);
}

export {openDialogWindow, closeDialogWindow, clearDialogWindow, initiateEventListeners}