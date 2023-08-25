import { artistsList } from "./api.js";
import { showArtists } from "./displayArtists.js";
function searchArtists() {
    console.log("Searching...");
    const searchBar = document.querySelector("#search-bar");
    const filterBar = document.querySelector("#filter");
    const searchValue = searchBar.value;
    const filterValue = filterBar.value;
    const searchedArtists = artistsList.filter((artist) => artist.name.toLowerCase().includes(searchValue.toLowerCase()));
    if (filterValue !== "none") {
        filterArtists(searchedArtists);
    }
    else {
        sortArtists(searchedArtists);
    }
}
function filterArtists(artistsToFilter) {
    const filterBar = document.querySelector("#filter");
    const filterValue = filterBar.value;
    const filteredArtists = filter(artistsToFilter, filterValue);
    sortArtists(filteredArtists);
}
function filter(artistsToFilter, filterValue) {
    if (filterValue === "female" || filterValue === "male" || filterValue === "other") {
        return artistsToFilter.filter((artist) => artist.gender.toLowerCase() === filterValue);
    }
    else {
        return artistsToFilter.filter((artist) => artist.isFavorite === true);
    }
}
function sortArtists(artistsToSort) {
    const sortBar = document.querySelector("#sort");
    let sortValue = sortBar.value;
    let isToReverse = false;
    if (sortValue.includes("reverse")) {
        isToReverse = true;
        sortValue = sortValue.split("-")[0];
    }
    let sortedArtists = sort(artistsToSort, sortValue);
    if (isToReverse) {
        sortedArtists.reverse();
    }
    showArtists(sortedArtists);
}
function sort(artistsToSort, sortValue) {
    if (sortValue === "name") {
        return artistsToSort.toSorted((a, b) => a.name.localeCompare(b.name));
    }
    else {
        return artistsToSort.toSorted((a, b) => a.activeSince - b.activeSince);
    }
}
export { searchArtists };
