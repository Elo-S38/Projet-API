async function logSuperHeroPage(name) {
	const res = await fetch(`https://superheroapi.com/api/c10afa1362f8634b2128f164904f9360/search/${name}`);
	
	// on récupère le html de la page en texte :
	const pageContent = await res.text();
	
	// puis on l'affiche
	console.log(pageContent);
}
logSuperHeroPage('vegeta');
 

// const searchInput = document.getElementById('searchInput')
// const searchButton = document.getElementById('searchButton');


// searchButton.addEventListener("click", function(logSuperHeroPage) {


    
// })


// pageContent.forEach((name) => { //Boucle forEach pour parcourir le tableau offers
//     const nameElement = document.innerHTML(); //On crée un élément HTML
//     nameElement.className = "name"; //On lui donne une classe
//     nameElement.innerHTML = `                           
//          <h2 class="titre">Titre : ${name.powerstats}</h2>
//         <p class="technologie">Technologie : ${name.publisher}</p>
//         <p class="description">Description : ${name.alignment}</p>`; */ //On injecte les contenus dans l'élément HTML, dans des balises différentes
//     nameContainer.appendChild(nameElement); 
// });



console.clear();
// instigate our audio context
// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
// load some sound
const audioElement = document.querySelector('audio');
const track = audioCtx.createMediaElementSource(audioElement);
const playButton = document.querySelector('.tape-controls-play');
// play pause audio
playButton.addEventListener('click', function() {
    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
    // if track is playing pause it
    } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
    }
    let state = this.getAttribute('aria-checked') === "true" ? true : false;
    this.setAttribute( 'aria-checked', state ? "false" : "true" );
}, false);
// if track ends
audioElement.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
    playButton.setAttribute( "aria-checked", "false" );
}, false);
// volume
const gainNode = audioCtx.createGain();
const volumeControl = document.querySelector('[data-action="volume"]');
volumeControl.addEventListener('input', function() {
    gainNode.gain.value = this.value;
}, false);
// panning
const pannerOptions = {pan: 0};
const panner = new StereoPannerNode(audioCtx, pannerOptions);
const pannerControl = document.querySelector('[data-action="panner"]');
pannerControl.addEventListener('input', function() {
    panner.pan.value = this.value;
}, false);
// connect our graph
track.connect(gainNode).connect(panner).connect(audioCtx.destination);
const powerButton = document.querySelector('.control-power');
powerButton.addEventListener('click', function() {
    if (this.dataset.power === 'on') {
        audioCtx.suspend();
        this.dataset.power = 'off';
    } else if (this.dataset.power === 'off') {
        audioCtx.resume();
        this.dataset.power = 'on';
    }
    this.setAttribute( "aria-checked", state ? "false" : "true" );
    console.log(audioCtx.state);
}, false);
// Track credit: Outfoxing the Fox by Kevin MacLeod under Creative Commons