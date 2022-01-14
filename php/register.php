<?php

include 'config.php';

error_reporting(0);

session_start();

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $cpassword = $_POST['cpassword'];
    if ($username != "" && $email != "" && $password != "" && $cpassword != "") {
        if ($password == $cpassword) {
            $sql = "SELECT * FROM login WHERE username='$username'";
            $result = mysqli_query($conn, $sql);
            if (!$result->num_rows > 0) {
                $sql = "INSERT INTO login (username, email, password)
                        VALUES ('$username', '$email', '$password')";
                $result = mysqli_query($conn, $sql);
                if ($result) {
                    echo "<script>alert('Wow! User Registration Completed.'); window.history.back(-1);</script>";
                    $username = "";
                    $email = "";
                    $_POST['password'] = "";
                    $_POST['cpassword'] = "";
                } else {
                    echo "<script>alert('Woops! Something Wrong Went.'); window.history.back(-1);</script>";
                }
            } else {
                echo "<script>alert('Woops! Username Already Exists.'); window.history.back(-1);</script>";
            }
        } else {
            echo "<script>alert('Password Not Matched.'); window.history.back(-1);</script>";
        }
    } else {
        echo "<script>alert('Missing Input.'); window.history.back(-1);</script>";
    }
}
