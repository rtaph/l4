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

	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout, array(
				'pageTitle' => 'Axcoto - We turn ideas into website'
			));
			
		}
	}

}