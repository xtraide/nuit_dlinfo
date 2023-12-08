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
        <p>Special Reports</p>
        <h1 class="titre_principal">L'urgence climatique, <br>et nous ?</h1>
        <section class="chapeau">
            <span>Red Pilled TV Banned Video</span>
            <br>
            <span>December 7th 2023, 10:10am</span>
            <!-- </section>
        <p class="cap">Watch & share this report that's based on the work in Robert B. Stinnett's acclaimed book, "Day
            of Deceit:</p>
            <section class="trueArt">
                <img src="" alt="ours polaire">
                <div class="paragraphe">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </section> -->


            <div class="container">
                <div></div>


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