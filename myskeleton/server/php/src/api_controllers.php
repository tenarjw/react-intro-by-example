  <?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


$app->POST('/login', function(Request $request) {
        $body = $request->getContent();
        $inputFormat='application/json';
        $r=json_decode($body, true);

        if ($r['username'] != 'demo')
          return new Response( json_encode(
          [
            'id' => 0,
            'message' => "błędny user"
          ], 
          JSON_PRETTY_PRINT) );
        else
          return new Response( 
           json_encode(
            [
            'id' => 10,
            'message' => "OK"
            ], 
            JSON_PRETTY_PRINT),
           200,
           [ 'Content-Type' => 'application/json', ]
         );
});