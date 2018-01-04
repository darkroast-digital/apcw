<?php

namespace App\Controllers;

use App\Controllers\Controller;
use Mailgun\Mailgun;
use PHPMailer\PHPMailer\PHPMailer;


class HomeController extends Controller
{
    public function index($request, $response, $args)
    {

        return $this->view->render($response, 'home.twig');
    }

    public function post($request, $response, $args)
    {
        $mail = new PHPMailer;
        $params = $request->getParams();

        $pharmName = $params['pharmName'];
        $pharmPhone = $params['pharmPhone'];
        $prescriptionNum = $params['prescriptionNum'];
        $patName = $params['patName'];
        $patPhone = $params['patPhone'];
        $pickUp = $params['pickUp'];
        
        $subject = "New contact from " . $patName . ": " . $patPhone;

        $mail->setFrom('info@apcw.ca');
        $mail->addAddress('info@apcw.ca', 'Amherstburg Pharmacy Compounding & Wellness');
        $mail->addReplyTo('info@apcw.ca', 'Amherstburg Pharmacy Compounding & Wellness');
        $mail->ReturnPath='info@apcw.ca';

        $mail->isHTML(true);

        $body = 'Current Pharmacy Name: ' . $pharmName . "<br/>" .
                "Current Pharmacy Phone Number: " . $pharmPhone . "<br/>" .
                "Prescription Number: " . $prescriptionNum . "<br/>" .
                "Patient Name: " . $patName . "<br/>" .
                "Patient Phone Number: " . $patPhone . "<br/>" .
                "Date of Pick Up: " . $pickUp . "<br/>";

        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->AltBody = $body;

        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'Success!';
        }

    }
}
