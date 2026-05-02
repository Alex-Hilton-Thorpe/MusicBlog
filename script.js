/* This is the brain of my website. It contains all of the JavaScript Code */

/* Get the empty grid in HTML using its ID */
const grid = document.getElementById('calendar-grid');

/* Creating an array of album names, images and artists */

/* Look through each day in May */
for (let i = 1; i <= 31; i++){
/* create a new element for the album card */
    const card = document.createElement('article');

    /* add the class "album-card" to the card */
    card.classList.add('album-card');

    /* Fill in the card with HTML */
    card.innerHTML = `
        <div class = "day-number">May ${i}</div>
        <h3>Album Title</h3>
        <p>Artist Name </p>
    `;

    /* Put finished card onto grid */
    grid.appendChild(card);
}