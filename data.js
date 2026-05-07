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
        songs: "1. Dissolve\n 2. Done with Love (feat. Herizen)\n 3. Lemon Drop",
        rating: "5/10"
    },
    {
        day: 3,
        title: "Kiss all the time. Disco, Occasionally",
        artist: "Harry Styles",
        image: "katt.jpg",
        review: "This is singer songwriter Harry Styles’ 4th studio album. This album can be defined as a dance-pop album influenced by electronic music, with Styles himself saying this album was inspired by LCD SoundSystem. There are some very good highs on the album with unique sounds which I loved, however for the most part this album felt quite derivative and could be placed in most pop albums and I wouldn’t be surprised. Overall, this album is exactly what I thought it would be, I didn’t feel moved by the album and pretty much what I would expect from a Harry Styles album.",
        songs: "1. Season 2 Weight loss\n 2. Ready,Steady,Go!\n 3. Pop",
        rating: "6/10"
    },
    {
        day: 4,
        title: "Back to Black",
        artist: "Amy Winehouse",
        image: "btb.jpg",
        review: "Amy Jade Winehouse was a British artist in the 2000s. She grew up in a Jazz-influenced household, and this is evident in this album, where she has skilfully utilized this jazz sound to make an amazing pop album. This was her 2nd and final album as her life was tragically cut short, and being only 23 when this album was made, she shows such a great maturity in her voice and lyrics. This album tackles the ideas of heartbreak and guilt from ex-relationships. I felt drawn to this album from the first song and had such an amazing time listening to it. I couldn’t recommend this album more. In my opinion this is the greatest pop album made of all time, and the only way it could be better is if it was longer. ",
        songs: "1. Rehab\n 2. Back to Black\n 3. Wake Up Alone",
        rating: "8.5/10"
    },
    {
        day: 5,
        title: "The Stone Roses",
        artist: "The Stone Roses",
        image: "stone-roses.jpg",
        review: "English band from Manchester in the 80s and 90s. Categorized as an indie rock group and is the figurehead and pioneers of the Madchester Scene. They are also the band who inspired a young Liam and Noel Gallager to start the famous Manchester group Oasis. The album is interesting and I felt it is a well put together album that has very good production and instrumentals. However, I didn’t get the spark from them.  Overall, I didn’t dislike the album it was good just not the next level that I love.",
        songs: "1. I Wanna Be Adored\n 2. Elephant Stone\n 3. I am the Resurrection",
        rating: "7/10"
    },
    {
        day: 6,
        title: "Turn on the Bright Lights",
        artist: "Interpol",
        image: "totbl.jpg",
        review: "Interpol is a New York indie rock band whose peers include one of my personal favorites, The Strokes. They have this beautiful dark melancholic tone in this album which I loved. From top to bottom this album had a certain nostalgic feeling as though I had been here before, I feel a good way to describe how I felt listening to this album was as though I was some where on a late foggy night and I somehow recognize where I am even though I have never been there. This album was released in 2002 shortly after the 911 attacks and even though the band says they wrote the songs before the attacks you can really feel that heavy weight, they must’ve felt coming from New York themselves. The albums’ themes were broken relationships and a feeling of urban isolation which I found very prevalent while listening. The guitar, uneasy lyrics and tones made this album one of the best I have heard in a while. I can’t recommend this album enough, it’s a must listen for any indie rock fan.",
        songs: "1. Obstacle 1\n 2. Untitled\n 3. Leif Erikson",
        rating: "9.5/10"
    },
    {
        day: 7,
        title: "Hot Rats",
        artist: "Frank Zappa",
        image: "hotrats.jpg",
        review: "Frank is an American musician, composer and bandleader from Baltimore USA. He is known for his electric guitar work and mix of Jazz, rock and classical music. This album was definitely that, his guitar solos where something to behold and the jazz influence was extremely apparent with the beautiful induction saxaphone and trumpet solos. I consider this album to be mainly instrumentals with a few lyrics in Willie the Pimp. Overall Frank comes across as an extremely talented musician and composer who I believe is one of the most talented I have heard in a long time. Each song feels like a beautiful journey through jazz and rock. I loved this album and I thought I wouldn't get a better Jazz album after Back to Black but I have been pleasantly surprised.",
        songs: "1. Willie The Pimp\n 2. The Gumbo Variations\n 3. Son Of Mr. Green Genes",
        rating: "9/10"
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