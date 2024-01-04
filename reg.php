<?php
require 'db/connect.php';
if(isset($_POST['btn_reg'])){
    $name = $_POST['fullname'];
    $username = $_POST['u_name'];
    $email = $_POST['email'];
    $password = $_POST['pwd'];
    if($name != "" && $username != "" && $email != "" && $password != ""){
        $stmt = $conn->prepare("INSERT INTO users (fullname, username, email, password) VALUES (?, ?, ?, md5(?))");
        $stmt->bind_param("ssss", $name, $username, $email, $password);
        if($stmt->execute()){
            echo "New record created successfully";
        }else{
            echo "Error: " . $stmt->error;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register successful</title>
</head>
<body>
    
</body>
</html>