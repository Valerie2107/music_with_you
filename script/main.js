let myBtns = document.querySelector(".buttons")

// fetch(`https://deezerdevs-deezer.p.rapidapi.com/infos?rapidapi-key=19b3d652a3msh4937caeed36c230p1b3c54jsn1da2ad719459&rapidapi-host=deezerdevs-deezer.p.rapidapi.com`) fonctionne pour info en général
//ici on teste avec info - ça marche
// aussi testé avec ma playlist plaisir coupable - playlist/8248370362 - ça marche



function sortMusic(music){  //attribute correspondra au data-attribute en argument qui sera dans le eventListener

  fetch(`https://deezerdevs-deezer.p.rapidapi.com/${music}?rapidapi-key=6e9b5b7007msh37e933091d37056p1da7e9jsnb8a274dd7b51&redirect_uri=deezerdevs-deezer.p.rapidapi.com`)
  .then(response => response.json())
  .then(data => {
    console.log(data);

  })
  
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
  })
}

myBtns.addEventListener('click', function(e){
  if(e.target.classList.contains("btn")){  //pour vérifier si on est bien sur un bouton avec la classList btn
  sortMusic(e.target.getAttribute("data-music"))

  }
})

//scroll au menu
let navbar = document.querySelector(".navbar")
let lastScrollay = 0

function handleScroll(){
  if (window.innerWidth > 1000){
    let dejaScrollay = Math.max(window.scrollY, 0)
    if (dejaScrollay > lastScrollay){
      navbar.classList.add("slide")
      
    } else {
      navbar.classList.remove("slide")
    }
    lastScrollay = dejaScrollay
    
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

//Dark and Pink Mode
let body = document.querySelector("body")
let buttonChangeColor = document.querySelector("#colorButton")

function changeBodyColor(color){
  body.style.backgroundColor = color;
}

if (localStorage.getItem('bodyColor')){
  changeBodyColor(localStorage.getItem('bodyColor'));
  buttonChangeColor.textContent = 'Dark Mode'
  buttonChangeColor.style.backgroundColor = 'black'
  buttonChangeColor.style.color = 'white'
}

buttonChangeColor.addEventListener('click', function(){
  if (body.style.backgroundColor === 'pink'){
    changeBodyColor('grey');
    localStorage.removeItem('bodyColor')
    this.textContent = 'Pink Mode'
    buttonChangeColor.style.backgroundColor = 'pink'
    buttonChangeColor.style.color = 'black'
  } else {
    changeBodyColor('pink');
    localStorage.setItem('bodyColor', 'pink')
    this.textContent = 'Dark Mode'
    buttonChangeColor.style.backgroundColor = 'black'
    buttonChangeColor.style.color = 'white'
  }

})





// fetch(`https://deezerdevs-deezer.p.rapidapi.com/infos?rapidapi-key=19b3d652a3msh4937caeed36c230p1b3c54jsn1da2ad719459&rapidapi-host=deezerdevs-deezer.p.rapidapi.com`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
    
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })

let googleMusic = document.querySelector(".searchbar button")
let googleInput = document.querySelector(".searchbar input")
let resultatsRecherche
let fichesPlaylist = document.querySelector(".fichesPlaylist")

let album = document.querySelectorAll(".hollo")

// let myBtns = document.querySelector(".buttons")

// fetch(`https://deezerdevs-deezer.p.rapidapi.com/infos?rapidapi-key=19b3d652a3msh4937caeed36c230p1b3c54jsn1da2ad719459&rapidapi-host=deezerdevs-deezer.p.rapidapi.com`) fonctionne pour info en général

function searchMusic(artiste){  //search correspondra au googleInput.value en argument qui sera dans le googleMusic.addEventListener
  
  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artiste}&rapidapi-key=6e9b5b7007msh37e933091d37056p1da7e9jsnb8a274dd7b51&redirect_uri=deezerdevs-deezer.p.rapidapi.com`)
  .then(response => response.json())
  .then(data => {
    console.log(data); //en réponse on aura plusieurs résultats 
    //je dois ranger et stocker mes resultats dans un let qui sera un array que je vais créer en dehors de cette fonction pour pouvoir l'utiliser partout (let resultatsRecherche) --> scope
    console.log(data.data.length);
    console.log(data.data[0].album.cover);
    console.log(data.data[0].album.title);
    console.log(data.data[0].artist.name);
    for (let i = 0; i <= data.data.length; i++) {
      console.log(i);
      album.innerHTML += `
      <a href="" class="swiper-slide">
        <div class="container-swiper-img">
            <img src="${data.data[i].album.cover_big}" alt="">
            <div class="container-svg-play">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 384 512">
                    <path fill="#fff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                </svg>
            </div>
        </div>
        <div class="container-swiper-txt">
            <h3>${data.data[i].title}</h3>
            <p>${data.data[i].artist.name}</p>
        </div>
      </a>
      `
    }


  //   data.data.forEach(function(onealbum) {
  //     album.innerHTML += `
  //     <a href="" class="swiper-slide">
  //       <div class="container-swiper-img">
  //           <img src="${onealbum.album.cover_big}" alt="">
  //           <div class="container-svg-play">
  //               <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 384 512">
  //                   <path fill="#fff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
  //               </svg>
  //           </div>
  //       </div>
  //       <div class="container-swiper-txt">
  //           <h3>${onealbum.album.title}</h3>
  //           <p>${onealbum.artist.name}</p>
  //       </div>
  //     </a>
  //     `
  // });
  
  //   fichesPlaylist.innerHTML = ``
  //   resultatsRecherche = data
  //   resultatsRecherche.forEach(function(resultat){
  //   fichesPlaylist.innerHTML += 
  //   `
  //   <a href="" class="swiper-slide">
  //     <div class="container-swiper-txt">
  //         <p class="upperc">${resultat.album.tracklist}</p>
  //         <h2>${resultat.album.title}</h2>
  //         <p>${resultat.album.title}</p>
  //     </div>
  //     <div>
  //         <img src="${resultat.album.cover_small}" alt="">
  //     </div>
  //     <div> 
  //     ${resultat.album.id} <br>
  //     ${resultat.album.title} <br>
  //     ${resultat.album.tracklist} <br>
  //     ${resultat.artist.id} <br>
  //     ${resultat.artist.name} <br>
  //     ${resultat.artist.tracklist} <br>
  //     id track ${resultat.id} <br>
  //     ${resultat.preview} <br>
  //     ${resultat.title} <br>
  //     </div>
  // </a>
  //   `
  // })
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