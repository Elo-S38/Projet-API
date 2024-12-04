

const API_BASE_URL = 'https://superheroapi.com/api.php';
const ACCESS_TOKEN = "c10afa1362f8634b2128f164904f9360";
const searchButton = document.getElementById("search-Button");
const heroNameInput = document.getElementById("heroNameInput");
/* const heroInfoDiv = document.getElementById("heroInfo"); */

function fetchSuperHero(name) {
    const url = `${API_BASE_URL}/${ACCESS_TOKEN}/search/${name}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.response === "success") {
          displayHeroInfo(data.results[0]);
        } else {
			alert("Couldn't find this hero, sorry bro.");
        }
      })
      .catch(error => {
        console.error("Error fetching superhero data:", error);
        alert("There was an error fetching the superhero data.");
      });
  }

  function getHeroNameFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("heroName");
}

document.addEventListener("DOMContentLoaded", () => {
    const heroName = getHeroNameFromURL();
    if (heroName) {
        fetchSuperHero(heroName);
    } else {
        alert("Please enter a superhero name.");
    }
});

  function displayHeroInfo(hero) {
    // Mettre à jour le nom du héros
    const heroNameDiv = document.getElementById("heroName");
    if (heroNameDiv) {
      heroNameDiv.innerHTML = `<h2>${hero.name}</h2>`;
    }
  
    // Mettre à jour l'image du héros
    const heroImageDiv = document.querySelector(".image img");
    if (heroImageDiv) {
      heroImageDiv.src = hero.image.url;
      heroImageDiv.alt = hero.name;
    }
  
    // Mettre à jour la description
    const descriptionDiv = document.getElementById("description");
    if (descriptionDiv) {
      descriptionDiv.innerHTML = `
        Publisher : <span class="bold">${hero.biography.publisher || "Unknown"}</span><br>
        Full-name : <span class="bold">${hero.biography["full-name"] || "Unknown"}</span><br>
        Alignement : <span class="bold">${hero.biography.alignment || "Unknown"}</span>
      `;
    }
  
    // Mettre à jour les statistiques
    const statisticsDiv = document.getElementById("statistics");
    if (statisticsDiv) {
      statisticsDiv.innerHTML = `
        Intelligence : <span class="bold">${hero.powerstats.intelligence || "Unknown"}</span><br>
        Strength : <span class="bold">${hero.powerstats.strength || "Unknown"}</span><br>
        Speed : <span class="bold">${hero.powerstats.speed || "Unknown"}</span><br>
        Durability : <span class="bold">${hero.powerstats.durability || "Unknown"}</span><br>
        Power : <span class="bold">${hero.powerstats.power || "Unknown"}</span><br>
        Combat : <span class="bold">${hero.powerstats.combat || "Unknown"}</span>
      `;
    }
  }

  searchButton.addEventListener("click", () => {
    const heroName = heroNameInput.value.trim();
    if (heroName) {
      fetchSuperHero(heroName);
    } else {
		alert("Please enter a superhero name.");
    }
  });

  // Ajout d'un listener pour l'appui sur la touche "Entrée" dans l'input
heroNameInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") { // Vérifie si la touche est "Entrée"
        const heroName = heroNameInput.value.trim();
        if (heroName) {
            fetchSuperHero(heroName);
        } else {
			alert("Please enter a superhero name.");
        }
    }
});





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