document.addEventListener('DOMContentLoaded', () => {
    loadMeditations();
});

function loadMeditations() {
    const meditations = [
        {
            id: 1,
            title: 'Vistaarit Yaan Saans',
            description: '12 minutos • 🌠 ASTRAL',
            cover: 'img/cover.png',
            voiceTrack: 'voices/Vistaarit Yaan Saans.mp3' 
        },
        {
            id: 2,
            title: 'Yaan Kee Saans',
            description: '5 minutos • 🍃 A MAIS PODEROSA',
            cover: 'img/cover.png',
            voiceTrack: 'voices/Yaan Kee Saans.mp3'
        }
    ];

    const meditationList = document.getElementById('meditations-list');

    meditations.forEach(meditation => {
        const meditationItem = document.createElement('div');
        meditationItem.classList.add('meditation-item');

        meditationItem.innerHTML = `
            <img src="${meditation.cover}" alt="${meditation.title}">
            <div class="details">
                <h3>${meditation.title}</h3>
                <p>${meditation.description}</p>
            </div>
        `;

        meditationItem.addEventListener('click', () => {
            playMeditation(meditation);
        });

        meditationList.appendChild(meditationItem);
    });
}

function getRandomBackgroundTrack() {
    const backgroundTracks = [
        'music/Calm Mountains.mp3',
        'music/Calmind.mp3',
        'music/Full.mp3',
        'music/Shrine.mp3',
        'music/Third Eye.mp3',
        'music/Tibet.mp3',
        'music/Meditator.mp3'
    ];

    const randomIndex = Math.floor(Math.random() * backgroundTracks.length);
    return backgroundTracks[randomIndex];
}

function playMeditation(meditation) {
    const backgroundTrack = getRandomBackgroundTrack(); 
    const voiceTrack = meditation.voiceTrack; 

    const backgroundAudio = new Audio(backgroundTrack);
    const voiceAudio = new Audio(voiceTrack);

    backgroundAudio.play();
    voiceAudio.play();

    backgroundAudio.volume = 0.4;

    alert(`Tocando: ${meditation.title} com a música ${backgroundTrack.split('/').pop()}`);

    voiceAudio.onended = () => {
        backgroundAudio.pause();
        backgroundAudio.currentTime = 0;
        alert('Meditação finalizada.');
    };
}

function stopMeditation() {

}