/* Javacript */
function toggleDisplayMode() {
    const bodyEl = document.getElementById("body");
    const rootEl = document.querySelector(":root");

    console.log("function running");
    if (bodyEl.classList.contains("dark-mode")) {
        bodyEl.classList.add("light-mode")
        bodyEl.classList.remove("dark-mode")
        rootEl.style.setProperty('--mode-dependent-color', 'darkgreen');
    } else {
        bodyEl.classList.add("dark-mode")
        bodyEl.classList.remove("light-mode")
        rootEl.style.setProperty('--mode-dependent-color', 'lightblue');
        console.log("working, add functionality later");
    }
}

// Change user-name-span to user's name after prompt
function addUserName() {
    let userName = prompt("What is your name");
    let nameConfirmed = confirm("Confirm your name is " + userName + "?");
    if (nameConfirmed) {
        const userNameSpan = document.getElementsByClassName("user-name-span")[0]
        userNameSpan.innerHTML = userName;
        userNameSpan.style.textDecoration = "none";
    }
}

// Change the background color to a custom color
function changeBackgroundColor() {
    const userColor = prompt("What color would you like to change the background to? ");
    const bodyEl = document.getElementById("body");
    console.log(bodyEl);
    bodyEl.style.background = "transparent";
    bodyEl.style.backgroundColor = userColor;

}
// The new inner React developer in me made me use ES6 Arrow functions
const linkDomains = [["music.apple.com", "AppleMusic64.png", "Apple Music icon", "Apple Music"], ["open.spotify.com", "Spotify64.png", "Spotify icon", "Spotify"], ["music.amazon.", "AmazonMusic64.png", "Amazon Music icon", "Amazon Music"], ["youtube.com", "Youtube64.png", "Youtube icon", "Youtube"]]
const populateLinkIcons = () => {
    const albumLinkContainers = document.getElementsByClassName("album-link-container");
    for (const linkContainer of albumLinkContainers) {
        const links = linkContainer.querySelectorAll("a");
        // console.log(links);
        for (const link of links) {
            for (let i = 0; i < linkDomains.length; i++) {
                if (link.href.includes(linkDomains[i][0])) {
                    link.innerText = linkDomains[i][3];
                    const appropriateIcon = document.createElement("img");
                    appropriateIcon.src = `../images/${linkDomains[i][1]}`
                    console.log(appropriateIcon.href);
                    appropriateIcon.alt = linkDomains[i][2]
                    link.querySelector("span").appendChild(appropriateIcon);
                    
                }
            }
        }
    }

};