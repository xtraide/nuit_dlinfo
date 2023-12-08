<h1>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis nobis consequatur, esse, adipisci
    temporibus, at molestiae tempora libero sed deserunt incidunt consequuntur. Odio consectetur libero saepe, eum
    dolorum ea voluptate praesentium repudiandae tempora reiciendis nesciunt voluptas modi doloremque non. Quod quisquam
    numquam quis ipsa, laboriosam exercitationem molestiae saepe nesciunt.
</h1>

<?php
$app = App\App::getInstance();

$post = $app->getTable('Compte');
var_dump($post->all()); ?>