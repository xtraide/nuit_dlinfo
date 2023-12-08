
import { setResult, showQuestion, showScore, showScreen } from './function.js';

const quizzState = {
  score: 0,
  currentQuestion: 0,
};

const questions = [
  {
    question: 'Quel est le gaz à effet de serre le plus abondant responsable du réchauffement climatique?',
    answers: ['Dioxyde de carbone (CO2)', 'Méthane (CH4)', "Protoxyde d'azote (N2O)", "Vapeur d'eau (H2O)", "Ozone (O3)"],
    correctAnswerIndex: 0,
  },
  {
      question: "Les vaches contribuent-elles au réchauffement climatique en émettant du gaz à effet de serre ?",
      answers: [
        "A) Vrai (ils pètent ça fait du méthane qui contribue au réchauffement climatique)",
        'B) Faux',
        "C) Seulement si elles portent des pulls en laine",
        'D) Dépend de la météo dans la prairie',
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Au cours des dernières décennies, la température mondiale moyenne a augmenté d'environ combien de degrés Celsius en raison du réchauffement climatique d'origine humaine?",
      answers: [
        "0,5°C",
        '1,5°C (vrai)',
        "2,5°C",
        '4,5°C',
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Dans quelle décennie les scientifiques estiment-ils que les effets graves du réchauffement climatique pourraient être irréversibles si des mesures significatives ne sont pas prises ?",
      answers: [
        "A) Années 2030",
        'B) Années 2040',
        "C) Années 2050",
        'D) Années 2060',
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Parmi les options suivantes, quel moyen est généralement considéré comme l'un des plus efficaces pour atténuer le réchauffement climatique en réduisant les émissions de gaz à effet de serre?",
      answers: [
        "1) Utiliser des ampoules à faible consommation d'énergie",
        '2) Planter des arbres massivement',
        "3) Développer des énergies renouvelables comme l'éolien et le solaire (vrai)",
        '4) Utiliser des transports publics au lieu de véhicules individuels',
      ],
      correctAnswerIndex: 2,
    }
];

showScreen('quizz');
showQuestion(questions[quizzState.currentQuestion]);

const quizzScreen = document.querySelector('#quizz');
quizzScreen.onclick = (event) => {
  const buttonClicked = event.target;
  if (!buttonClicked.matches('.answer')) {
    return;
  }

  const answerIndex = Number(buttonClicked.dataset.id);

  if (answerIndex === questions[quizzState.currentQuestion].correctAnswerIndex) {
    quizzState.score++;
  }

  quizzState.currentQuestion++;

  if (quizzState.currentQuestion === questions.length) {
    setResult(quizzState);
    showScreen('result');
  } else {
    showQuestion(questions[quizzState.currentQuestion]);

    // Move showScore to this point to update the score after each question
    showScore(quizzState);
  }
};
