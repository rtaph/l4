<?php namespace Axcoto\Server;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use App;

/**
* @author kurei
* The server may run on different user, this command will run chown 
* the folder that need to be updated.
* 
*/
class DeployCommand extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'srv:deploy';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Simple task to deploy. Just for fun.';

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
		//SSH to server

		//Checkout the code

		//Restart nginx. fpm if needed.	
	}

	/**
	 * Get the console command arguments.
	 *
	 * @return array
	 */
	protected function getArguments()
	{
		return array(
			array('u', InputArgument::REQUIRED, 'First arg is user the webserver will run on'),
			array('g', InputArgument::REQUIRED, 'First arg is group the webserver will run on'),
		);
	}

	/**
	 * Get the console command options.
	 *
	 * @return array
	 */
	protected function getOptions()
	{
		return array();
		// return array(
		// 	array('example', null, InputOption::VALUE_OPTIONAL, 'An example option.', null),
		// );
	}

}