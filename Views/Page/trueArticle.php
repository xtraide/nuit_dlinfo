<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../Template/css/style.css">
</head>

<body>
    <section class="trueArticle">
        <div class="special" >
        <p>Article 2</p>
        <div class="hr"></div>
        </div>
        
        <h1 class="titre_principal titre_principal_mobile">L'urgence climatique, <br>et nous ?</h1>
        <h1 class="titre_principal titre_principal_desk">L'urgence climatique, et nous ?</h1>
        <section class="chapeau"><br>
            <p>Les champs'ions du meaux'de avion</p>
            <p>08 Décembre 2023, 8h</p> <br>


            <div class="container">
                <div></div>

            <div class="container_intro">
                <div class="text_intro">
                    <h2 class="petite_intro" >Petite intro</h2>
                <p>Les cyclones dévastateurs, les montées des eaux menaçantes et les méga-feux sont
                    autant de manifestations alarmantes de la dégradation climatique qui occupent quotidiennement nos
                    conversations. Cependant, une réalité souvent méconnue émerge de ce tableau inquiétant : la
                    migration écologique est en train de devenir la première forme de déplacement à l'échelle
                    internationale. De plus en plus, des communautés entières se voient contraintes de migrer afin
                    d'échapper au tragique destin qui les guette dans des territoires condamnés par les ravages du
                    changement climatique.</p>
                </div>
                <div class="image_intro"><img
                        src="./Views/Template/assets/img/usine.png" alt=""></div>

            </div>
        </section>

        <ul>
            <?php
            $app = App\App::getInstance();

            $post = $app->getTable('Compte');

            foreach ($post->all() as $row) {
            ?>
                <li><?= "address mail : " . $row['email'] . " || Score : " . $row['score'] ?></li>
            <?php
            }

            ?>
        </ul>

</body>

</html>