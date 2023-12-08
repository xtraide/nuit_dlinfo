import {verifier_reponse, deuxième_question_suivant, troisième_question_suivant} from './function2.js';
const valider = document.querySelector('.valider');

valider.addEventListener('click', verifier_reponse);

const valider2 = document.querySelector('.valider_deux');
valider2.addEventListener('click', deuxième_question_suivant);

const valider3 = document.querySelector('.valider_trois');
valider3.addEventListener('click', troisième_question_suivant);