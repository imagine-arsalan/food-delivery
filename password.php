<?php
if(isset($_POST['password'])){
    $password = $_POST['password'];
    $confirmpassword = $_POST['confirmpassword'];
    if(!empty($password)){
        while($password !== $confirmpassword){
            echo "<span class='input-group-addon> <span class='glyphicon glyphicon-remove-circle'> </span> </span>";
        }
    }
}
?>
