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

//form validation

document.addEventListener("DOMContentLoaded", function () {
  try {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let isValid = true;

      const nom = document.getElementById("nom");
      const nomError = nom.nextElementSibling;
      if (nom.value.trim() === '' || nom.value.trim().length <= 1) {
        nomError.textContent = "Le nom est requis.";
        nomError.classList.add("active");
        isValid = false;
      } else {
        nomError.classList.remove("active");
      }

      const email = document.getElementById("email");
      const emailError = email.nextElementSibling;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email.value.trim() === '' || !emailPattern.test(email.value.trim())) {
        emailError.textContent = "Adresse email invalide.";
        emailError.classList.add("active");
        isValid = false;
      } else {
        emailError.classList.remove("active");
      }

      const message = document.getElementById("message");
      const messageError = message.nextElementSibling;
      if (message.value.trim() === '') {
        messageError.textContent = "Le message est requis.";
        messageError.classList.add("active");
        isValid = false;
      } else {
        messageError.classList.remove("active");
      }

      if (isValid) {
        alert("Formulaire soumis avec succès !");
      }
    });
  } catch (e) {
    console.error("Erreur lors de la validation du formulaire :", e);
  }
});




