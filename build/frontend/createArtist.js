import { createArtist } from "./api.js";
import { clearDialogWindow, openDialogWindow } from "./helpers.js";
function displayCreateArtistForm(event) {
    //Displays a create form in html.
    clearDialogWindow();
    const html = /*html*/ `
        <h2 class="center">Create Artist</h2>
        <form id="create-artist-form">

            <div id="create-artist-form-container">
                <label for="artist-name">Name:</label>
                <input type="text" name="artist-name" id="artist-name" required>

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
                <input type="text" name="birthdate" id="birthdate" placeholder="DD/MM/YYYY" required>

                <label for="active-since">Active since:</label>
                <input type="number" name="active-since" id="active-since" placeholder="YYYY" required>

                <label for="genres">Genres:</label>
                <input type="text" name="genres" id="genres" placeholder="Seperate with ', '" required>

                <label for="labels">Labels:</label>
                <input type="text" name="labels" id="labels" placeholder="Seperate with ', '" required>

                <label for="website">Website:</label>
                <input type="url" name="website" id="website" required>

                <label for="image">Image:</label>
                <input type="url" name="image" id="image" required>

                <label for="add-to-favorites">Add to favorites?</label>
                <div class="favorites-radio-div">
                    <label for="yes">Yes:</label>
                    <input type="radio" name="favorite" value="true" id="yes" required>
                    <label for="no">No:</label>
                    <input type="radio" name="favorite" value="" id="no">
                </div>

                <label for="description">Description:</label>
                <textarea name="description" id="description" cols="10" rows="6" required></textarea>
            </div>
            
            <div class="center form-submit-btn">
                <input class="justify-center" type="submit" value="Submit">
            </div>

        </form>
    `;
    document.querySelector("#dialog-display")?.insertAdjacentHTML("beforeend", html);
    document.querySelector("#create-artist-form")?.addEventListener("submit", submitCreateArtistForm);
    openDialogWindow();
}
async function submitCreateArtistForm(event) {
    //After submitting the create artist form, gather the input value in a newArtist object.
    //Send newArtist in the createArtist POST-request
    event.preventDefault();
    const form = event.target;
    const newArtist = {
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
    };
    console.log(newArtist);
    await createArtist(newArtist);
}
export { displayCreateArtistForm };
