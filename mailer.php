<?php
    function died($error) {
        // your error code can go here
        $error_msg = "We are very sorry, but there were error(s) found with the form you submitted. \n";
        $error_msg .= "These errors appear below.<br /><br />";
        $error_msg .= $error."<br /><br />";
        $error_msg .= "Please go back and fix these errors.<br /><br />";
        
        $error_data = ['status' => '400',
                       'message' => $error_msg];

        echo json_encode($error_data);
        die();
    }
    
    if(!isset($_POST['name'])
        || !isset($_POST['email'])
        || !isset($_POST['tel'])
        || !isset($_POST['start_date'])
        || !isset($_POST['billing'])
        || !isset($_POST['budget'])
        || !isset($_POST['project_description'])
        || !isset($_POST['personal'])){
            died("There's a problem with the Input parameters...");
    }else{
        $sender_name = $_POST['name'];
        $sender_email = $_POST['email'];
        $sender_tel = $_POST['tel'];
        $start_date = $_POST['start_date'];
        $billing_method = $_POST['billing'];
        $budget = $_POST['budget'];
        $project_description = $_POST['project_description'];
        $personal = $_POST['personal'];

        $message_subject = "Charisol Project request from ".$sender_name.", ".$sender_email;

        $message_body = "Sender name: ".$sender_name."\n";
        $message_body .= "Sender email: ".$sender_email."\n";
        $message_body .= "Sender phone number: ".$sender_tel."\n";
        $message_body .= "Project Start Date: ".$start_date."\n";
        $message_body .= "Project Billing Method: ".$billing_method."\n";
        $message_body .= "Project Budjet: ".$budget."\n";
        $message_body .= "Description: ".$project_description."\n";
        $message_body .= "Personal: ".$personal;

        $reciever_address = "info@charisol.io";

        if(mail($reciever_address, $message_subject, $message_body, 'From: '.$sender_email)){
            $message_data = [
                             'status' => '200',
                             'message' => 'Mail sent successfully',
                             'payload' => $message_body
                            ];  
            header('Content-Type: application/json');
            echo json_encode($message_data);
        }else{
            $error_data = ['status' => 400,
                           'message' => "Couldn't send mail..."];
            header('Content-Type: application/json');
            echo json_encode($error_data);
        }


    }