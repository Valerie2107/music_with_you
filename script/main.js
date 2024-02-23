let googleMusic = document.querySelector(".searchbar button")
let googleInput = document.querySelector(".searchbar input")
let resultatsRecherche
let fiche

let myBtns = document.querySelector(".buttons")

// fetch(`https://deezerdevs-deezer.p.rapidapi.com/infos?rapidapi-key=19b3d652a3msh4937caeed36c230p1b3c54jsn1da2ad719459&rapidapi-host=deezerdevs-deezer.p.rapidapi.com`) fonctionne pour info en général

function searchMusic(search){  //search correspondra au googleInput.value en argument qui sera dans le googleMusic.addEventListener

  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}&rapidapi-key=6e9b5b7007msh37e933091d37056p1da7e9jsnb8a274dd7b51&redirect_uri=deezerdevs-deezer.p.rapidapi.com`)
  .then(response => response.json())
  .then(data => {
    console.log(data); //en réponse on aura plusieurs résultats 
    //je dois ranger et stocker mes resultats dans un let qui sera un array que je vais créer en dehors de cette fonction pour pouvoir l'utiliser partout (let resultatsRecherche) --> scope
    /* resultatsRecherche = data.data
    resultatsRecherche.forEach(function(resultat){
    fiche.innerHTML += `<div>${resultat.album}</div>`
    })*/




  })
  
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
  })

}





googleMusic.addEventListener('click', function(event){
  event.preventDefault(); // ma page ne sera pas rechargée par défaut bien que le clic ait lieu à l'intérieur d'un form  https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault
  // console.log('pierre a appuyé sur son bouton');
  searchMusic(googleInput.value)

})


myBtns.addEventListener('click', function(e){
  if(e.target.classList.contains("btn")){  //pour vérifier si on est bien sur un bouton avec la classList btn  
    sortMusic(e.target.getAttribute("data-music"))

  }
})