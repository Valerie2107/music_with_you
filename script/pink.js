//scroll au menu ---------------------------------------------
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


//pinkmode ---------------------------------------------------

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

let body = document.querySelector("body");
let buttonChangeColor = document.querySelector("#colorButton");
let isPinkMode = false; // Variable pour stocker l'état actuel du mode (sombre ou rose)
const buttonszone = document.querySelector(".buttonszone")
// const ligne = document.querySelector(".ligne")
const genreLinks = document.querySelectorAll(".genre-link");
const footer = document.querySelector("footer")
const footerLinks = document.querySelectorAll(".footer_link");
const footerdiv = document.querySelectorAll(".footer_div");
const footerp= document.querySelector(".footer_p")

function changeBodyColor(color) {
  body.style.backgroundColor = color;
}

// Vérifie si le mode rose est déjà activé dans le localStorage lors du chargement de la page
if (localStorage.getItem('bodyColor')) {
  isPinkMode = localStorage.getItem('bodyColor') === '#fadee2';
  changeBodyColor(isPinkMode ? '#fadee2' : 'grey');
  buttonChangeColor.textContent = isPinkMode ? 'Dark Mode' : 'Pink Mode';
  buttonChangeColor.style.backgroundColor = isPinkMode ? 'black' : '#fadee2';
  buttonChangeColor.style.color = isPinkMode ? 'white' : 'black';
  buttonszone.style.backgroundColor = isPinkMode ? 'pink' : 'black';
  // ligne.style.border = isPinkMode ? '1px solid #9951b3' : '1px solid white'
  genreLinks.forEach(function(link) {
    link.style.backgroundColor = isPinkMode ? '#9951b3' : 'black';
    link.style.color = isPinkMode ? 'lightpink' : 'white';
  });
  footer.style.backgroundColor = isPinkMode ? '#9951b3' : 'black';
  footerLinks.forEach(function(link) {
    link.style.color = isPinkMode ? 'pink' : 'white';
  });
  footerdiv.forEach(function(link) {
    link.style.color = isPinkMode ? 'black' : 'white';
  });
  footerp.style.color = isPinkMode ? '#741b1e' : 'grey'
}

buttonChangeColor.addEventListener('click', function() {
  // Met à jour l'état du mode et la couleur en conséquence
  isPinkMode = !isPinkMode;
  changeBodyColor(isPinkMode ? '#fadee2' : 'grey');
  localStorage.setItem('bodyColor', isPinkMode ? '#fadee2' : 'grey');
  // Met à jour le texte et les styles du bouton
  this.textContent = isPinkMode ? 'Dark Mode' : 'Pink Mode';
  this.style.backgroundColor = isPinkMode ? 'black' : '#fadee2';
  this.style.color = isPinkMode ? 'white' : 'black';
  //buttonszone
  buttonszone.style.backgroundColor = isPinkMode ? 'pink' : 'black';
  //ligne
  ligne.style.border = isPinkMode ? '1px solid #9951b3' : '1px solid white'
  // Parcours chaque lien et change sa couleur de fond
  genreLinks.forEach(function(link) {
    link.style.backgroundColor = isPinkMode ? '#9951b3' : 'black';
    link.style.color = isPinkMode ? 'lightpink' : 'white';
  });
  //footer
  footer.style.backgroundColor = isPinkMode ? '#9951b3' : 'black';
  //footer links
  footerLinks.forEach(function(link) {
    link.style.color = isPinkMode ? 'pink' : 'white';
  });
  footerdiv.forEach(function(link) {
    link.style.color = isPinkMode ? 'black' : 'white';
  });
  footerp.style.color = isPinkMode ? '#741b1e' : 'grey'
});