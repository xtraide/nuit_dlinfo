import { setResult, showQuestion, showScore, showScreen } from './function.js'; 

const quizzState = {
    score : 0,
    currentQuestion : 0
  }
  
const questions = [
    {
      question: 'Quel est le langage de programmation utilisé pour le développement web ?',
      answers: ['Java', 'Python', 'JavaScript'],
      correctAnswerIndex: 2,
    },
    {
        question: "Qu'est-ce que HTML et quelle est sa fonction principale dans le développement Web ?",
        answers: [
          "Choix 1",
          'Choix 2',
          "Choix 3",
          'Choix 4',
        ],
        correctAnswerIndex: 3,
      }
   
] 

showScreen('quizz')
showQuestion(questions[quizzState.currentQuestion])
showScore(quizzState)

const quizzScreen = document.querySelector('#quizz')
quizzScreen.onclick = (event) => {
  // Permet de s'assurer qu'on clique bien sur un élément portant la classe CSS ".answer"
  const buttonClicked = event.target
  if (!buttonClicked.matches('.answer')) {
    return
  }

  // Récupération de l'indice de la réponse sur laquelle on a cliqué
  const answerIndex = Number(buttonClicked.dataset.id)

  // Vérification si cet indice correspond à celui de la bonne réponse
  if (answerIndex === questions[quizzState.currentQuestion].correctAnswerIndex) {
    quizzState.score++ // si oui, on augmente le score
  }

  // Puis, on incrémente l'index de la question en cours
  quizzState.currentQuestion++;

  // Si on atteint la fin du quizz, on remplit l'écran de résultat et on l'affiche
  if (quizzState.currentQuestion === questions.length) {
    setResult(quizzState)
    showScreen('result')
  }
  // Sinon, on passe simplement à la question suivante en mettant le score à jour
  else {
    showQuestion(questions[quizzState.currentQuestion])
    showScore(quizzState)
  }
}
