<?php

session_start();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="icon" href="images/favicon.ico" type="image/ico">
    <link rel="stylesheet" href="../css/welcome.css">
</head>

<body>
    <div class="container">
        <div class="form__message form__message--error"></div>
        <button class="form__button" onclick="location='./logout.php'">Logout</button>
    </div>
</body>

</html>