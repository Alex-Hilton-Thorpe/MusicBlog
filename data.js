/* Creating an array of album names, images and artists */
const albums = [
    {
        day: 1,
        title: "Highway 61 Revisited",
        artist: "Bob Dylan",
        image: "highway-61.jpg",
        review: "This being my first Bob Dylan album has been a great journey. As a big Beatles fan the influence, I see now that Bob had on them is very apparent with Jon Lennons singing style echoing the way in which Bob sings. Speaking of which I loved how Bob sang in this album along with his amazing lyrics. I love the folk style of the album with the steel sting guitar giving a very blues feel at the same time as the harmonica rounding out the songs perfectly. When I say this album was a journey it really was, each song made me feel like I was driving along Route 61. What Do You, Mr Jones? Think",
        songs: "1. Like a Rolling Stone\n 2. From a Buick 6\n 3. Ballad of a Thin Man",
        rating: "8/10"
    },
    {
        day: 2,
        title: "Cocoon",
        artist: "Absofacto",
        image: "cocoon.jpg",
        review: "Absofacto is a solo project by musician Jonathan Visger, and he seems to be a relatively talented artist. However, this album is as good as electric pop albums can be. It has some good standouts that I can bounce my foot along to but nothing that made me think. I don’t think this is on the album itself and I believe that some people may love this type of music, personally not for me. What this album did do well was that it had a dreamy nostalgic sound, and is a very easy listen which I can see myself studying or working too.",
        songs: "1. Dissolve\n 2. 2.	Done with Love (feat. Herizen)\n 3. Lemon Drop",
        rating: "6/10"
    },
    {
        day: 3,
        title: "Kiss all the time",
        artist: "Harry Styles",
        image: "katt.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 4,
        title: "Back to Black",
        artist: "Amy Winehouse",
        image: "btb.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 5,
        title: "The Stone Roses",
        artist: "The Stone Roses",
        image: "stone-roses.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 6,
        title: "Turn on the Bright Lights",
        artist: "Interpol",
        image: "totbl.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 7,
        title: "Hot Rats",
        artist: "Frank Zappa",
        image: "hotrats.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 8,
        title: "Blood on the Tracks",
        artist: "Bob Dylan",
        image: "blood-on-the-tracks.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 9,
        title: "People who aren't there anymore",
        artist: "Future Islands",
        image: "people-arent-there-anymore.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 10,
        title: "My Head is an Animal",
        artist: "Of Monsters and Men",
        image: "mhiaa.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 11,
        title: "Punk Tactics",
        artist: "Joey Valence & Brae",
        image: "pt.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 12,
        title: "Led Zeppelin III",
        artist: "Led Zeppelin",
        image: "LZ3.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 13,
        title: "Around the fur",
        artist: "Deftones",
        image: "atf.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 14,
        title: "Carrie & Lowell",
        artist: "Sufjan Stevens",
        image: "cal.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 15,
        title: "Blonde on Blonde",
        artist: "Bob Dylan",
        image: "bob.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 16,
        title: "The Rhythm of the Saints",
        artist: "Paul Simon",
        image: "ros.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 17,
        title: "Follow the leader",
        artist: "Korn",
        image: "ftl.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 18,
        title: "This is Happening",
        artist: "LCD Soundsystem",
        image: "tih.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 19,
        title: "Manning Fireworks",
        artist: "MJ Lenderman",
        image: "mf.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 20,
        title: "Hot Buttered Soul",
        artist: "Isaac Hayes",
        image: "hbs.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 21,
        title: "Jikan",
        artist: "betcover!!",
        image: "jikan.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 22,
        title: "Bringing it all back home",
        artist: "Bob Dylan",
        image: "bitlh.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 23,
        title: "Chocolate Starfish and the Hotdog Flavored Water",
        artist: "Limp Bizkit",
        image: "cat.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 24,
        title: "Purple",
        artist: "Stone Temple Pilots",
        image: "purple.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 25,
        title: "The Ride",
        artist: "Catfish and the Bottlemen",
        image: "tr.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 26,
        title: "You'd prefer an Astronaut",
        artist: "Hum",
        image: "ypaa.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 27,
        title: "Thriller",
        artist: "Michael Jackson",
        image: "thriller.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 28,
        title: "Heavy Metal",
        artist: "Cameron Winter",
        image: "hm.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 29,
        title: "Rough and Rowdy Ways",
        artist: "Bob Dylan",
        image: "raw.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 30,
        title: "Liquid Swords",
        artist: "GZA",
        image: "ls.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    },
    {
        day: 31,
        title: "Some Rap Songs",
        artist: "Earl Sweatshirt",
        image: "srs.jpg",
        review: "To be decided",
        songs: "To be decided",
        rating: "To be decided"
    }

];

export { albums };