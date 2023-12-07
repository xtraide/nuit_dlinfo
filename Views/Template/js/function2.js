export function verifier_reponse() {
    const question = document.querySelector('.question');
    const reponse = document.querySelector('.reponse');
    let bonne_reponse = "Bonne reponse";
    const reponse_affiche = document.querySelector(".reponse_affiche");
    let number = 0;

    if (reponse.value === bonne_reponse) {
        console.log("Bonne réponse");
        reponse_affiche.innerHTML = "<p> Bonne réponse! <br>Votre réponse:" + reponse.value + "</p>"  + "<button class='suivant_un'>suivant";
    } else {
        console.log("Essaie encore");
        reponse_affiche.innerHTML = "<p> Mauvaise réponse!! <br> Votre réponse:" + reponse.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_un'>suivant"
    }
    deuxième_question ()
}
function deuxième_question () {
    const suivant_un = document.querySelector(".suivant_un");
    suivant_un.addEventListener("click", function () {
        document.querySelector(".one").style.display = "none";
        document.querySelector(".two").style.display = "block";
        document.querySelector(".three").style.display = "none";
        document.querySelector(".four").style.display = "none";

        let bonne_reponse = "Hello";
        const question = document.querySelector('.question');
        const reponse2 = document.querySelector('.reponse_deux');
        const reponse_affiche2 = document.querySelector(".reponse_affiche_deux");
        let number = 0;
    })
    function deuxième_question_suivant () {
        if (reponse2.value === bonne_reponse) {
            console.log("Bonne réponse");
            reponse_affiche2.innerHTML = "<p> Bonne réponse2! <br>Votre réponse:" + reponse2.value + "</p>"  + "<button class='suivant_un'>suivant";
        } else {
            console.log("Essaie encore");
            reponse_affiche2.innerHTML = "<p> Mauvaise réponse2!! <br> Votre réponse:" + reponse2.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_un'>suivant"
        }
    }
    
}