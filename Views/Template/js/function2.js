function animateCountdown(startValue, endValue) {
    let question = document.querySelector('.question');
    let reponse = document.querySelector('.reponse');
    let bonne_reponse = "2013";
    let reponse_affiche = document.querySelector(".reponse_affiche");
    let number = 0;
    // Convertir les valeurs en nombres
    let startNumber = parseInt(startValue, 10);
    let endNumber = parseInt(endValue, 10);

    // Vérifier si les valeurs sont des nombres valides
    if (!isNaN(startNumber) && !isNaN(endNumber)) {
        // Déterminer le pas d'animation en fonction de la différence entre les deux valeurs
        let step = (startNumber > endNumber) ? -1 : 1;
        
        // Démarrer l'animation avec une certaine intervalle
        let interval = setInterval(function() {
            // Mettre à jour la valeur du champ de texte
            reponse.value = startNumber;

            // Mettre à jour la valeur affichée
            reponse_affiche.innerHTML = "<p> Mauvaise réponse2!! <br> Votre réponse:" + reponse.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_un'>suivant</button>";

            // Passer à la prochaine valeur
            startNumber += step;

            // Arrêter l'animation lorsque la valeur atteint la bonne réponse
            if ((step === 1 && startNumber > endNumber) || (step === -1 && startNumber < endNumber)) {
                clearInterval(interval);
            }deuxième_question ()
        }, 50); deuxième_question ()// Interval en millisecondes
    }}
export function verifier_reponse() {
    const question = document.querySelector('.question');
    const reponse = document.querySelector('.reponse');
    let bonne_reponse = "2013";
    const reponse_affiche = document.querySelector(".reponse_affiche");
    let number = 0;

    if (reponse.value === bonne_reponse) {
        console.log("Bonne réponse");
        reponse_affiche.innerHTML = "<p> Bonne réponse! <br>Votre réponse:" + reponse.value + "</p>"  + "<button class='suivant_un'>suivant";
    } else {
        console.log("Essaie encore");
        reponse_affiche.innerHTML = "<p> Mauvaise réponse!! <br> Votre réponse:" + reponse.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_un'>suivant"
        animateCountdown(reponse.value, bonne_reponse);
    }
    deuxième_question ()
}
//question 1
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
    
}
//question 2
export function deuxième_question_suivant () {
    const reponse2 = document.querySelector('.reponse_deux');
    let bonne_reponse = "Hello";
    const reponse_affiche2 = document.querySelector(".reponse_affiche_deux");
    if (reponse2.value === bonne_reponse) {
        console.log("Bonne réponse");
        reponse_affiche2.innerHTML = "<p> Bonne réponse2! <br>Votre réponse:" + reponse2.value + "</p>"  + "<button class='suivant_deux'>suivant";
    } else {
        console.log("Essaie encore");
        reponse_affiche2.innerHTML = "<p> Mauvaise réponse2!! <br> Votre réponse:" + reponse2.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_deux'>suivant"
    }
    trois ()
}
function trois () {
    const suivant_un = document.querySelector(".suivant_deux");
    suivant_un.addEventListener("click", function () {
        document.querySelector(".one").style.display = "none";
        document.querySelector(".two").style.display = "none";
        document.querySelector(".three").style.display = "block";
        document.querySelector(".four").style.display = "none";

        let bonne_reponse = "Heyy";
        const question = document.querySelector('.question2');
        const reponse3 = document.querySelector('.reponse_trois');
        const reponse_affiche3 = document.querySelector(".reponse_affiche_deux");
        let number = 0;

        
    })
    
}
//question 3
export function troisième_question_suivant () {
    console.log("3")
    const reponse3 = document.querySelector('.reponse_trois');
    let bonne_reponse = "Hello";
    const reponse_affiche3 = document.querySelector(".reponse_affiche_trois");
    if (reponse3.value === bonne_reponse) {
        console.log("Bonne réponse");
        reponse_affiche3.innerHTML = "<p> Bonne réponse3! <br>Votre réponse:" + reponse3.value + "</p>"  + "<button class='suivant_trois'>suivant";
    } else {
        console.log("Essaie encore");
        reponse_affiche3.innerHTML = "<p> Mauvaise réponse3!! <br> Votre réponse:" + reponse3.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_trois'>suivant"
    }
    quatre ()
}
// function trois () {
//     const suivant_un = document.querySelector(".suivant_deux");
//     suivant_un.addEventListener("click", function () {
//         document.querySelector(".one").style.display = "none";
//         document.querySelector(".two").style.display = "none";
//         document.querySelector(".three").style.display = "block";
//         document.querySelector(".four").style.display = "none";

//         let bonne_reponse = "Heyy";
//         const question = document.querySelector('.question2');
//         const reponse3 = document.querySelector('.reponse_trois');
//         const reponse_affiche3 = document.querySelector(".reponse_affiche_trois");
//         let number = 0;

        
//     })
    
// }
// //question 3
// export function troisième_question_suivant () {
//     const reponse3 = document.querySelector('.reponse_trois');
//     let bonne_reponse = "Hello";
//     const reponse_affiche3 = document.querySelector(".reponse_affiche_trois");
//     if (reponse3.value === bonne_reponse) {
//         console.log("Bonne réponse");
//         reponse_affiche3.innerHTML = "<p> Bonne réponse3! <br>Votre réponse:" + reponse3.value + "</p>"  + "<button class='suivant_quatre'>suivant";
//     } else {
//         console.log("Essaie encore");
//         reponse_affiche3.innerHTML = "<p> Mauvaise réponse3!! <br> Votre réponse:" + reponse3.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_quatre'>suivant"
//     }}