// adding CV and hiding on click

document.getElementById("cv").onclick = function() {
    document.getElementById("cvimg").style.visibility = "visible";
}

document.getElementById("cvimg").onclick = function() {
    document.getElementById("cvimg").style.visibility = "hidden";
}


// adding filter of the dev projects
document.addEventListener("DOMContentLoaded", () => {

    // querySelectorAll gets all elements and puts them in a NodeList, which is array-like, but not an array; access with index as usual
    
    let buttons = document.querySelectorAll(".filterbuttons button");
    let cards = document.querySelectorAll(".dev-card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            //dataset lets you access custom attributes startin with data-
            let buttonCategory = button.dataset.category;
            cards.forEach(card => {
                let cardCategory = card.dataset.category;

                if(buttonCategory === "tous" || cardCategory === buttonCategory){
                    card.style.display = "block";
                }else{
                    card.style.display = "none";
                }
            });
        });
    });
});

// photography slideshow 
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].classList.add("show");
  setTimeout(showSlides, 4000);
}


document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // stop default form submission

  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  //if user doesn't input anything
  if (!nom || !email || !message) {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Veuillez entrer un email valide.');
    return;
  }

  alert('Message envoyé !');
});



async function chargerArticle() {
    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ');
        const data = await response.json();
        console.log("Asynchrone : "+data);
        console.log("Fin appel API asynchrone");
    } catch (error) {
        console.error('Erreur lors de l’appel API', error);
    }
}

chargerArticle()