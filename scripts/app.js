// Assuming you have an audio file named "piano-sound.mp3" in an "audio" folder
document.addEventListener("keydown", function(event) {
    if (event.key === "p") { // assuming 'p' key for piano
        const audio = new Audio("audio/piano-sound.mp3");
        audio.play();
    }
});