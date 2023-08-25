import { artistsList } from "./api.js";
import { Artist } from "./interface.js";
import { showArtists } from "./displayArtists.js";

function searchArtists(): void {
    console.log("Searching...");
    const searchBar = document.querySelector("#search-bar") as HTMLInputElement;
    const filterBar = document.querySelector("#filter") as HTMLSelectElement;
    
    const searchValue = searchBar.value;
    const filterValue = filterBar.value;
    
    const searchedArtists: Artist[] = artistsList.filter((artist) => artist.name.toLowerCase().includes(searchValue.toLowerCase()));
    
    if (filterValue !== "none") {
        filterArtists(searchedArtists)
    } else {
        sortArtists(searchedArtists)
    }
}

function filterArtists(artistsToFilter: Artist[]) {
    const filterBar = document.querySelector("#filter") as HTMLSelectElement;
    const filterValue = filterBar.value;

    const filteredArtists: Artist[] = filter(artistsToFilter, filterValue);

    sortArtists(filteredArtists);
}

function filter(artistsToFilter: Artist[], filterValue: string): Artist[] {
    

    if (filterValue === "female" || filterValue === "male" || filterValue === "other") {
        return artistsToFilter.filter((artist) => artist.gender.toLowerCase() === filterValue);
    } else {
        return artistsToFilter.filter((artist) => artist.isFavorite === true);
    }
}

function sortArtists(artistsToSort: Artist[]) {
    const sortBar = document.querySelector("#sort") as HTMLSelectElement;
    let sortValue = sortBar.value;
    let isToReverse = false;

    if (sortValue.includes("reverse")) {
        isToReverse = true;
        sortValue = sortValue.split("-")[0];
    }

    let sortedArtists: Artist[] = sort(artistsToSort, sortValue);

    if (isToReverse) {
        sortedArtists.reverse();
    }

    showArtists(sortedArtists);
}

function sort(artistsToSort: Artist[], sortValue: string): Artist[] {

    if (sortValue === "name") {
        return artistsToSort.toSorted((a, b) => a.name.localeCompare(b.name))
    } else {
        return artistsToSort.toSorted((a, b) => a.activeSince - b.activeSince);
    }
}

export { searchArtists };