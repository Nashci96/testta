<?php 
    // importing dbtestaconfig.php file 
    include 'dbtestaconfig.php';

    // Creating Connection
    $conn == new mysqli($HostName , $HostUser , $HostPass , $DatabaseName);

    if ( $conn->connect_error ){
        die("Connection Failed: " . $conn->connect_error);
    }

    // Getting the received JSON into $json variable
    $json = file_get_contents('php://input');

    //decoding the received JSON & store into $obj variable.
    $obj = json_decode($json,true);

    // name store into $name
    $name = $obj['name'];

    // same with email
    $email = $obj['email'];

    // same with password
    $password = $obj['password'];

    if($obj['email']!="")

    {
        $result= $mysqli->query("SELECT * FROM userregistrationtable where emails='$email' ");

        if($result->num_rows>0){
            echo json_encode('email already exist'); // alert message in RN
        }
        else{
            $add = $mysqli->query("insert into userregistrationtable (name,email,password) values ('$name','$email','$password')");

            if($add){
                echo json_encode('user registered succesfully');// alert message in RN
            }

            else{
                echo json_encode('check internet connection');// our query fail
            }
        }

    }
        else{
            echo json_encode('try again');
        }