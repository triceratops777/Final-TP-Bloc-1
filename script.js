document.getElementById("cv").onclick = function() {
    document.getElementById("cvimg").style.visibility = "visible";
}

document.getElementById("cvimg").onclick = function() {
    document.getElementById("cvimg").style.visibility = "hidden";
}

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
