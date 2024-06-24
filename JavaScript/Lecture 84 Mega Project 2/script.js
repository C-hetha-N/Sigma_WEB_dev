console.log("Let's write JavaScript");

let currentSong = new Audio();
let songs;
let currFolder;

function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    // Ensure the input is an integer by flooring it
    const totalSeconds = Math.floor(seconds);
    const remainingMinutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    // Pad with leading zeros if necessary
    const formattedMinutes = String(remainingMinutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
    currFolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/${folder}/`)
    let response = await a.text()
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")

    songs = []
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }

    // Show all songs in the playlist
    let songUL = document.querySelector(".songsList").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
                                <div class="songInfo">
                                    <img src="music.svg" alt="">
                                    <div>
                                        <div>${song.replaceAll("%20", " ")}</div>
                                        <div>Song Artist</div>
                                    </div>
                                </div>
                                <div class="playNow">
                                    <span>Play Now</span>
                                    <img src="play.svg" alt="">
                                </div>
                            </li>`
    }
    Array.from(document.querySelector(".songsList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".songInfo").getElementsByTagName("div")[1].innerHTML.trim());
        })
    })
    return songs;
}

const playMusic = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track
    if (!pause) {
        currentSong.play()
        play.src = "pause.svg"
    }
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00"
    document.querySelector(".songName").innerHTML = decodeURI(track)

}

async function displayAlbum() {
    let a = await fetch(`http://127.0.0.1:3000/songs/`)
    let response = await a.text()
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")

    let array = Array.from(anchors)

    for (let index = 0; index < array.length; index++) {
        const e = array[index];

        if (e.href.includes("/songs")) {
            let folder = e.href.split("/").slice(-2)[0];

            // Get the metadata of the folder
            let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`)
            let response = await a.json();

            cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card">
                        <div class="playBtn"><img src="playIcon.svg" alt=""></div>
                        <img src="/songs/${folder}/cover.jpg" alt="">
                        <h2>${response.title}</h2>
                        <p>${response.description}</p>
                    </div>`
        }
    }

    // Load the playlist whenever the card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            console.log(item.currentTarget, item.currentTarget.dataset, item.currentTarget.dataset.folder);
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
            playMusic(songs[0])
        })
    })
}

async function main() {

    // Get the list of all songs
    await getSongs("/songs/Devotion_songs")
    playMusic(songs[0], true)


    // Display all the album on the page
    displayAlbum();

    // Attach an event listener to play, next or previous
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "play.svg"
        }
    })

    // Listen for timeUpdate event
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songTime").innerHTML = `${formatTime(currentSong.currentTime)} / ${formatTime(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    })

    // Add event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let seekbarPercent = e.offsetX / e.target.getBoundingClientRect().width * 100
        document.querySelector(".circle").style.left = seekbarPercent + "%"
        currentSong.currentTime = (currentSong.duration) * seekbarPercent / 100
    })

    document.querySelector(".humburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = 0
    })

    document.querySelector(".cancel").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-200%"
    })

    // Add event listener to previous
    previous.addEventListener("click", () => {
        console.log("Previous clicked");
        let index = songs.indexOf(currentSong.src.split('/').slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1]);
        }
    })

    // Add event listener to next
    next.addEventListener("click", () => {
        console.log("Next clicked");
        let index = songs.indexOf(currentSong.src.split('/').slice(-1)[0])
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1]);
        }
    })

    // Add event listener to volume
    document.querySelector(".volRange").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("Setting volume to", e.target.value, "/ 100");
        currentSong.volume = parseInt(e.target.value) / 100
    })

    // Add event listener for Mute
    document.querySelector(".volume>img").addEventListener("click", e => {
        // if(e.target.src == "http://127.0.0.1:3000/volumeOn.svg") {
        //     e.target.src = "http://127.0.0.1:3000/volumeOff.svg"
        //     console.log(e.target.src)
        //     currentSong.volume = 0
        // } 
        // else {
        //     e.target.src = "http://127.0.0.1:3000/volumeOn.svg"
        //     console.log(e.target.src);
        //     currentSong.volume = 0.2
        // }

        if(e.target.src.includes("volumeOn.svg")) {
            e.target.src = e.target.src.replace("volumeOn.svg", "volumeOff.svg")            
            console.log(e.target.src)
            document.querySelector(".volRange").getElementsByTagName("input")[0].value = 0
            currentSong.volume = 0      
        } 
        else {
            e.target.src = e.target.src.replace("volumeOff.svg", "volumeOn.svg") 
            console.log(e.target.src);
            document.querySelector(".volRange").getElementsByTagName("input")[0].value = 20
            currentSong.volume = 0.2
        }
    })



}

main()