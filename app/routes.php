<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});

Route::get('/', 'HomeController@showWelcome');
Route::get('/cv', 'HomeController@showCv');
Route::get('/terminal', 'HomeController@showTerminal');
Route::get('/lol', 'HomeController@showWelcomeOld');
Route::get('/contact', 'HomeController@showContact');
Route::get('/shop', 'ShopController@showWelcome');
Route::get('/portfolio', 'PortfolioController@showWelcome');
Route::get('/lab', 'LabController@showWelcome');
Route::get('/product', 'ProductController@showWelcome');
Route::get('/me', 'HomeController@mine');
