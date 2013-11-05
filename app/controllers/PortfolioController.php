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
        $portfolio = Config::get('bucket.portfolio');
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