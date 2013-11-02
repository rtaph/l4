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
        $data = array(
                'group' => 1, 'name' => 'Vinh', 'size' => 24,
                'nodes' => array(
                    [
                        'group' => 2, 'name' => 'Product', 'size' => 16,
                        'nodes' => array(
                            ['group' => 3, 'name' => 'Slidy', 'size' => 12],
                            ['group' => 3, 'name' => 'Ukify', 'size' => 12],
                            ['group' => 3, 'name' => 'Moment Gallery', 'size' => 12],
                        ) 
                    ],

                    [
                        'group' => 2, 'name' => 'Apps', 'size' => 16,
                        'nodes' => array(
                            ['group' => 4, 'name' => 'Noty.IM', 'size' => 16 ],
                            ['group' => 4, 'name' => 'Meme Storm', 'size' => 16 ],
                            ['group' => 4, 'name' => 'Xinh.So', 'size' => 16 ],
                        )   
                    ],

                    [
                        'group' => 2, 'name' => 'Language', 'size' => 16,
                        'nodes' => array(
                            [
                                'group' => 3, 'name' => 'PHP', 'size' => 12,
                                'nodes' => array(
                                    ['group' => 3, 'name' => 'Laravel', 'size' => 12],
                                    ['group' => 3, 'name' => 'WordPress', 'size' => 12],
                                    ['group' => 3, 'name' => 'Kohana', 'size' => 12],
                                    ['group' => 3, 'name' => 'Zend Framework', 'size' => 12],
                                )
                            ],
                            [
                                'group' => 3, 'name' => 'Ruby', 'size' => 12,
                            ],
                            [
                                'group' => 3, 'name' => 'JavaScript', 'size' => 12
                            ],
                            [
                                'group' => 3, 'name' => 'Lua', 'size' => 12
                            ],
                            [
                                'group' => 3, 'name' => 'Go', 'size' => 12
                            ],
                            [
                                'group' => 3, 'name' => 'Rust', 'size' => 12
                            ],
                        )
                    ],
                    [
                        'group' => 2, 'name' => 'About', 'size' => 16
                    ],
                    [
                        'group' => 2, 'name' => 'Poem', 'size' => 16
                    ],    
                )
        );

        $this->_buildNode($data);
        return $this->_graph;        
        // return Response::json
    }

    /**
    * Build the sub array into graph with point and link.
    */
    protected function _buildNode($array, $level=0) {
        array_push($this->_graph['nodes'], array_combine(
            ['group', 'name', 'size'], 
            [
                $array['group'], $array['name'], $array['size'],
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
        $products = array(
            array(
                'title' => 'WordPress Full Screen Gallery',
                'file' => 'wpfss.png',
                'type' => array('all', 'wordpress', 'html5'),
                'url' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'demo' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'buy' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'info' => 'turns your normal and boring built-in gallery of WordPress into a fullscreen gallery with the support for thumbnail, caption!',
                'price' => 7,
            ),
            array(
                'title' => 'WordPress Notifcation Message Plugin',
                'file' => 'notify.png',
                'type' => array('all', 'php', 'html5'),
                'url' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'demo' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'buy' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'info' => 'It lets u define notifications for your wordpress: whole site or a specified post',
                'price' => 6,
            ),
            array(
                'title' => 'jQuery Slidy',
                'file' => 'slidy.png',
                'type' => array('all', 'php', 'html5'),
                'url' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'demo' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'buy' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'info' => 'A jquery plugin to make sliders quickly! It turns any block element into a slider bar which user can move the pointer to select a value! Simple markup, no extra css!',
                'price' => 5,
            ),
            array(
                'title' => 'jQuery Ukify - Keys Binding',
                'file' => 'ukify.png',
                'type' => array('all', 'php', 'html5'),
                'url' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'demo' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'buy' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'info' => 'A jquery plugin to make a shortcut key for any element or bind a callback function to any key or sequence of key! You can use it to make shortcut for links.',
                'price' => 4,
            ),
            array(
                'title' => 'Secret Paypal File Download',
                'file' => 'sdt.png',
                'type' => array('all', 'php', 'html5'),
                'url' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'demo' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'buy' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'info' => 'A simple script which handles payment processing with Paypal and IPN notifcation to enable you sell any digital products (book, music, software…) ',
                'price' => 10,
            ),
            array(
                'title' => 'Achites Facebook application',
                'file' => 'achites.png',
                'type' => array('all', 'kohana', 'facebook'),
                'url' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'demo' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'buy' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'info' => 'Make funny app, let users answers funny question! Alow you create your own question!',
                'price' => 11,
            ),
            array(
                'title' => 'FontBird WordPress plugin',
                'file' => 'fontbird.png',
                'type' => array('all', 'wordpress'),
                'url' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'demo' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'buy' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'info' => 'Enable you use any fonts on your WordPress site! Auto convert .ttf, .otf to .eot, .woff font!',
                'price' => 14,
            ),
            array(
                'title' => 'Moment Gallery',
                'file' => 'moment.png',
                'type' => array('all', 'kohana'),
                'url' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'demo' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'buy' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'info' => 'Written in Kohana! Build your own photo gallery, alow each user has their own page!',
                'price' => 15,
            ),
            array(
                'title' => 'WordPress Picture Editor',
                'file' => 'wp-paint.png',
                'type' => array('all', 'wordpress'),
                'url' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'demo' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'buy' => 'http://codecanyon.net/user/kureikain/portfolio?ref=kureikain',
                'info' => 'Great plugin which let you edit your picture right on browser with a editor like photoshop',
                'price' => 8,
            ),
        );

				return $this->layout->nest('content', 'home.index', array(
            'products' => $products
        ));
    }

    public function showContact() {

        $this->layout->nest('content', 'home.contact');
    }

}