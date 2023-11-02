let currentAudio = null; // переменная для хранения текущего аудио

function playAudio(audioSrc) {
    return new Promise((resolve) => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Сбрасываем в начало для возможности повторного воспроизведения
        }

        // Создаем новое аудио
        var audio = new Audio(audioSrc);
        currentAudio = audio; // Устанавливаем текущее аудио
        audio.play();

        // Добавляем анимацию разворота
        var image = event.target;
        image.style.transition = 'transform 0.5s ease-in-out';
        image.style.transform = 'scale(1.1) rotate(360deg)';

        // Сбрасываем анимацию и возвращаем изображение в исходное состояние через 0.5 секунды
        setTimeout(function() {
            image.style.transition = 'none';
            image.style.transform = 'scale(1) rotate(0deg)';
            resolve();
        }, 500);
    });
}
