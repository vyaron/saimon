
var gIsUserTurn
var gUserScore
var gTopScore = +localStorage.getItem('topScore') || 0
var gNoteSeq
var gCurrUserIdx

const gAudioRight = new Audio('sound/right3.mp3')
const gAudioWrong = new Audio('sound/wrong.mp3')
const gAudioWin = new Audio('sound/win.mp3')
const gAudioCheer = new Audio('sound/cheer.mp3')
const gAudioBreak = new Audio('sound/broken.mp3')
const gAudioExplode = new Audio('sound/explode.mp3')
const gAudioNotes = [
    new Audio('sound/note/1.mp3'),
    new Audio('sound/note/2.mp3'),
    new Audio('sound/note/3.mp3'),
    new Audio('sound/note/4.mp3')
]

// Don't scare that kid
gAudioBreak.volume = 0.05
gAudioRight.volume = 0.05


function onInit() {
    gUserScore = 0
    gIsUserTurn = false
    document.querySelector('.score').innerText = gUserScore
    document.querySelector('.top-score').innerText = gTopScore

    document.querySelector('.modal').classList.remove('show')
    gNoteSeq = '' + getRandomIntInclusive(1, 4)
    playComputer()
}


function playComputer() {
    flashMsg('נא להקשיב...')

    document.querySelector(`.game-container`).classList.remove('user-turn')
    gIsUserTurn = false
    for (let i = 0; i < gNoteSeq.length; i++) {
        setTimeout(() => {
            const played = gNoteSeq.charAt(i)
            const el = document.querySelector(`.game-container > button:nth-child(${played})`)
            onPress(el, played)
        }, i * 1200)
    }

    setTimeout(() => {
        setUserTurn()
    }, gNoteSeq.length * 1000)
}

function setUserTurn() {
    gIsUserTurn = true
    document.querySelector(`.game-container`).classList.add('user-turn')
    gCurrUserIdx = 0
    flashMsg('תורך')

}

function onUserPress(elBtn) {
    if (!gIsUserTurn) return
    const note = gNoteSeq[gCurrUserIdx]
    if (elBtn.innerText !== note) {
        document.querySelector(`.game-container`).classList.remove('user-turn')
        flashMsg('אופסי...')
        breakScreen()
        setTimeout(() => {
            document.querySelector('.modal').classList.add('show')
        }, 3000)
        return
    }
    onPress(elBtn, note)
    if (gCurrUserIdx === gNoteSeq.length - 1) {

        setTimeout(()=>{
            flashMsg('יפה!')
            gUserScore++
            document.querySelector('.score').innerText = gUserScore
            if (gUserScore > gTopScore) {
                document.querySelector('.top-score').innerText = gUserScore
                localStorage.setItem('topScore', gUserScore)
            }
            gAudioRight.play()
        }, 1200)

        setTimeout(() => {
            gNoteSeq += getRandomIntInclusive(1, 4)
            playComputer()
        }, 2500)

    } else {
        gCurrUserIdx++
    }
}

function onPress(elBtn, note) {
    gAudioNotes[note-1].play()
    elBtn.classList.add('pressed')
    setTimeout(() => {
        elBtn.classList.remove('pressed')
    }, 500)
}

function breakScreen() {
    gAudioBreak.play()
    const el = document.querySelector('.broken')
    el.style.display = 'block'
    setTimeout(() => {
        el.style.display = 'none'
    }, 2500)
}

function flashMsg(msg) {
    const elMsg = document.querySelector('.user-msg')
    elMsg.innerText = msg
    elMsg.classList.add('show')
    setTimeout(() => {
        elMsg.classList.remove('show')
    }, 1500)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}
