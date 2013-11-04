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
				
				$asset = Config::get('app.asset');
				if (!empty($asset['js']) && is_array($asset['js'])) {
					$javascript = [];
					foreach ($asset['js'] as $file) {
						if ($environment == 'dev') {
							$javascript[] = HTML::script('/js' . $file);
						} else {
							$hash = Config::get('asset.js_hash');
							$javascript[] = HTML::script('/js/asset-' . $hash . '.js');
						}
					}
					$view->width('javascript', implode("\n", $javascript));
				}

				if (!empty($asset['css']) && is_array($asset['css'])) {
					$css = [];
					foreach ($asset['css'] as $file) {
						if ($environment == 'dev') {
							$css[] = HTML::style('/css' . $file);
						} else {
							$hash = Config::get('asset.css_hash');
							$css[] = HTML::style('/css/styleshet-' . $hash . '.js');
						}
					}
					$view->width('styleshet', implode("\n", $css));		
				}

				

			});

			
		}
	}

}