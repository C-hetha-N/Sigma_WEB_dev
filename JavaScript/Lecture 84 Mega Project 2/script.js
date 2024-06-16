console.log("Let's write JavaScript");

let currentSong = new Audio();

function formatTime(seconds) {
    // Ensure the input is an integer by flooring it
    const totalSeconds = Math.floor(seconds);

    // Calculate hours, minutes, and remaining seconds
    const hours = Math.floor(totalSeconds / 3600);
    const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;

    // Pad with leading zeros if necessary
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(remainingMinutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    // Combine hours, minutes, and seconds into the desired format
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}



async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text()
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")

    let songs = []
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs;
}

const playMusic = (track, pause=false) => {
    currentSong.src = "/songs/" + track
    if(!pause) {
        currentSong.play()
        play.src = "pause.svg"
    }
    document.querySelector(".songName").innerHTML = decodeURI(track)
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00"
}

async function main() {

    // Get the list of all songs
    let songs = await getSongs()
    playMusic(songs[0],true)

    // Show all songs in the playlist
    let songUL = document.querySelector(".songsList").getElementsByTagName("ul")[0]
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
    currentSong.addEventListener("timeupdate", ()=>{
        document.querySelector(".songTime").innerHTML = `${formatTime(currentSong.currentTime)} / ${formatTime(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    })

    // Add event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e=> {
        let seekbarPercent = e.offsetX / e.target.getBoundingClientRect().width * 100
        document.querySelector(".circle").style.left = seekbarPercent + "%"
        currentSong.currentTime = (currentSong.duration) * seekbarPercent / 100
    })
    
}

main()