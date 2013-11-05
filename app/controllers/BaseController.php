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
				$environment = $_SERVER['SERVER_NAME'] === self::URL_DEV? 'dev':'prod';
				$view->with('environment', $environment);
				
				$asset = Config::get('app.asset');
				$cdn = Config::get('app.cdn');
				
				//Just try to use an empty CDN. nothing hurt here :-)
				//Just to make sure $cdn is not empty :-)
				if (!is_array($cdn)) {
					$cdn = array_fill(0, 3, '');
				}

				if (!empty($asset['js']) && is_array($asset['js'])) {
					$javascript = [];
					if ($environment == 'dev') {
						foreach ($asset['js'] as $file) {
							$javascript[] = HTML::script('/js' . $file);
						}
					} else {
						$hash = Config::get('asset.js_hash');
						$javascript[] = HTML::script($cdn[0] . '/js/asset-' . $hash . '.js');
					}
					$view->with('javascript', implode("\n", $javascript));
				}

				if (!empty($asset['css']) && is_array($asset['css'])) {
					$css = [];
					
					if ($environment == 'dev') {
						foreach ($asset['css'] as $file) {
							$css[] = HTML::style($file);
						}					
					} else {
						$hash = Config::get('asset.css_hash');
						$css[] = HTML::style($cdn[1] . '/css/stylesheet-' . $hash . '.css');
					}
					$view->with('stylesheet', implode("\n", $css));		
				}
			});
		}
	}

}