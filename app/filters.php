<?php

/*
|--------------------------------------------------------------------------
| Application & Route Filters
|--------------------------------------------------------------------------
|
| Below you will find the "before" and "after" events for the application
| which may be used to do any work before or after a request into your
| application. Here you may also register your custom route filters.
|
*/
define('APP_ETAG', md5("20131021-1020-1")); //date-time-rev
  
App::before(function($request)
{
  // echo $request->url();
  // var_dump($request->headers);
  // $etag = $request->headers->get('Etagsasa');
  // //var_dump($etag);
  // var_dump($_SERVER);
  // phpinfo();
	// if ($etag === APP_ETAG) {
 //    App::abort(304);  
 //  }
  
});


App::after(function($request, $response)
{
  // $response->headers->set('Etag', time());
  // $response->headers->set('HTTP-ETAG', time());
  // $response->headers->set('Etagsasa', time());
  // $response->headers->set('Last-Modified', 'Sun, 20 Oct 2013 20:48:35 GMT');
  $max_age = 60 * 60 * 24 * 30 ; //1month
  $response->headers->set('Cache-Control', "max-age={$max_age}, public, must-revalidate");
  // $response->headers->set('Etag', md5($etag));
});

/*
|--------------------------------------------------------------------------
| Authentication Filters
|--------------------------------------------------------------------------
|
| The following filters are used to verify that the user of the current
| session is logged into this application. The "basic" filter easily
| integrates HTTP Basic authentication for quick, simple checking.
|
*/

Route::filter('auth', function()
{
	if (Auth::guest()) return Redirect::guest('login');
});


Route::filter('auth.basic', function()
{
	return Auth::basic();
});

/*
|--------------------------------------------------------------------------
| Guest Filter
|--------------------------------------------------------------------------
|
| The "guest" filter is the counterpart of the authentication filters as
| it simply checks that the current user is not logged in. A redirect
| response will be issued if they are, which you may freely change.
|
*/

Route::filter('guest', function()
{
	if (Auth::check()) return Redirect::to('/');
});

/*
|--------------------------------------------------------------------------
| CSRF Protection Filter
|--------------------------------------------------------------------------
|
| The CSRF filter is responsible for protecting your application against
| cross-site request forgery attacks. If this special token in a user
| session does not match the one given in this request, we'll bail.
|
*/

Route::filter('csrf', function()
{
	if (Session::token() != Input::get('_token'))
	{
		throw new Illuminate\Session\TokenMismatchException;
	}
});