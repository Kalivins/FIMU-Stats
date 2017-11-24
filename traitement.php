<?php


/* Connexion à la base de données */
$servername = "localhost";
$username = "root";
$password = "";

try 
{
    $pdo = new PDO("mysql:host=$servername;dbname=test;charset=utf8;", $username, $password);
    // set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"; 
}

catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}

// On va chercher tout ce qui se trouve dans la table nuitees_veillee
$stmt = $pdo->prepare("SELECT * from nuitees_veillee");
$stmt->execute();
$data = $stmt->fetchAll();

//on renvoi un fichier json contenant toutes les infos de la table nuitees_veillee
echo json_encode($data);
?>