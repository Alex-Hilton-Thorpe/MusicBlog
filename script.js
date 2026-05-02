/* This is the brain of my website. It contains all of the JavaScript Code */

import { albums } from './data.js';

//  /* Look through each day in May */
// for (let i = 1; i <= 31; i++){
// /* create a new element for the album card */
//     const card = document.createElement('article');

//     /* add the class "album-card" to the card */
//     card.classList.add('album-card');

//     /* Fill in the card with HTML */
//     card.innerHTML = `
//         <div class = "day-number">May ${i}</div>
//         <h3>Album Title</h3>
//         <p>Artist Name </p>
//     `;

//     /* Put finished card onto grid */
//     grid.appendChild(card);
// } 

/* Get the empty grid in HTML using its ID */
const grid = document.getElementById('calendar-grid');

/* Instead of counting we go through each album in the albums array */

albums.forEach(album => {
    /* create a new element for the album card */
    const card = document.createElement('article');

    /* add the class "album-card" to the card */
    card.classList.add('album-card');

    /* use album.title, album.artist, etc for specific data */

    /* We wrap the content in a link that sends the 'day' number to review.html */

      card.innerHTML = `
          <a href="review.html?id=${album.day}" class="class-link"> 
        <div class = "day-number">May ${album.day}</div>
        <img src = "${album.image}" alt = "${album.title} album cover" class = "album-art">
        <h3>${album.title}</h3>
        <p>${album.artist}</p>
        </a>
    `;
    /* Put finished card onto grid */
    grid.appendChild(card);
}); 
