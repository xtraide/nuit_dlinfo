<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="../Template/css/style.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</head>

<body>
  <section class="trueArticle">
    <div class="special">
      <p>Article 2</p>
      <div class="hr"></div>
    </div>

    <h1 class="titre_principal titre_principal_mobile">L'urgence climatique, <br>et nous ?</h1>
    <h1 class="titre_principal titre_principal_desk">L'urgence climatique, et nous ?</h1>
    <section class="chapeau"><br>
      <p>Les champs'ions du meaux'de avion</p>
      <p>08 Décembre 2023, 8h</p> <br>


      <div class="container">

        <div class="container_intro">
          <div class="text_intro">
            <h2 class="petite_intro">Petite intro</h2>
            <p>Les cyclones dévastateurs, les montées des eaux menaçantes et les méga-feux sont
              autant de manifestations alarmantes de la dégradation climatique qui occupent quotidiennement nos
              conversations. Cependant, une réalité souvent méconnue émerge de ce tableau inquiétant : la
              migration écologique est en train de devenir la première forme de déplacement à l'échelle
              internationale. De plus en plus, des communautés entières se voient contraintes de migrer afin
              d'échapper au tragique destin qui les guette dans des territoires condamnés par les ravages du
              changement climatique.</p>
          </div>
          <div class="image_intro"><img src="../Template/assets/img/usine.png" alt=""></div>

        </div>
      </div>
    </section>
    <section>
      <canvas id="myChart" width="600" height="200"></canvas>

      <script>
        // Données
        const data = [
          { "year": 2015, "value": 1.125 },
          { "year": 2016, "value": 1.14423076923077 },
          { "year": 2017, "value": 1.17307692307692 },
          { "year": 2018, "value": 1.19230769230769 },
          { "year": 2019, "value": 1.22115384615385 },
          { "year": 2020, "value": 1.24519230769231 },
          { "year": 2021, "value": 1.26923076923077 },
          { "year": 2022, "value": 1.29326923076923 },
          { "year": 2023, "value": 1.31730769230769 },
          { "year": 2024, "value": 1.34134615384615 },
          { "year": 2025, "value": 1.36538461538462 },
          { "year": 2026, "value": 1.39423076923077 },
          { "year": 2027, "value": 1.41346153846154 },
          { "year": 2028, "value": 1.44230769230769 },
          { "year": 2029, "value": 1.46153846153846 },
          { "year": 2030, "value": 1.49038461538462 },
          { "year": 2031, "value": 1.51923076923077 },
          { "year": 2032, "value": 1.54807692307692 },
          { "year": 2033, "value": 1.57692307692308 },
          { "year": 2034, "value": 1.60576923076923 },
          { "year": 2035, "value": 1.63461538461538 },
          { "year": 2036, "value": 1.66346153846154 },
          { "year": 2037, "value": 1.69230769230769 },
          { "year": 2038, "value": 1.72115384615385 },
          { "year": 2039, "value": 1.75 },
          { "year": 2040, "value": 1.78846153846154 },
          { "year": 2041, "value": 1.81730769230769 },
          { "year": 2042, "value": 1.84615384615385 },
          { "year": 2043, "value": 1.88461538461538 },
          { "year": 2044, "value": 1.91346153846154 },
          { "year": 2045, "value": 1.94230769230769 },
          { "year": 2046, "value": 1.97115384615385 },
          { "year": 2047, "value": 2.00961538461538 },
          { "year": 2048, "value": 2.03846153846154 },
          { "year": 2049, "value": 2.06730769230769 },
          { "year": 2050, "value": 2.10576923076923 },
          { "year": 2051, "value": 2.13461538461538 },
          { "year": 2052, "value": 2.17307692307692 },
          { "year": 2053, "value": 2.20192307692308 },
          { "year": 2054, "value": 2.24038461538462 },
          { "year": 2055, "value": 2.26923076923077 },
          { "year": 2056, "value": 2.30769230769231 },
          { "year": 2057, "value": 2.33653846153846 },
          { "year": 2058, "value": 2.36538461538462 },
          { "year": 2059, "value": 2.40384615384615 },
          { "year": 2060, "value": 2.43269230769231 },
          { "year": 2061, "value": 2.47115384615385 },
          { "year": 2062, "value": 2.5 },
          { "year": 2063, "value": 2.53846153846154 },
          { "year": 2064, "value": 2.57211538461538 },
          { "year": 2065, "value": 2.60576923076923 },
          { "year": 2066, "value": 2.64423076923077 },
          { "year": 2067, "value": 2.67307692307692 },
          { "year": 2068, "value": 2.71153846153846 },
          { "year": 2069, "value": 2.74038461538461 },
          { "year": 2070, "value": 2.77884615384615 },
          { "year": 2071, "value": 2.80769230769231 },
          { "year": 2072, "value": 2.84615384615385 },
          { "year": 2073, "value": 2.88461538461538 },
          { "year": 2074, "value": 2.92307692307692 },
          { "year": 2075, "value": 2.96153846153846 },
          { "year": 2076, "value": 3 },
          { "year": 2077, "value": 3.03846153846154 },
          { "year": 2078, "value": 3.07692307692308 },
          { "year": 2079, "value": 3.11538461538461 },
          { "year": 2080, "value": 3.15384615384615 },
          { "year": 2081, "value": 3.19230769230769 },
          { "year": 2082, "value": 3.22596153846154 },
          { "year": 2083, "value": 3.26442307692308 },
          { "year": 2084, "value": 3.30288461538462 },
          { "year": 2085, "value": 3.33653846153846 },
          { "year": 2086, "value": 3.375 },
          { "year": 2087, "value": 3.41346153846154 },
          { "year": 2088, "value": 3.45192307692308 },
          { "year": 2089, "value": 3.49038461538461 },
          { "year": 2090, "value": 3.52884615384615 },
          { "year": 2091, "value": 3.56730769230769 },
          { "year": 2092, "value": 3.60576923076923 },
          { "year": 2093, "value": 3.64423076923077 },
          { "year": 2094, "value": 3.68269230769231 },
          { "year": 2095, "value": 3.72115384615385 },
          { "year": 2096, "value": 3.75961538461538 },
          { "year": 2097, "value": 3.79807692307692 },
          { "year": 2098, "value": 3.83653846153846 },
          { "year": 2099, "value": 3.875 },
          { "year": 2100, "value": 3.91346153846154 }
        ];

        // Préparation des données pour Chart.js
        const labels = data.map(entry => entry.year);
        const values = data.map(entry => entry.value);

        // Création du graphique
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Prédictions de la température globale de la surface',
              data: values,
              borderColor: '#00A65F',
              backgroundColor: '#a5c380',
              fill: "green",
              borderWidth: 2,
              pointBackgroundColor: 'rgba(75, 192, 192, 1)',
              pointRadius: function (context) {
                const year = context.chart.data.labels[context.dataIndex];
                return Number.isInteger(year) && year % 10 === 0 ? 5 : 0;
              },
              fill: true
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
            data: "year",
                }
              },
              y: {
                type: 'linear',
                position: 'left',
                title: {
                  display: true,
                  text: 'Température en °C'
                }
              }
            },
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (context) {
                    const year = context.parsed.x;
                    if (Number.isInteger(year) && year % 10 === 0) {
                      return `Year: ${year}\nValue: ${context.parsed.y.toFixed(5)}`;
                    } else {
                      return '';  // Hide tooltip for non-decade years
                    }
                  }
                }
              }
            }
          }
        });
      </script>
    </section>

    <ul>
      <?php
      $app = App\App::getInstance();

      $post = $app->getTable('Compte');

      foreach ($post->all() as $row) {
        ?>
        <li>
          <?= "address mail : " . $row['email'] . " || Score : " . $row['score'] ?>
        </li>
        <?php
      }

      ?>
    </ul>

</body>

</html>
