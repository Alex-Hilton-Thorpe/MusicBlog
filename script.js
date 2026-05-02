/* This is the brain of my website. It contains all of the JavaScript Code */

/* Creating an array of album names, images and artists */
const albums = [
    {
        day: 1,
        title: "Highway 61 Revisited",
        artist: "Bob Dylan",
        image: "highway-61.jpg"
    },
    {
        day: 2,
        title: "Cocoon",
        artist: "Absofacto",
        image: "cocoon.jpg"
    },
    {
        day: 3,
        title: "Kiss all the time",
        artist: "Harry Styles",
        image: "katt.jpg"
    },
    {
        day: 4,
        title: "Back to Black",
        artist: "Amy Winehouse",
        image: "btb.jpg"
    },
    {
        day: 5,
        title: "The Stone Roses",
        artist: "The Stone Roses",
        image: "stone-roses.jpg"
    },
    {
        day: 6,
        title: "Turn on the Bright Lights",
        artist: "Interpol",
        image: "totbl.jpg"
    },
    {
        day: 7,
        title: "Hot Rats",
        artist: "Frank Zappa",
        image: "hotrats.jpg"
    },
    {
        day: 8,
        title: "Blood on the Tracks",
        artist: "Bob Dylan",
        image: "blood-on-the-tracks.jpg"
    },
    {
        day: 9,
        title: "People who aren't there anymore",
        artist: "Future Islands",
        image: "people-arent-there-anymore.jpg"
    },
    {
        day: 10,
        title: "My Head is an Animal",
        artist: "Of Monsters and Men",
        image: "mhiaa.jpg"
    },
    {
        day: 11,
        title: "Punk Tactics",
        artist: "Joey Valence & Brae",
        image: "pt.jpg"
    },
    {
        day: 12,
        title: "Led Zeppelin III",
        artist: "Led Zeppelin",
        image: "LZ3.jpg"
    },
    {
        day: 13,
        title: "Around the fur",
        artist: "Deftones",
        image: "atf.jpg"
    },
    {
        day: 14,
        title: "Carrie & Lowell",
        artist: "Sufjan Stevens",
        image: "cal.jpg"
    },
    {
        day: 15,
        title: "Blonde on Blonde",
        artist: "Bob Dylan",
        image: "bob.jpg"
    },
    {
        day: 16,
        title: "The Rhythm of the Saints",
        artist: "Paul Simon",
        image: "ros.jpg"
    },
    {
        day: 17,
        title: "Follow the leader",
        artist: "Korn",
        image: "ftl.jpg"
    },
    {
        day: 18,
        title: "This is Happening",
        artist: "LCD Soundsystem",
        image: "tih.jpg"
    },
    {
        day: 19,
        title: "Manning Fireworks",
        artist: "MJ Lenderman",
        image: "mf.jpg"
    },
    {
        day: 20,
        title: "Hot Buttered Soul",
        artist: "Isaac Hayes",
        image: "hbs.jpg"
    },
    {
        day: 21,
        title: "Jikan",
        artist: "betcover!!",
        image: "jikan.jpg"
    },
    {
        day: 22,
        title: "Bringing it all back home",
        artist: "Bob Dylan",
        image: "bitlh.jpg"
    },
    {
        day: 23,
        title: "Chocolate Starfish and the Hotdog Flavored Water",
        artist: "Limp Bizkit",
        image: "cat.jpg"
    },
    {
        day: 24,
        title: "Purple",
        artist: "Stone Temple Pilots",
        image: "purple.jpg"
    },
    {
        day: 25,
        title: "The Ride",
        artist: "Catfish and the Bottlemen",
        image: "tr.jpg"
    },
    {
        day: 26,
        title: "You'd prefer an Astronaut",
        artist: "Hum",
        image: "ypaa.jpg"
    },
    {
        day: 27,
        title: "Thriller",
        artist: "Michael Jackson",
        image: "thriller.jpg"
    },
    {
        day: 28,
        title: "Heavy Metal",
        artist: "Cameron Winter",
        image: "hm.jpg"
    },
    {
        day: 29,
        title: "Rough and Rowdy Ways",
        artist: "Bob Dylan",
        image: "raw.jpg"
    },
    {
        day: 30,
        title: "Liquid Swords",
        artist: "GZA",
        image: "ls.jpg"
    },
    {
        day: 31,
        title: "Some Rap Songs",
        artist: "Earl Sweatshirt",
        image: "srs.jpg"
    }

];

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
        <a href="review.html?id=${album.day}"" class="class-link"> 
        <div class = "day-number">May ${album.day}</div>
        <img src = "${album.image}" alt = "${album.title} album cover" class = "album-art">
        <h3>${album.title}</h3>
        <p>${album.artist}</p>
        </a>
    `;
    /* Put finished card onto grid */
    grid.appendChild(card);
}); 
