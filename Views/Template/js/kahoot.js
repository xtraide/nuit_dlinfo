// Import correct des fonctions
import { verifier_reponse, deuxième_question_suivant, troisième_question_suivant, quatre_question_suivant, cinq_question_suivant, six_question_suivant } from './function2.js';
const valider = document.querySelector('.valider');

valider.addEventListener('click', verifier_reponse);

const valider2 = document.querySelector('.valider_deux');
valider2.addEventListener('click', deuxième_question_suivant);

const valider3 = document.querySelector('.valider_trois');
valider3.addEventListener('click', troisième_question_suivant);

const valider4 = document.querySelector('.valider_quatre');
valider4.addEventListener('click', quatre_question_suivant);

const valider5 = document.querySelector('.valider_cinq');
valider5.addEventListener('click', cinq_question_suivant);

const valider6 = document.querySelector('.valider_six');
valider6.addEventListener('click', six_question_suivant);