

/* 
This app is my first react project (other then a simple counter which I don't count). it is made specifically for album/song lists
Ie. Favorite albums of the year, Best album from each year of the 2000s, favorite albums from each genre. I choose to use React 
(mostly because I am learning it) to take advantage of React's principle of DRY (Don't Repeat Yourself) but with this being a static site I don't need state. Each album entry has 
basic media links (Spotify & Apple Music). 

Might add more features later if I feel like, this is pretty barebones. This project doesn't use spotify api which is probably the most obvious inclusion. I'm thinking maybe using song.link or adding more platform 
links, or just styling things better. Maybe also dark mode.

If I feel like it I'll make this a full featured app with all the features.
*/

// I didn't "Be sure to precompile your scripts for production" as chrome is telling me but this App should still work according to me. If not, I guess I'll have to listen to chrome.
const App = () => {
const authorName = "Joshua Lent"
const openingMsg = "This project uses. I hope to add more features and comments to the code but I am enjoying it"
const closingMsg = "2024 is coming to an end and we have seen many great albums released this year. I hope you enjoyed this project"
const albumList = [
    {
        albumName: "GNX",
        artist: "Kendrick Lamar",
        albumArt: "/images/GNX.jpg",
        link1: "https://open.spotify.com/album/0hvT3yIEysuuvkK73vgdcW",
        link2: "https://www.youtube.com/watch?v=YwUQ_5iV9pY&list=OLAK5uy_nr2Gbry1tH6kks2gabRq1k3sjR0ByDnKg",
        albumThoughts: "Great album 10/10"

    },
    {
        albumName: "MR. SUNSHINE",
        artist: "Lakewude",
        albumArt: "/images/MR.SUNSHINE.jpg",
        link1: "https://open.spotify.com/track/4BBLrMGYaiscDnb4s9naPZ",
        link2: "https://music.amazon.ca/albums/B0DN9GXCLP?marketplaceId=A2EUQ1WTGCTBG2&musicTerritory=CA&ref=dm_sh_5qjDfJNA7XLufL6YuygIaOM51",
        albumThoughts: "Great album 10/10. This album REALLY deserves more love, I would estimate based on the most popular track stream numbers it had less than 10,000 streams on spotify."

    },
    {
        albumName: "Dark Times",
        artist: "Vince Staples",
        albumArt: "/images/DarkTimes.jpg",
        link1: "https://music.apple.com/us/album/dark-times/1747072325",
        link2: "https://open.spotify.com/album/30BFY5VHii4PyWqkTubUWX",
        albumThoughts: "Great album 10/10"

    }, 
];
// I feel like there should be a way to clean this up other than destructuring the album but oh well
const AlbumJSX = albumList.slice().reverse().map((el) => <li className="album-li" key={"album-number-" + albumList.indexOf(el) + 1}><h2 className="album-title">{albumList.indexOf(el) + 1}. {el.albumName}</h2><p className="album-artist">{el.artist}</p><img className="album-Art" src ={el.albumArt} alt={el.albumName + " by " + el.artist + " album art"}></img><div className="album-link-container"><a className="media-link" href={el.link1} target="_blank"><span className="link-icon-span"></span>Listen to {el.albumName}</a><a className="media-link" href={el.link2} target="_blank"><span className="link-icon-span"></span>Listen to {el.albumName}</a></div><p>{el.albumThoughts}</p></li>)

    
    
    //return App
    return (
        <div className="app">
            <h1 className="page-header">Favorite Albums of 2024</h1>
            <p className="author">By {authorName}</p>
            <p>{openingMsg}</p>
            <ul className="album-list">
                {AlbumJSX}
            </ul>
            <h2 className="closing-remarks-header">Closing Remarks</h2>
            <p className={"closing-remarks"}>gyr</p>
        </div>
    );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
populateLinkIcons();
