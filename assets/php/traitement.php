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



//Requete pour 2016
if(isset($periode)){
    if(empty($periode)){
        //Valeurs de periode(pendant) et donnees par défaut(csp)
        $table = "csp";
        $req2016 = "SELECT * FROM ".$table." WHERE `Date` LIKE '2016-05-06' OR `Date` LIKE '2016-05-07' OR `Date` LIKE '2016-05-08' OR `Date` LIKE '2016-05-09'";
        $req2017 = "SELECT * FROM ".$table."_2017 WHERE `Date` LIKE '2017-06-02' OR `Date` LIKE '2017-06-03' OR `Date` LIKE '2017-06-04' OR `Date` LIKE '2017-06-05'";
    } else{
        
        
        switch($periode){
            case 'avant':
                $req2016 = "SELECT * FROM ".$table." WHERE `Date` LIKE '2016-05-06' OR `Date` LIKE '2016-05-07' OR `Date` LIKE '2016-05-08' OR `Date` LIKE '2016-05-09'";
                $req2017 = "SELECT * FROM ".$table."_2017 WHERE `Date` LIKE '2017-05-27' OR `Date` LIKE '2017-05-28' OR `Date` LIKE '2017-05-29' OR `Date` LIKE '2017-05-30'";
                break; 
            case 'pendant':
                $req2016 = "SELECT * FROM ".$table." WHERE `Date` LIKE '2016-05-13' OR `Date` LIKE '2016-05-14' OR `Date` LIKE '2016-05-15' OR `Date` LIKE '2016-05-16'";
                $req2017 = "SELECT * FROM ".$table."_2017 WHERE `Date` LIKE '2017-06-02' OR `Date` LIKE '2017-06-03' OR `Date` LIKE '2017-06-04' OR `Date` LIKE '2017-06-05'";
                break;
            case 'apres':
                $req2016 = "SELECT * FROM ".$table." WHERE `Date` LIKE '2016-05-20' OR `Date` LIKE '2016-05-21' OR `Date` LIKE '2016-05-22' OR `Date` LIKE '2016-05-23'";
                $req2017 = "SELECT * FROM ".$table."_2017 WHERE `Date` LIKE '2017-06-09' OR `Date` LIKE '2017-06-10' OR `Date` LIKE '2017-06-11' OR `Date` LIKE '2017-06-12'";
                break;
        }
    }
    
} else{
        //Valeurs de periode(pendant) et donnees par défaut(csp)
        $table = "csp";
        $req2016 = "SELECT * FROM ".$table." WHERE `Date` LIKE '2016-05-06' OR `Date` LIKE '2016-05-07' OR `Date` LIKE '2016-05-08' OR `Date` LIKE '2016-05-09'";
        $req2017 = "SELECT * FROM ".$table."_2017 WHERE `Date` LIKE '2017-06-02' OR `Date` LIKE '2017-06-03' OR `Date` LIKE '2017-06-04' OR `Date` LIKE '2017-06-05'";
}


$stmt2016 = $pdo->prepare($req2016);
$stmt2017 = $pdo->prepare($req2017);

//On compile les données à renvoyer
$stmt2016->execute();
$result1 = $stmt2016->fetchAll();

$stmt2017->execute();
$result2 = $stmt2017->fetchAll();



//on renvoi un fichier json contenant toutes les infos des tables de 2016 et 2017
$data = array($result1, $result2);
echo json_encode($data);
?>