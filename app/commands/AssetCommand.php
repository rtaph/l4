<?php namespace Axcoto\Util;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use App;
use Config;

/**
* @author kurei
* The server may run on different user, this command will run chown 
* the folder that need to be updated.
* Make sure to run 
* 	- composer dump-autoload 
* 	- (extra and php artisan dump-autoload)
*/
class AssetCommand extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'asset:build';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Build asset';

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * Execute the console command.
	 *
	 * @return void
	 */
	public function fire()
	{
		//base_path
		//app_path
		//storage_path
		//public_path
		$asset = Config::get('app.asset');
		$javascript = [];
		if (empty($asset['js']) || !is_array($asset['js'])) {
			return '';
		}
		foreach ($asset['js'] as $file) {
			// $javascript[] = file_get_contents(app_path('public/js/'))
			$javascript[] = file_get_contents(public_path('js/' . $file));
		}
		$javascript = implode("\n", $javascript);
		$hash = md5($javascript);
		file_put_contents(public_path("js/asset-{$hash}.js"), $javascript);
		file_put_contents(public_path("js/asset.js"), $javascript);
		$this->info("Generate {public_path('js/asset.js')}");
		$this->info("Generate {public_path('js/asset-{$hash}.js')}");

		if (!empty($asset['css']) && is_array($asset['css'])) {
			$css = [];
			foreach ($asset['css'] as $file) {
				// $javascript[] = file_get_contents(app_path('public/js/'))
				$css[] = file_get_contents(public_path($file));
			}
			$css = implode("\n", $css);
			$css_hash = md5($css);
			file_put_contents(app_path('config/asset.php'), "<?php return ['hash' => '$hash'];");
			file_put_contents(public_path("css/stylesheet-{$css_hash}.css"), $css);
			file_put_contents(public_path("css/stylesheet.css"), $css);
			$this->info("Generate {public_path('css/stylesheet.css')}");
			$this->info("Generate {public_path('css/stylesheet-{$css_hash}.css')}");
		}
		
		file_put_contents(app_path('config/asset.php'), "<?php return ['js_hash' => '$hash', 'css_hash' => '{$css_hash}'];");
		
	}

	/**
	 * Get the console command arguments.
	 *
	 * @return array
	 */
	protected function getArguments()
	{
		return [];
	}

	/**
	 * Get the console command options.
	 *
	 * @return array
	 */
	protected function getOptions()
	{
		return [];
	}

}