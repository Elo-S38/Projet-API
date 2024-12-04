const searchButtonMenu = document.getElementById("search-buttonMenu");
const heroNameInputMenu = document.getElementById("heroNameInputMenu");

searchButtonMenu.addEventListener("click", () => {
    const heroName = heroNameInputMenu.value.trim();
    if (heroName) {
        // Rediriger vers heroAPI.html avec le nom du héros en paramètre
        window.location.href = `heroAPI.html?heroName=${encodeURIComponent(heroName)}`;
    } else {
        alert("Please enter a superhero name.");
    }
});

// Ajout d'un listener pour la touche Entrée
heroNameInputMenu.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const heroName = heroNameInputMenu.value.trim();
        if (heroName) {
            window.location.href = `heroAPI.html?heroName=${encodeURIComponent(heroName)}`;
        } else {
            alert("Please enter a superhero name.");
        }
    }
});