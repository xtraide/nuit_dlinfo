<!DOCTYPE html>
<html lang="fr">

<head>
    <?php $PATH = "Views/Template/" ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= $PATH ?>css/style.css">
    <link rel="stylesheet" href="<?= $PATH ?>css/questionnaire.css">
    <script defer src="<?= $PATH ?>js/script.js"></script>
    <script defer src="<?= $PATH ?>js/function.js"></script>
    <script defer src="<?= $PATH ?>js/function2.js"></script>
    <script defer src="<?= $PATH ?>js/kahoot.js"></script>
    <script defer src="<?= $PATH ?>js/quizz.js"></script>
    <script defer src="<?= $PATH ?>js/musicNoel.js"></script>

    <title><?= App\App::getTitle();  ?></title>
</head>

<body>
    <?= $content ?>
</body>

</html>