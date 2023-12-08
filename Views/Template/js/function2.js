//Ce truc marchait et ça marche plus
function animateCountdown(startValue, endValue) {
    let reponse = document.querySelector('.reponse');
    let bonne_reponse = "2050";
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
                deuxième_question();
            }
        }, 50); // Interval en millisecondes
    }
}

export function verifier_reponse() {
    console.log("12")
    const question = document.querySelector('.question');
    const reponse = document.querySelector('.reponse');
    const reponse_affiche = document.querySelector(".reponse_affiche");
    let bonne_reponse = "2050";
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
    console.log("123")
    const suivant_un = document.querySelector(".suivant_un");
    suivant_un.addEventListener("click", function () {
        document.querySelector(".one").style.display = "none";
        document.querySelector(".two").style.display = "block";
        document.querySelector(".three").style.display = "none";
        document.querySelector(".four").style.display = "none";
        deuxième_question_suivant () 
        
    })
    
}
//question 2
export function deuxième_question_suivant () {
    console.log('question 2')
    // const reponse2 = document.querySelector('.reponse_deux');
    const boutons2 = document.querySelectorAll('.bouton_deux');
    let bonne_reponse = "b";
    const reponse_affiche2 = document.querySelector(".reponse_affiche_deux");
    boutons2.forEach(function(bouton_deux) {
        bouton_deux.addEventListener('click', function () {
            console.log('toto')
              if (this.value === bonne_reponse) {
            console.log("Bonne réponse");
            reponse_affiche2.innerHTML = "<p> Bonne réponse2! <br>Votre réponse:" + this.value + "</p>"  + "<button class='suivant_deux'>suivant"; 
            trois ()
        } else {
            console.log("Essaie encore");
            reponse_affiche2.innerHTML = "<p> Mauvaise réponse2!! <br> Votre réponse:" + this.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_deux'>suivant";
            trois ()
        }
        })
      
    })

   
    // const reponse_affiche2 = document.querySelector(".reponse_affiche_deux");
    // if (reponse2.value === bonne_reponse) {
    //     console.log("Bonne réponse");
    //     reponse_affiche2.innerHTML = "<p> Bonne réponse2! <br>Votre réponse:" + reponse2.value + "</p>"  + "<button class='suivant_deux'>suivant";
    // } else {
    //     console.log("Essaie encore");
    //     reponse_affiche2.innerHTML = "<p> Mauvaise réponse2!! <br> Votre réponse:" + reponse2.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_deux'>suivant"
    // }

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
function quatre () {
    const suivant_un = document.querySelector(".suivant_trois");
    suivant_un.addEventListener("click", function () {
        document.querySelector(".one").style.display = "none";
        document.querySelector(".two").style.display = "none";
        document.querySelector(".three").style.display = "none";
        document.querySelector(".four").style.display = "block";
        document.querySelector(".five").style.display = "none";

        let bonne_reponse = "Heyy";
        const question = document.querySelector('.question2');
        const reponse3 = document.querySelector('.reponse_trois');
        const reponse_affiche3 = document.querySelector(".reponse_affiche_deux");
        let number = 0;

        
    })
    
}
//question 4
export function quatre_question_suivant () {
    console.log("4")
    const reponse4 = document.querySelector('.reponse_quatre');
    let bonne_reponse = "Hello";
    const reponse_affiche4 = document.querySelector(".reponse_affiche_quatre");
    if (reponse4.value === bonne_reponse) {
        console.log("Bonne réponse");
        reponse_affiche4.innerHTML = "<p> Bonne réponse3! <br>Votre réponse:" + reponse4.value + "</p>"  + "<button class='suivant_quatre'>suivant";
    } else {
        console.log("Essaie encore");
        reponse_affiche4.innerHTML = "<p> Mauvaise réponse3!! <br> Votre réponse:" + reponse4.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_quatre'>suivant"
    }
    cinq ()
}
function cinq () {
    const suivant_un = document.querySelector(".suivant_quatre");
    suivant_un.addEventListener("click", function () {
        document.querySelector(".one").style.display = "none";
        document.querySelector(".two").style.display = "none";
        document.querySelector(".three").style.display = "none";
        document.querySelector(".four").style.display = "none";
        document.querySelector(".five").style.display = "block";

        let bonne_reponse = "Heyy";
        const question = document.querySelector('.question2');
        const reponse3 = document.querySelector('.reponse_trois');
        const reponse_affiche3 = document.querySelector(".reponse_affiche_deux");
        let number = 0;

        
    })
    
}
//question 5
export function cinq_question_suivant () {
    console.log("5")
    const reponse5 = document.querySelector('.reponse_cinq');
    let bonne_reponse = "Hello";
    const reponse_affiche5 = document.querySelector(".reponse_affiche_cinq");
    if (reponse5.value === bonne_reponse) {
        console.log("Bonne réponse");
reponse_affiche5.innerHTML = "<p> Bonne réponse3! <br>Votre réponse:" + reponse5.value + "</p>" + "<button class='suivant_cinq'>suivant";
    } else {
        console.log("Essaie encore");
        reponse_affiche5.innerHTML = "<p> Mauvaise réponse3!! <br> Votre réponse:" + reponse5.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_cinq'>suivant"
    }
    six ()
}

function six () {
    const suivant_un = document.querySelector(".suivant_cinq");
    suivant_un.addEventListener("click", function () {
        document.querySelector(".one").style.display = "none";
        document.querySelector(".two").style.display = "none";
        document.querySelector(".three").style.display = "none";
        document.querySelector(".four").style.display = "none";
        document.querySelector(".five").style.display = "none";
        document.querySelector(".six").style.display = "block";

        let bonne_reponse = "Heyy";
        const question = document.querySelector('.question2');
        const reponse3 = document.querySelector('.reponse_trois');
        const reponse_affiche3 = document.querySelector(".reponse_affiche_deux");
        let number = 0;

        
    })
    
}
//question 6
export function six_question_suivant () {
    console.log("6")
    const reponse6 = document.querySelector('.reponse_six');
    let bonne_reponse = "Hello";
    const reponse_affiche6 = document.querySelector(".reponse_affiche_six");
    if (reponse6.value === bonne_reponse) {
        console.log("Bonne réponse");
reponse_affiche6.innerHTML = "<p> Bonne réponse3! <br>Votre réponse:" + reponse6.value + "</p>" + "<button class='suivant_cinq'>suivant";
    } else {
        console.log("Essaie encore");
        reponse_affiche6.innerHTML = "<p> Mauvaise réponse3!! <br> Votre réponse:" + reponse6.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_cinq'>suivant"
    }
    six ()
}