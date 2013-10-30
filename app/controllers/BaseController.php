<?php 
class BaseController extends Controller {

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	public $layout = 'layout.sugoi';
	protected $_assets = array(
		'stylesheet' => array(
		),
		'headscript' => array(
		),
		'footscript' => array(
		),
	);

	//@TODO PUT this in config file or sw
	const URL_DEV = 'axcoto.dev';

	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout, array(
				'pageTitle' => 'Axcoto - We turn ideas into website'
			));
			View::composer('layout.sugoi', function ($view) {
				$view->with('environment', $_SERVER['SERVER_NAME'] === self::URL_DEV? 'dev':'prod' );
			});
			
		}
	}

}