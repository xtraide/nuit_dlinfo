function verifier_reponse () {
    
}
export function showScreen(id) {
    const screens = document.querySelectorAll('body > section')
    // Masque tous les écrans
    screens.forEach((screen) => {
      screen.style.display = 'none'
    })
   
    // ... et affiche l'écran portant l'ID en paramètre
    const screen = document.querySelector(`#${id}`)
    screen.style.display = 'block'
  }
  
  export function showQuestion({ question, answers }) {
  
    // Création du HTML de la question
    let html = `<p>${question}</p>`;
    for (const [index, answer] of answers.entries()) {
      html += `<button class="answer" data-id="${index}">${answer}</button>`
    }
  
    // Injecte le HTML dans la page
    const currentQuestion = document.querySelector('#current-question')
    currentQuestion.innerHTML = html
  }
  
  export function showScore(quizzState) {
    const score = document.querySelector('#score')
    score.innerHTML = quizzState.score
  }
  
  export function setResult(quizzState) {
    const BEST_SCORE_POSSIBLE = quizzState.currentQuestion
  
    let message = null
  
    if (quizzState.score === BEST_SCORE_POSSIBLE) {
      message = 'Un sans fautes ! Vous êtes un dieu de la culture numérique !'
    }
    else if (quizzState.score >= BEST_SCORE_POSSIBLE * 0.75) {
      message = 'Bravo ! Vous êtes parmis les meilleurs des meilleurs !'
    }
    else if (quizzState.score >= BEST_SCORE_POSSIBLE * 0.5) {
      message = 'Bon résultat, vous êtes au dessus de la moyenne !'
    }
    else if (quizzState.score >= BEST_SCORE_POSSIBLE * 0.25) {
      message = 'Peu mieux faire, il vous reste encore quelques sujets à étudier. Courage !'
    }
    else {
      message = 'Pas glop ! Vous devriez revoir votre culture numérique et réessayer ce Quizz'
    }
  
    const appreciation = document.querySelector('#appreciation')
    appreciation.innerHTML = message
  
    const scoreFinal = document.querySelector('#score-final')
    scoreFinal.innerHTML = quizzState.score
  }
