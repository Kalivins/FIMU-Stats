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
}

catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}

//Selection de l'utilisateur
$periode = $_POST['periode'];
$table = $_POST['nomTable'];


if(isset($periode)){
    if(empty($periode)){
        //Valeurs de periode(pendant) et donnees par défaut(csp)
        $table = "csp";
        $req = "SELECT * FROM ".$table." WHERE `Date` LIKE '2016-05-06' OR `Date` LIKE '2016-05-07' OR `Date` LIKE '2016-05-08' OR `Date` LIKE '2016-05-09'";
        
    } else{
        
        
        switch($periode){
            case 'avant':
                $req = "SELECT * FROM ".$table." WHERE `Date` LIKE '2016-05-06' OR `Date` LIKE '2016-05-07' OR `Date` LIKE '2016-05-08' OR `Date` LIKE '2016-05-09'";
                break; 
            case 'pendant':
                $req = "SELECT * FROM ".$table." WHERE `Date` LIKE '2016-05-13' OR `Date` LIKE '2016-05-14' OR `Date` LIKE '2016-05-15' OR `Date` LIKE '2016-05-16'";
                break;
            case 'apres':
                $req = "SELECT * FROM ".$table." WHERE `Date` LIKE '2016-05-20' OR `Date` LIKE '2016-05-21' OR `Date` LIKE '2016-05-22' OR `Date` LIKE '2016-05-23'";
                break;
        }
    }
    
} else{
        //Valeurs de periode(pendant) et donnees par défaut(csp)
        $table = "csp";
        $req = "SELECT * FROM ".$table." WHERE `Date` LIKE '2016-05-06' OR `Date` LIKE '2016-05-07' OR `Date` LIKE '2016-05-08' OR `Date` LIKE '2016-05-09'";
}

//On prepare la requete
/*$stmt = $pdo->prepare("SELECT * FROM :data WHERE :periode");*/

$stmt = $pdo->prepare($req);

/*$stmt->bindParam(':data', $donnees);
$stmt->bindParam(':periode', $periode);*/
//On compile les données à renvoyer
$stmt->execute();
$data = $stmt->fetchAll();


//on renvoi un fichier json contenant toutes les infos de la table nuitees_veillee
echo json_encode($data);
?>