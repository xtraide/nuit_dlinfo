  // Fonction pour générer des flocons
function generateFlocon() {
  var windowWidth = $(window).width();
  var randflocon = Math.ceil(Math.random() * 3);
  var rand = Math.floor(Math.random() * windowWidth);
  var flocon = '<div style="left: ' + rand + 'px" class="flocon anim' + randflocon + '"></div>';

  $('body').append(flocon);

  setTimeout(function () {
    $('.flocon:first').remove();
  }, 4900);
}

// Gestionnaire d'événements pour la touche "n"
$(document).on('keydown', function (e) {
  // Vérifier si la touche pressée est la touche "n" (keyCode 78)
  if (e.keyCode === 78) {
    // Exécuter la fonction pour générer des flocons
    generateFlocon();
  }
});
