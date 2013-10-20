<?php

class BaseController extends Controller {

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	public $layout = 'layout.sugoi';

	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout, array(
				'pageTitle' => 'Axcoto - We turn ideas into website'
			));
			
		}
	}

	public function __construct() {
		// parent::__construct();
    // Asset::add('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');
    // Asset::add('paper', 'js/lib/paper.js', array('jquery'));
    // Asset::add('transform', 'js/transform/dist/jquery.transform-0.9.3.min.js', array('paper'));
    // Asset::add('axcoto', 'js/axcoto.js');
    // Asset::add('paper-canvas', 'js/canvas.js', array('paper'), array('type' => 'text/paperscript', 'canvas' => "canvas") );

    // Asset::add('reset', 'css/reset.css');
    // Asset::add('style', 'css/style.css');
    // Asset::add('css.colorbox', 'js/colorbox/colorbox.css');
    // $this->layout->pageTitle = 'Axcoto - We turn ideas into website';
  }

}