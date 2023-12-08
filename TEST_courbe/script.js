// chart.js
// Importer le fichier data.js
// Assurez-vous que le fichier data.js est inclus avant le chart.js dans votre fichier HTML

// Extraire les années et les valeurs depuis data.js
var years = data.map(item => item.year);
var values = data.map(item => item.value);

// Configuration du graphique
var config = {
  type: 'line',
  data: {
    labels: years,
    datasets: [{
      label: 'Valeurs',
      data: values,
      borderColor: 'green',
      borderWidth: 2,
      fill: false
    }]
  },
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Année'
        }
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Valeur',
        }
      }
    }
  }
};

// Exporter la configuration du graphique
module.exports = config;
