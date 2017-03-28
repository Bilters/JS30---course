function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // Stops the function from running all together
    audio.currentTime = 0; //Rewind to the start
    audio.play();
    key.classList.add('playing');
}

function removeTransistion(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransistion));
window.addEventListener('keydown', playSound);
