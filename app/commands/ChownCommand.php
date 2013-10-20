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
class ChownCommand extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'srv:chown';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Chown on server to user/group that are specified as argument';

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
		$current_folder = `pwd`;
		$this->info('Current folder' . $current_folder);
		$user = $this->argument('u');
		$group = $this->argument('g');
		$storage_folder = storage_path();
		$command = "chown -R {$user}:{$group} {$storage_folder}/sessions";
		$this->info('Chown with cmd: ' . $command);
		//$environment = App::environment();
		$this->info(shell_exec($command));
		$this->error(shell_exec("ls -la {$storage_folder}/sessions"));
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