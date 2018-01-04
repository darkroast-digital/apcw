<?php

/*
|--------------------------------------------------------------------------
| #WEB
|--------------------------------------------------------------------------
*/



use App\Controllers\HomeController;
use App\Controllers\SiteController;



// #HOME
// =========================================================================

$app->get('/', HomeController::class . ':index')->setName("home");
$app->post('/', HomeController::class . ':post');




// #PAGES
// =========================================================================

$app->get('/services', SiteController::class . ':services')->setName('services');
$app->get('/products', SiteController::class . ':products')->setName('products');
$app->get('/education', SiteController::class . ':education')->setName('education');
$app->get('/contact', SiteController::class . ':contact')->setName('contact');
$app->get('/privacy-policy', SiteController::class . ':privacy')->setName('privacyPolicy');
$app->get('/terms-and-conditions', SiteController::class . ':termsConditions')->setName('termsConditions');
$app->get('/transfer', SiteController::class . ':transfer')->setName('transfer');