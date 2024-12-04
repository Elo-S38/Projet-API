const searchButtonMenu = document.getElementById("search-buttonMenu");
const heroNameInputMenu = document.getElementById("heroNameInputMenu");

async function isValid(name) {
    const url = `${API_BASE_URL}/${ACCESS_TOKEN}/search/${name}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.response === "success") {
            return true;
        }
    } catch (error) {
        console.error("Error fetching superhero data:", error);
        return false;
    }
}

searchButtonMenu.addEventListener("click", () => {
    const heroName = heroNameInputMenu.value.trim();
	if (heroName) {
		isValid(heroName).then(result => {
			if (result == true) {
				window.location.href = `heroAPI.html?heroName=${encodeURIComponent(heroName)}`;
		} else {
			alert("Couldn't find this hero, sorry bro.");
		}
		});
	} else {
		alert("Please enter a superhero name.");
	}
});

// Ajout d'un listener pour la touche Entrée
heroNameInputMenu.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const heroName = heroNameInputMenu.value.trim();
        if (heroName) {
			isValid(heroName).then(result => {
				if (result == true) {
					window.location.href = `heroAPI.html?heroName=${encodeURIComponent(heroName)}`;
			} else {
				alert("Couldn't find this hero, sorry bro.");
			}
			});
        } else {
            alert("Please enter a superhero name.");
        }
    }
});