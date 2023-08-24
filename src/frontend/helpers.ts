
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
}

export {openDialogWindow, closeDialogWindow, clearDialogWindow, initiateEventListeners}