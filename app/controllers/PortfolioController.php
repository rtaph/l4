<?php

class PortfolioController extends BaseController {
    /*
      |--------------------------------------------------------------------------
      | The Default Controller
      |--------------------------------------------------------------------------
      |
      | Instead of using RESTful routes and anonymous functions, you might wish
      | to use controllers to organize your application API. You'll love them.
      |
      | This controller responds to URIs beginning with "home", and it also
      | serves as the default controller for the application, meaning it
      | handles requests to the root of the application.
      |
      | You can respond to GET requests to "/home/profile" like so:
      |
      |		public function action_profile()
      |		{
      |			return "This is your profile!";
      |		}
      |
      | Any extra segments are passed to the method as parameters:
      |
      |		public function action_profile($id)
      |		{
      |			return "This is the profile for user {$id}.";
      |		}
      |
     */

    public function showWelcome() {
        $portfolio = array(
            array(
                'file' => 'asia.png',
                'type' => array('all', 'wordpress'),
                'url' => 'asiafusion.co.uk',
                'info' => 'Wordpress Design&amp; Development',
            ),
            array(
                'file' => 'bagvine.png',
                'type' => array('all', 'zendcart'),
                'url' => 'axcoto.com',
                'info' => 'OSC Development',
            ),
            array(
                'file' => 'broadway.png',
                'type' => array('all', 'joomla'),
                'url' => 'broadwayperformer.com',
                'info' => 'Joomla Development',
            ),
            array(
                'file' => 'carket.png',
                'type' => array('all', 'zendcart'),
                'url' => '',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'freshbox.png',
                'type' => array('all', 'webapp'),
                'url' => 'axcoto.com',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'gba.png',
                'type' => array('all', 'webapp'),
                'url' => 'axcoto.com',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'huect.png',
                'type' => array('all', 'joomla'),
                'url' => 'axcoto.com',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'moda.png',
                'type' => array('all', 'zendcart'),
                'url' => 'axcoto.com',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'plum.png',
                'type' => array('all', 'wordpress'),
                'url' => 'quicktimeplumbing.co.uk',
                'info' => 'Wordpress Design Development',
            ),
            array(
                'file' => 'plaz.png',
                'type' => array('all', 'zendcart'),
                'url' => 'axcoto.com',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'solarlink.png',
                'type' => array('all', 'zendcart'),
                'url' => 'axcoto.com',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'wbc.png',
                'type' => array('all', 'wordpress'),
                'url' => 'axcoto.com',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'fkc.png',
                'type' => array('all', 'wordpress'),
                'url' => 'axcoto.com',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'rndvodka.png',
                'type' => array('all', 'ee'),
                'url' => 'axcoto.com',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'green-boomerang.png',
                'type' => array('all', 'magento'),
                'url' => 'axcoto.com',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'hospital.png',
                'type' => array('all', 'wordpress'),
                'url' => 'thehospital.us',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'alta.png',
                'type' => array('all', 'webapp'),
                'url' => '',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'efl.png',
                'type' => array('all', 'ee'),
                'url' => 'efl4u.com/demo',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'fbc.png',
                'type' => array('all', 'wordpress'),
                'url' => '',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'greenworld.png',
                'type' => array('all', 'wordpress'),
                'url' => '',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'happyhour.png',
                'type' => array('all', 'wordpress'),
                'url' => '',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'ic.png',
                'type' => array('all', 'ee'),
                'url' => 'axcoto.com/d/infocreek',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'juststance.png',
                'type' => array('all', 'wordpress'),
                'url' => 'juststance.com',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'wayouttech.png',
                'type' => array('all', 'wordpress'),
                'url' => 'wayouttechnology.com',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'ritelogic.png',
                'type' => array('all', 'webapp'),
                'url' => 'axcoto.com/d/ritelogic',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'twbadge.png',
                'type' => array('all', 'webapp'),
                'url' => 'axcoto.com/d/twbadge',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'pocoo.jpg',
                'type' => array('all', 'webapp'),
                'url' => 'mangaandme.com',
                'info' => 'Design&amp; Development',
            ),
            array(
                'file' => 'sniper.jpg',
                'type' => array('all', 'webapp'),
                'url' => 'mangaandme.com',
                'info' => 'Development',
            ),
            array(
                'file' => 'dmv.png',
                'type' => array('all', 'wordpress'),
                'url' => 'mangaandme.com',
                'info' => 'Development',
            ),
            array(
                'file' => 'buzz.png',
                'type' => array('all', 'webapp'),
                'url' => 'axcoto.com',
                'info' => 'Development',
            ),
        );
        $this->layout->nest('content', 'portfolio.index', array(
            'portfolio' => $portfolio
        ));
    }

    public function action_resize() {
        return '
#!/bin/bash
for i in *.png;  do 
	#convert -scale 300x187 $i "thumbs/$i"
	convert $i -crop 200x200 $i "s/$i"
	echo "Crop $i"
done

#!/bin/bash
for i in *.png;  do 
	#convert -scale 300x187 $i "thumbs/$i"
	convert -resize 200x200 -crop 200x200 $i "thumbs/$i"
	echo "Converted $i"
done

';
    }

}