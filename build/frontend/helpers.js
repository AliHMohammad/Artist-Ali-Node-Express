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
}
export { openDialogWindow, closeDialogWindow, clearDialogWindow, initiateEventListeners };
