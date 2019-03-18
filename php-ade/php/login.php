<?php 
    // importing dbtestaconfig.php file 
    include 'dbtestaconfig.php';
 
    // // Create connection
    // $conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);

    // if ( $conn->connect_error ){
    //     die("Connection Failed: " . $conn->connect_error);
    // }

    // Getting the received JSON into $json variable
    $json = file_get_contents('php://input');

    //decoding the received JSON & store into $obj variable.
    $obj = json_decode($json,true);

    $email = $obj['email'];

    $password = $obj['password'];

    if($obj['email']!=""){

        $result= $mysqli->query("SELECT * FROM userregistrationtable where email ='$email' and password='$password'");

            if($result->num_rows==0){
                echo json_encode('Wrong Details');
            }

            else{
                echo json_encode("ok");
            }
    }
    else{
        echo json_encode('try again');
    }

?>