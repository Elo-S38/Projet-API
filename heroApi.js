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

