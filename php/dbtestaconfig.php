<?php
    //define your host here
    $HostName = "localhost";

    //define your database name here
    $DatabaseName = "testa";

    //define your database username here
    $HostUser = "root";

    //define your database password here
    $HostPass = "";

    // Create connection
    $conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
 
    if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);
    } 
?>