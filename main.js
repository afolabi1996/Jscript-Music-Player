const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//song titles
const songs = [ 
    'Bethel-Music-No-longer-slaves',
    'Bethel_Music_-_Tremble_(mp3.pm)',
    'Call-Upon-Your-Name-Theophilus-Sunday'
]

// keep track of the songs
let songIndex = 2

//initially load our songs into the DOM
loadSong(songs[songIndex])

//update the song details
function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    song === 'Bethel_Music_-_Tremble_(mp3.pm)' ? cover.src = `images/${song}.jpg` : cover.src = `images/${song}.webp`
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

//Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})