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
    let bonne_reponse = "Dioxyde de carbone (CO2)";
    const reponse_affiche2 = document.querySelector(".reponse_affiche_deux");
    boutons2.forEach(function(bouton_deux) {
        bouton_deux.addEventListener('click', function () {
            console.log('toto')
              if (this.value === bonne_reponse) {
            console.log("Bonne réponse");
            reponse_affiche2.innerHTML = "<p> Bonne réponse2! <br>Votre réponse:" + this.value + "</p>"  + "<button class='suivant_deux'>suivant"; 
            document.querySelector('.suivant_deux').addEventListener('click', function () {
                trois ()
            })
        } else {
            console.log("Essaie encore");
            reponse_affiche2.innerHTML = "<p> Mauvaise réponse2!! <br> Votre réponse:" + this.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_deux'>suivant";
            document.querySelector('.suivant_deux').addEventListener('click', function () {
                trois ()
            })
        }
        })
    })
}


//question 3
 function trois () {
    console.log('question 3')
    document.querySelector(".one").style.display = "none";
    document.querySelector(".two").style.display = "none";
    document.querySelector(".three").style.display = "block";
    document.querySelector(".four").style.display = "none";
    document.querySelector(".five").style.display = "none";
    // const reponse2 = document.querySelector('.reponse_deux');
    const boutons3 = document.querySelectorAll('.bouton_trois');
    let bonne_reponse = "Dioxyde de carbone (CO2)";
    const reponse_affiche2 = document.querySelector(".reponse_affiche_trois");
    boutons3.forEach(function(bouton_trois) {
        bouton_trois.addEventListener('click', function () {
            console.log('toto')
              if (this.value === bonne_reponse) {
            console.log("Bonne réponse");
            reponse_affiche2.innerHTML = "<p> Bonne réponse2! <br>Votre réponse:" + this.value + "</p>"  + "<button class='suivant_trois'>suivant"; 
            document.querySelector('.suivant_trois').addEventListener('click', function () {
                quatre ()
            })
        } else {
            console.log("Essaie encore");
            reponse_affiche2.innerHTML = "<p> Mauvaise réponse2!! <br> Votre réponse:" + this.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_trois'>suivant";
            document.querySelector('.suivant_trois').addEventListener('click', function () {
                quatre ()
            })
        }
        })
      
    })

}
function quatre () {
    console.log('question 4')
    document.querySelector(".one").style.display = "none";
    document.querySelector(".two").style.display = "none";
    document.querySelector(".three").style.display = "none";
    document.querySelector(".four").style.display = "block";
    document.querySelector(".five").style.display = "none";
    // const reponse2 = document.querySelector('.reponse_deux');
    const boutons4 = document.querySelectorAll('.bouton_quatre');
    let bonne_reponse = "1,5°C";
    const reponse_affiche4 = document.querySelector(".reponse_affiche_quatre");
    boutons4.forEach(function(bouton_quatre) {
        bouton_quatre.addEventListener('click', function () {
            console.log('toto')
              if (this.value === bonne_reponse) {
            console.log("Bonne réponse");
            reponse_affiche4.innerHTML = "<p> Bonne réponse2! <br>Votre réponse:" + this.value + "</p>"  + "<button class='suivant_quatre'>suivant"; 
            document.querySelector('.suivant_quatre').addEventListener('click', function () {
                cinq ()
            })
        } else {
            console.log("Essaie encore");
            reponse_affiche4.innerHTML = "<p> Mauvaise réponse2!! <br> Votre réponse:" + this.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_quatre'>suivant";
            document.querySelector('.suivant_quatre').addEventListener('click', function () {
                cinq ()
            })
        }
        })
      
    })

}
function cinq () {
    console.log('question 5')
    document.querySelector(".one").style.display = "none";
    document.querySelector(".two").style.display = "none";
    document.querySelector(".three").style.display = "none";
    document.querySelector(".four").style.display = "none";
    document.querySelector(".five").style.display = "block";
    // const reponse2 = document.querySelector('.reponse_deux');
    const boutons5 = document.querySelectorAll('.bouton_cinq');
    let bonne_reponse = "Développer des énergies renouvelables comme l'éolien et le solaire (vrai)";
    const reponse_affiche5 = document.querySelector(".reponse_affiche_cinq");
    boutons5.forEach(function(bouton_cinq) {
        bouton_cinq.addEventListener('click', function () {
            console.log('toto')
              if (this.value === bonne_reponse) {
            console.log("Bonne réponse");
            reponse_affiche5.innerHTML = "<p> Bonne réponse2! <br>Votre réponse:" + this.value + "</p>"  + "<button class='suivant_cinq'>suivant"; 
            document.querySelector('.suivant_cinq').addEventListener('click', function () {
                six ()
            })
        } else {
            console.log("Essaie encore");
            reponse_affiche5.innerHTML = "<p> Mauvaise réponse2!! <br> Votre réponse:" + this.value + "<br> la bonne réponse était:"+ bonne_reponse +"</p>" + "<button class='suivant_cinq'>suivant";
            document.querySelector('.suivant_cinq').addEventListener('click', function () {
                six ()
            })
        }
        })
      
    })

}

function six () {
    document.querySelector(".five").style.display = "none";
    document.querySelector(".gagne").style.display = "block";
}