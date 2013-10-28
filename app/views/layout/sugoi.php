<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="description" content="Axcoto offers top-notch web developement services" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon"  href="<?php echo asset('http://ass1.axcoto.com/images/axcoto-fav.png') ?>" type="image/png"/> 
        <link rel="shortcut icon" href="<?php echo asset('http://ass2.axcoto.com/images/axcoto-fav.png') ?>" type="image/png" /> 

        <title><?php echo $pageTitle ?></title>

        <?php echo HTML::style('http://ass3.axcoto.com/css/purecss.css?'. time()); ?>
        <?php echo HTML::style('/css/style.css?' . time()); ?>
        <?php //echo HTML::style('js/colorbox/colorbox.css'); ?>

        <meta property="og:title" content="Axcoto - We turn ideas into websites"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="http://axcoto.com/"/>
        <meta property="og:image" content="http://ass4.axcoto.com/assets/ax.png"/>
        <meta property="og:site_name" content="Axcoto"/>
        <meta property="fb:admins" content="624804112"/>
        <meta property="og:description" content="Axcoto is a small web development company& ready-to-use code item shop! At Axcoto, we make friendly, useful products! We build killing web sites which make our clients' business go smoothly! Also we made professional developer resources like scripts, code component, plugins (focus on WordPress, jQuery) for sale!"/>

        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->

    </head>

    <body id="home">
        <div id="wrapper">
            <header class="pure-g-r">
                <h2 id="logo" class="pure-u-1-8" ><a href="<?php echo url() ?>">Axcoto</a></h2>
                <nav class="pure-u-7-8">
                    <ul class="navigation" id="main-nav">
                        <li <?php (Request::is('/') || Request::url() == '') ? print('class="current"')  : print('')  ?>>
                            <a href="<?php echo url() ?>"><span>Home</span></a>
                        </li>

                        <li <?php Request::is('shop*')? print('class="current"')  : print('')  ?>>
                            <a href="<?php echo url('shop') ?>"><span>Shop</span></a>
                        </li>

                        <li <?php Request::is('portfolio*') ? print('class="current"')  : print('')  ?>>
                            <a href="<?php echo url('portfolio') ?>"><span>Work</span></a>
                        </li>

                        <li <?php Request::is('lab*') ? print('class="current"')  : print('')  ?>>
                            <a href="<?php echo url('lab') ?>"><span>Lab</span></a>
                        </li>

                        <li <?php Request::is('product*') ? print('class="current"')  : print('')  ?>>
                            <a href="<?php echo url('product') ?>"><span>Product</span></a>
                        </li>

                        <li <?php Request::is('contact*') ? print('class="current"')  : print('')  ?>>
                            <a href="<?php echo url('contact') ?>"><span>Contact</span></a>
                        </li>
                        <li>
                            <a href="http://axcoto.com/blog"><span>Blog</span></a>
                        </li>
                    </ul>
                </nav>
            </header>			
            
            <?php echo $content ?>

            <footer>	
                <div class="footer-extra pure-g-r">
                    <section class="pure-u-1-3">
                        <h4 class="header2">Who is <a href="/">Axcoto</a></h4>
                        <p>
                            Axcoto is a one-man endeavor code item shop! 
                            We do custom works&amp; build tailor code stuff for sale to make the world go easier!
                            <a href="<?php echo url('shop') ?>">These code</a> are made aim to ready, easy to use.
                        </p>
                        <p id="copyright">
                            Made by <a href="http://log.axcoto.com/">kureikain</a>                        
                        </p>

                    </section>

                    <section class="pure-u-1-3">
                        <h4 class="header2">Our <a href="<?php echo url('contact') ?>">Apps&amp; tools</a></h4>
                        <p>
                            <a href="http://willingapp.com/">Noty.Im</a>: Status Page Made Easy,&nbsp;
                            <a href="http://mangaandme.com/">Mangeandme</a>: Social network for manga lover,&nbsp; 
                            <a href="http://mangaandme.com/">Font Converter</a>,&nbsp; 
                            <a href="http://mangaandme.com/">Short URL</a>,&nbsp;
                            <a href="http://mangaandme.com/">File Sharing</a>,&nbsp;
                            <a href="http://mangaandme.com/">Facebook Emoticon</a>,&nbsp;
                            <a href="http://mangaandme.com/">Facebook Special Chars</a>,&nbsp;
                            <a href="http://mangaandme.com/">Code Obfucastor</a>,
                            <a href="http://apps.facebook.com/axcotobuzz/?ref=ts">Axcoto Buzz</a>

                        </p>
                    </section>

                    <section class="pure-u-1-3">
                        <h4 class="header2">Axcoto</h4>

                        <p id="social-icons">
                            <a href="http://www.facebook.com/pages/Axcoto/276287961903"><img src="<?php echo asset('images/facebook.png') ?>" /></a>&nbsp;
                            <a href="http://twitter.com/kureikain"><img src="<?php echo asset('images/twitter.png') ?>" /></a>&nbsp;
                            <a href="http://forr.st/-kureikain"><img src="<?php echo asset('images/forrst.png') ?>" /></a>&nbsp;
                            <a href="http://wordpress.org/extend/plugins/profile/kureikain"><img src="<?php echo asset('images/wordpress.png') ?>" /></a>&nbsp;
                            <a href="http://www.youtube.com/kureikain"><img src="<?php echo asset('images/youtube.png') ?>" /></a>&nbsp;
                        </p>
                        <nav>
                            <ul class="navigation" id="links">
                                <li <?php Request::path() == '' ? print('class="current"')  : print('')  ?>>
                                    <a href="<?php echo url() ?>"><span>Home</span></a>
                                </li>    
                                <li class="<?php echo Request::path('shop')? 'current':''  ?>" title="sa" >
                                    <a href="<?php echo url('shop') ?>"><span>Shop</span>sas s asa</a>
                                </li>

                                <li <?php Request::is('portfolio/*')? print('class="current"')  : print('')  ?>>
                                    <a href="<?php echo url('portfolio') ?>"><span>Work</span></a>
                                </li>

                                <li <?php Request::is('contact/*')? print('class="current"')  : print('')  ?>>
                                    <a href="<?php echo url('contact') ?>"><span>Contact</span></a>
                                </li>

                            </ul>
                        </nav>
                        <div class="clear"></div>

                    </section>
                </div>
            </footer>
        </div> <!-- End #wrapper -->
        <div id="overlay"></div>        
        <?php echo HTML::script('http://ass1.axcoto.com/js/jquery-1.7.2.min.js');?>
        <?php //echo HTML::script('js/lib/paper.js');?>
        <?php echo HTML::script('http://ass2.axcoto.com/js/transform/dist/jquery.transform-0.9.3.min.js');?>
        <?php echo HTML::script('http://ass3.axcoto.com/js/axcoto.js');?>
        <?php //echo HTML::script('js/canvas.js');?>
    </body></html>