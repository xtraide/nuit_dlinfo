export function verifier_reponse() {
    const question = document.querySelector('.question');
    const reponse = document.querySelector('.reponse');
    const bonne_reponse = "Bonne reponse";
    const reponse_affiche = document.querySelector(".reponse_affiche");
    let number = 0;

    if (reponse.value === bonne_reponse) {
        console.log("Bonne réponse");
        reponse_affiche.innerHTML = "<p> Bonne réponse! <br>Votre réponse:" + reponse.value + "</p>"  + "<button>suivant";
    } else {
        console.log("Essaie encore");
        reponse_affiche.innerHTML = "<p> Mauvaise réponse!! <br> Votre réponse:" + reponse.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button>suivant"
    }
}