import { albums } from './data.js';

/* This will grab the 'ID' from the URL */
const params = new URLSearchParams(window.location.search);
const albumId = params.get('id');

/* This will find the album in the albums array that matches the 'ID' from the URL */
const CurrentAlbum = albums.find(a => a.day == albumId);

/* This will grab the empty div in review.html where we want to put our content */
const contentDiv = document.getElementById('review-content');

/* If we found an album that matches the ID, we will fill the content div with the album's information */
if (CurrentAlbum) {
    contentDiv.innerHTML = `
        <div class = "album-review-name">${CurrentAlbum.title}</div>
        <img src = "${CurrentAlbum.image}" alt = "${CurrentAlbum.title} album cover" class = "album-review-art">
        <h2>${CurrentAlbum.artist}</h2>
        <h3>My Review:</h3>
        <p>${CurrentAlbum.review}</p>
        <h3>Songs which stood out:</h3>
        <p class = "fav-songs"> ${CurrentAlbum.songs}</p>
        <h3>My Rating:</h3>
        <p>${CurrentAlbum.rating}</p>
    `;
} else {
    contentDiv.innerHTML = `<h1>Album not found!</h1>`;
}