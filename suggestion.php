<?php
    $towns = array("Hazratbal", "Lalchowk", "Zakura", "Khyam", "Hawal");
    if(isset($_GET['city'])){
            $city = $_GET['city'];
        if(!empty($city)){
            foreach($towns as $existingtown){
                if(strpos($existingtown, $city) !== false){
                    echo $existingtown;
                    echo "<br>";
                }
            }
        }
    }
?>
