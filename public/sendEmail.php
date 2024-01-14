<?php

// Vérifier si des données ont été soumises
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = htmlspecialchars($_POST["userName"]);
    $email = htmlspecialchars($_POST["userEmail"]);
    $message = htmlspecialchars($_POST["userMessage"]);

    // Enregistrer les données dans un fichier texte (exemple)
    $data = "Nom: $name\nEmail: $email\nMessage: $message\n";

    // Spécifier le chemin du fichier de destination
    $file_path = __DIR__ . "form_data.txt";

    // Ajouter les données au fichier ou créer le fichier s'il n'existe pas
    file_put_contents($file_path, $data, FILE_APPEND | LOCK_EX);

    // Répondre avec un message de succès (facultatif)
    echo "Les données du formulaire ont été enregistrées avec succès.";
} else {
    // Répondre avec une erreur si la méthode de requête n'est pas POST
    http_response_code(400);
    echo "Erreur : Méthode de requête incorrecte.";
}

?>
