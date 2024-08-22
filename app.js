let speech = new SpeechSynthesisUtterance();
let voices = [];
const voiceSelect = document.querySelector('#voice');

document.querySelector('.button').addEventListener('click', () => {
    speech.text = document.querySelector('#inputText').value;
    document.querySelector('.button').style.backgroundColor = 'darkred';
    setTimeout(() => {
        document.querySelector('.button').style.backgroundColor = ''; // Resets to the original color
    }, 200);
    window.speechSynthesis.speak(speech);
});

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear existing options

    voices.forEach((voice, i) => {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });

    speech.voice = voices[0]; // Set default voice
};

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});
