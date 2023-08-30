<?php
    $servername='localhost';
    $username='root';
    $password='';
    $dbname='register_member';
    $connect= mysqli_connect($servername,$username, $password, $dbname);
    if($connect){
        echo "Connect";
    }else{
        echo "No Connect";
    }

    $mssv= $_POST['msv'];
    $fullname= $_POST['fullname'];
    $email= $_POST['email'];
    $gender= $_POST['gender'];
    $reading = isset($_POST["reading"]) ? $_POST["reading"] : "";
    $traveling = isset($_POST["traveling"]) ? $_POST["traveling"] : "";
    $music = isset($_POST["music"]) ? $_POST["music"] : "";
    $food = isset($_POST["food"]) ? $_POST["food"] : "";
    $other = isset($_POST["other"]) ? $_POST["other"] : "";
    $hobbies =" $traveling $music $food $other"  ;
    $country= $_POST['country'];
    $note= $_POST['note'];
    echo "$gender";
    $query ="INSERT INTO member VALUES('', '$mssv', '$fullname','$email',
    '$gender','$hobbies', '$country', '$note')";
    $data = mysqli_query($connect, $query);
    echo $data;
    if($data){
        echo "data is save";
    }else{
        echo "Data is not save";
    }