import { updateArtist } from "./api.js";
import { clearDialogWindow } from "./helpers.js";
import { Artist } from "./interface.js";

let artistID: number | undefined;


function displayUpdateArtistForm(artist: Artist): void {
    clearDialogWindow()
    artistID = artist.id;
    const html = /*html*/ `
        <h2 class="center">Update Artist</h2>
        <form id="update-artist-form">

            <div id="update-artist-form-container">
                <label for="artist-name">Name:</label>
                <input type="text" name="artist-name" id="artist-name" value="${artist.name}" required>

                <label for="gender">Gender:</label>
                <div class="gender-radio-div">
                    <label for="male">Male:</label>
                    <input type="radio" name="gender" value="Male" id="male" required>
                    <label for="female">Female:</label>
                    <input type="radio" name="gender" value="Female" id="female">
                    <label for="other">Other:</label>
                    <input type="radio" name="gender" value="Other" id="other">
                </div>

                <label for="birthdate">Birthdate:</label>
                <input type="text" name="birthdate" id="birthdate" placeholder="DD/MM/YYYY" value="${artist.birthdate}" required>

                <label for="active-since">Active since:</label>
                <input type="number" name="active-since" id="active-since" placeholder="YYYY" value="${artist.activeSince}" required>

                <label for="genres">Genres:</label>
                <input type="text" name="genres" id="genres" placeholder="Seperate with ', '" value="${artist.genres.join(", ")}" required>

                <label for="labels">Labels:</label>
                <input type="text" name="labels" id="labels" placeholder="Seperate with ', '" value="${artist.labels.join(", ")}" required>

                <label for="website">Website:</label>
                <input type="url" name="website" id="website" value="${artist.website}" required>

                <label for="image">Image:</label>
                <input type="url" name="image" id="image" value="${artist.image}" required>

                <label for="add-to-favorites">Add to favorites?</label>
                <div class="favorites-radio-div">
                    <label for="yes">Yes:</label>
                    <input type="radio" name="favorite" value="true" id="yes" required>
                    <label for="no">No:</label>
                    <input type="radio" name="favorite" value="" id="no">
                </div>

                <label for="description">Description:</label>
                <textarea name="description" id="description" cols="10" rows="6" required>${artist.shortDescription}</textarea>
            </div>
            
            <div class="center form-submit-btn">
                <input class="justify-center" type="submit" value="Submit">
            </div>

        </form>
    `;

    document.querySelector("#dialog-display")?.insertAdjacentHTML("beforeend", html);
    radioCheckCorrectGender(artist.gender)
    radioCheckCorrectIsFavorite(artist.isFavorite)

    document.querySelector("#update-artist-form")?.addEventListener("submit", submitUpdateArtistForm);
}

async function submitUpdateArtistForm(event: Event): Promise<void> {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const updatedArtist: Artist = {
        name: form["artist-name"].value,
        gender: form.gender.value,
        birthdate: form.birthdate.value,
        activeSince: Number(form["active-since"].value),
        genres: form.genres.value.split(", "),
        labels: form.labels.value.split(", "),
        website: form.website.value,
        image: form.image.value,
        shortDescription: form.description.value,
        isFavorite: Boolean(form.favorite.value),
        id: artistID
    };

    console.log(updatedArtist);

    await updateArtist(updatedArtist);
}

function radioCheckCorrectGender(artistGender: string): void {
    
    if (artistGender.toLowerCase() === "male") {
        const maleRadio = document.querySelector("#male") as HTMLInputElement;
        maleRadio.checked = true;
    } else if (artistGender.toLowerCase() === "female") {
        const femaleRadio = document.querySelector("#female") as HTMLInputElement;
        femaleRadio.checked = true;
    } else if (artistGender.toLowerCase() === "other") {
        const otherRadio = document.querySelector("#other") as HTMLInputElement;
        otherRadio.checked = true;
    }
}

function radioCheckCorrectIsFavorite(artistIsFavorite: boolean): void {

    if (artistIsFavorite) {
        const yesRadio = document.querySelector("#yes") as HTMLInputElement;
        yesRadio.checked = true;
    } else if (!artistIsFavorite) {
        const noRadio = document.querySelector("#no") as HTMLInputElement;
        noRadio.checked = true;
    }
}



export {displayUpdateArtistForm}