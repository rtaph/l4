<?php
class HomeController extends BaseController {
    protected $_graph = array('nodes' => [], 'links' => []);
	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function showWelcomeOld()
	{
		return 'hello there,' . date('Y-m-d h:i:s') . "\n" . time();
	}

    public function mine() {
        // @TODO: validate and exception handle
        // No data validation here 
        $data = Config::get('bucket.graph');
        $this->_buildNode($data);
        return $this->_graph;        
        // return Response::json
    }

    /**
    * Build the sub array into graph with point and link.
    */
    protected function _buildNode($array, $level=0) {
        static $_group = 0;
        array_push($this->_graph['nodes'], array_combine(
            ['group', 'name', 'size', 'icon', 'url'], 
            [
                $_group++, $array['name'], $array['size'], empty($array['icon'])? '':$array['icon'], empty($array['url'])? '':$array['url']
            ]
        ));
        $node_id = count($this->_graph['nodes']) - 1;
        
        if (!empty($array['nodes']) && is_array($array['nodes'])) {
            $this->_buildLink($node_id, $array['nodes'], $level+1);            
        }
        return $node_id;        
    }

    
    protected function _buildLink($node_id, $leaf, $level=0) {
        foreach ($leaf as $item) {
            $leaf_id = $this->_buildNode($item, $level+1);
            array_push($this->_graph['links'], ['source' => $node_id, 'target' => $leaf_id, 'value' => 0.5]);
        }
    }

	public function showWelcome() {
        $products = Config::get('bucket.products');

		return $this->layout->nest('content', 'home.index', array(
            'products' => $products
        ));
    }
    
    /**
    *
    */
    function _buildBucket($array) {
        $mod_array = [];
        if (!is_array($array)) {
            return $array;
        }
        foreach ($array as $key=>$value) {
            if (is_numeric($key)) {
                if (!empty($value['title'])) {
                    $assoc_key = $value['title'];
                } else if (!empty($value['name'])) {
                    $assoc_key = $value['name'];
                } else if (!empty($value['file'])) {
                    $assoc_key = $value['file'];
                } else {
                    $assoc_key = 'Item ' . $key; 
                }
                $mod_array[$assoc_key] = $this->_buildBucket($value);  
                continue;
            }

            // echo "$key <br />\n";
            if (is_string($key)) {
                $mod_array[$key] = $this->_buildBucket($value);
                continue;
            }
        }
        return $mod_array;
    }

    public function showTerminal() {
        $bucket = Config::get('bucket');
      //   $bucket = array(
      //   '/' => {
      //   'home' : { 'kurei' : $.parseJSON($('#bucket').text()) },
      //   'etc'  : [ 'rc.conf' ],
      //   // 'srv'  : { 
      //   //   'http': {
      //   //     'axcoto.com': ['index.php', 'artisant'], 
      //   //     'log.axcoto.com': ['README'], 
      //   //     'noty.im': ['public', 'gem']
      //   //   }, 
      //   //   'ftp' : 'ftp' 
      //   // },
      //   'bin'  : [ 'help', 'ls', 'wget'],
      //   'usr'  : [ 'bin', 'sbin'],
      //   'var'  : {'cache': 'nginx', 'rails': ['cache', 'logs'], 'backup' : ['rb']}
      // }
      //   )
        $bucket = $this->_buildBucket($bucket);        
        return $this->layout->nest('content', 'home.terminal', array(
            'bucket' => $bucket
        ));
    }


    public function showContact() {

        $this->layout->nest('content', 'home.contact');
    }

}