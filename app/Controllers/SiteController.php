<?php

namespace App\Controllers;

use App\Controllers\Controller;

class SiteController extends Controller
{
    public function services($request, $response, $args)
    {
        return $this->view->render($response, 'services.twig');
    }

    public function products($request, $response, $args)
    {
        return $this->view->render($response, 'products.twig');
    }

    public function education($request, $response, $args)
    {
        return $this->view->render($response, 'education.twig');
    }

    public function contact($request, $response, $args)
    {
        return $this->view->render($response, 'contact.twig');
    }

    public function privacy($request, $response, $args)
    {
        return $this->view->render($response, 'privacy-policy.twig');
    }

    public function termsConditions($request, $response, $args)
    {
        return $this->view->render($response, 'terms-and-conditions.twig');
    }

    public function transfer($request, $response, $args)
    {
        return $this->view->render($response, 'transfer.twig');
    }
}

