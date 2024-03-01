let googleMusic = document.querySelector(".searchbar button")
let googleInput = document.querySelector(".searchbar input")
let fichesPlaylist = document.querySelector(".fichesPlaylist")
let myBtns = document.querySelector(".buttons")

let artist = document.querySelector(".artiste")
let track = document.querySelector(".chanson")
let album = document.querySelector(".album")


function searchMusic(variableTemporaire){  //variableTemporaire correspondra au googleInput.value en argument qui sera dans le googleMusic.addEventListener
  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${variableTemporaire}&rapidapi-key=6e9b5b7007msh37e933091d37056p1da7e9jsnb8a274dd7b51&redirect_uri=deezerdevs-deezer.p.rapidapi.com`)
  .then(response => response.json())
  .then(data => {

    //à chaque fois je vide tous les résultats pour pouvoir charger les résultats de ma recherche
    artist.innerHTML = ``
    track.innerHTML  = ``
    album.innerHTML  = ``

    console.log(data); //en réponse on aura plusieurs résultats 
    //je dois ranger et stocker mes resultats dans un let qui sera un array que je vais créer en dehors de cette fonction pour pouvoir l'utiliser partout (let resultatsRecherche) --> scope

    // console.log(data.data.length);
    // console.log(data.data[0].album.cover);
    // console.log(data.data[0].album.title);
    // console.log(data.data[0].artist.name);

    for (let i = 0; i < data.data.length; i++) {
      // console.log(i);

      artist.innerHTML += 
      `
        <div class="swiper-slide">
          <div class="container-swiper-img">
              <img src="${data.data[i].artist.picture}" alt="${data.data[i].artist.name}">
              <a href="">
                <div class="container-svg-play">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 384 512">
                        <path fill="#fff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                    </svg>
                </div>
              </a>
          </div>
          <div class="container-swiper-txt">
              
              <h3><a href="${data.data[i].artist.link}" target="_blank">${data.data[i].artist.name}</a></h3>
          </div>
        </div>
        `
      track.innerHTML += 
      `
      <div class="swiper-slide">
        <div class="container-swiper-img">
            <img src="${data.data[i].album.cover}" alt="${data.data[i].album.title}">
            <a href="">
              <div class="container-svg-play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 384 512">
                      <path fill="#fff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                  </svg>
              </div>
            </a>
        </div>
        <div class="container-swiper-txt">
            <a href="${data.data[i].link}" target="_blank"><h3>${data.data[i].title}</h3></a>
            <p>${data.data[i].artist.name}</p>
        </div>
      </div>
      `
      album.innerHTML += 
      `
      <div class="swiper-slide">
        <div class="container-swiper-img">

            <div class="conteneur-livre">
              <div class="livre">
                <div class="couverture">
                  <img src="${data.data[i].album.cover}" alt="${data.data[i].album.cover}" />
                </div>
                <div class="tranche">
                  <div class=titre>${data.data[i].album.title}</div>
                </div>
              </div>
            </div>

            <a href="">
              <div class="container-svg-play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 384 512">
                      <path fill="#fff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                  </svg>
              </div>
            </a>
        </div>
        <div class="container-swiper-txt">
            <h3><a href="${data.data[i].tracklist}" target="_blank">${data.data[i].title}</a></h3>
            <p>${data.data[i].artist.name}</p>
        </div>
      </div>
      `
      }
  })
    .catch(error => {console.log("Erreur lors de la récup des données :", error);
  })

}

googleMusic.addEventListener('click', function(event){
  event.preventDefault(); // ma page ne sera pas rechargée par défaut bien que le clic ait lieu à l'intérieur d'un form  https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault
  // console.log('test');
  searchMusic(googleInput.value)
})

myBtns.addEventListener('click', function(e){
  if(e.target.classList.contains("btn")){  //pour vérifier si on est bien sur un bouton avec la classList btn  
    sortMusic(e.target.getAttribute("data-music"))
  }
})

searchMusic("rhumy")  //par défaut au chargement de la page, il chargera tout avec comme valeur de recherche "rhumy"