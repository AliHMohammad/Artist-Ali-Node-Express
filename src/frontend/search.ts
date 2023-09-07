import { artistsList } from "./api.js";
import { Artist } from "./interface.js";
import { showArtists } from "./displayArtists.js";

function searchArtists(): void {
    //Filters by search-value
    console.log("Searching...");
    const searchBar = document.querySelector("#search-bar") as HTMLInputElement;
    const filterBar = document.querySelector("#filter") as HTMLSelectElement;

    const searchValue = searchBar.value;
    const filterValue = filterBar.value;

    let searchedArtists: Artist[] = artistsList.filter((artist) => artist.name.toLowerCase().includes(searchValue.toLowerCase()));

    //If a filter is applied, filter the searchedArtists by the filter-value.
    //Then return the value and overwrite the old variable value.
    if (filterValue !== "none") {
        searchedArtists = filterArtists(searchedArtists);
    } 
    
    //Lastly, sort artists
    sortArtists(searchedArtists);
}

function filterArtists(artistsToFilter: Artist[]): Artist[] {
    //Filters by the filter-value
    const filterBar = document.querySelector("#filter") as HTMLSelectElement;
    const filterValue = filterBar.value;

    const filteredArtists: Artist[] = filter(artistsToFilter, filterValue);

    return filteredArtists;
}

function filter(artistsToFilter: Artist[], filterValue: string): Artist[] {
    

    if (filterValue === "female" || filterValue === "male" || filterValue === "other") {
        return artistsToFilter.filter((artist) => artist.gender.toLowerCase() === filterValue);
    } else {
        return artistsToFilter.filter((artist) => artist.isFavorite === true);
    }
}

function sortArtists(artistsToSort: Artist[]): void {
    //Sorts by the sort-value
    const sortBar = document.querySelector("#sort") as HTMLSelectElement;
    let sortValue = sortBar.value;
    let isToReverse = false;

    if (sortValue.includes("reverse")) {
        isToReverse = true;
        sortValue = sortValue.split("-")[0];
    }

    sort(artistsToSort, sortValue);

    if (isToReverse) {
        artistsToSort.reverse();
    }

    //The result-arr is then displayed in the html
    showArtists(artistsToSort);
}

function sort(artistsToSort: Artist[], sortValue: string) {

    if (sortValue === "name") {
        artistsToSort.sort((a: Artist, b: Artist) => a.name.localeCompare(b.name));
    } else {
        artistsToSort.sort((a: Artist, b: Artist) => a.activeSince - b.activeSince);
    }
}

export { searchArtists };