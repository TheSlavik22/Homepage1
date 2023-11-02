let currentAudio = null;

function playAudio(audioSrc) {
    return new Promise((resolve) => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        var audio = new Audio(audioSrc);
        currentAudio = audio;
        audio.play();

        var image = event.target;
        image.style.transition = 'transform 0.5s ease-in-out';
        image.style.transform = 'scale(1.1) rotate(360deg)';

        setTimeout(function() {
            image.style.transition = 'none';
            image.style.transform = 'scale(1) rotate(0deg)';
            resolve();
        }, 500);
    });
}
