document.addEventListener('DOMContentLoaded', () => {
    loadMeditations();
});

function loadMeditations() {
    const meditations = [
        {
            id: 1,
            title: 'Vistaarit Yaan Saans',
            description: '12 minutos • 🌠 ASTRAL',
            cover: 'https://raw.githubusercontent.com/simplyYan/Zenderless/refs/heads/main/img/cover.png',
            voiceTrack: 'https://github.com/simplyYan/Zenderless/raw/refs/heads/main/voices/Vistaarit%20Yaan%20Saans.mp3' 
        },
        {
            id: 2,
            title: 'Yaan Kee Saans',
            description: '5 minutos • 🍃 A MAIS PODEROSA',
            cover: 'https://raw.githubusercontent.com/simplyYan/Zenderless/refs/heads/main/img/cover.png',
            voiceTrack: 'https://github.com/simplyYan/Zenderless/raw/refs/heads/main/voices/Yaan%20Kee%20Saans.mp3'
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
        'https://github.com/simplyYan/Zenderless/raw/refs/heads/main/music/Calm%20Mountains.mp3',
        'https://github.com/simplyYan/Zenderless/raw/refs/heads/main/music/Calmind.mp3',
        'https://github.com/simplyYan/Zenderless/raw/refs/heads/main/music/Full.mp3',
        'https://github.com/simplyYan/Zenderless/raw/refs/heads/main/music/Third%20Eye.mp3',
        'https://github.com/simplyYan/Zenderless/raw/refs/heads/main/music/Tibet.mp3',
        'https://github.com/simplyYan/Zenderless/raw/refs/heads/main/music/Meditator.mp3',
        'https://github.com/simplyYan/Zenderless/raw/refs/heads/main/music/Shrine.mp3'
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
