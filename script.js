const display = document.getElementById('display');
const drumPads = document.querySelectorAll('.drum-pad');

// Single function to handle playing sound
function playSound(keyId, description) {
  const audio = document.getElementById(keyId);
  if (!audio) return;

  // Reset and play
  audio.currentTime = 0;
  audio.play();

  // Update display
  display.innerText = description.replace(/-/g, ' ');
}

// Click Listeners
drumPads.forEach(pad => {
  pad.addEventListener('click', () => {
    const audioId = pad.querySelector('.clip').id;
    playSound(audioId, pad.id);
  });
});

// Keyboard Listeners
document.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase();
  const audio = document.getElementById(key);
  
  if (audio) {
    const parentPad = audio.parentElement;
    playSound(key, parentPad.id);

    // Add visual 'active' state for keyboard press
    parentPad.classList.add('active');
    setTimeout(() => {
      parentPad.classList.remove('active');
    }, 100);
  }
});
