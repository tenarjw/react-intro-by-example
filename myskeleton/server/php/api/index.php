<?php
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
        header('Access-Control-Max-Age: 1728000');
        header('Content-Length: 0');
        header('Content-Type: text/plain');
        die();
    }


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Silex\Provider\DoctrineServiceProvider;
use Silex\Provider\MonologServiceProvider;
use Silex\Provider\SwiftmailerServiceProvider;

//Composer loader
$loader = require_once __DIR__ . '/../vendor/autoload.php';

// new application
$app = new Application();


# ------------------------------------------------------------------------------
# Registering
# ------------------------------------------------------------------------------
// debug 
$app['debug'] = true;
// timezone
date_default_timezone_set('Europe/Warsaw');

$app->register(new MonologServiceProvider, array(
    'monolog.logfile' => __DIR__ . '/../var/logs/api.log',
));

$app->register(new Silex\Provider\SerializerServiceProvider());

// API
require __DIR__.'/../src/api_controllers.php';

// run
$app->run();