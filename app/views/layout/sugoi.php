<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="Axcoto offers top-notch web developement services">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/favicon.ico" type="image/png">
    <link rel="shortcut icon" href="/favicon.ico" type="image/png">

    <title>
        <?php echo $pageTitle ?>
    </title>
    
    <?php echo $stylesheet;?>

    <meta property="og:title" content="Axcoto - We turn ideas into websites">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo secure_url('/')?>">
    <meta property="og:image" content="<?php echo secure_asset('assets/ax.png')?>">
    <meta property="og:site_name" content="Axcoto">
    <meta property="fb:admins" content="624804112">
    <meta property="og:description" content="Axcoto is a free lancer service focus in web&amp; mobile development. I also sell ready-to-use code library such as WordPress plugin, jQuery plugin, custom Rails/PHP apps.">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>

<body id="home">
    <div id="wrapper">
        <header class="pure-g-r">
            <h2 id="logo" class="pure-u-1-4"><a href="<?php echo url() ?>">Axcoto</a></h2>
            <nav class="pure-u-3-4">
                <ul class="navigation" id="main-nav">
                    <li <?php (Request::is( '/') || Request::url()=='' ) ? print( 'class="current"') : print( '') ?>>
                        <a href="<?php echo url() ?>"><span>Home</span></a>
                    </li>

                    <li <?php Request::is( 'shop*')? print( 'class="current"') : print( '') ?>>
                        <a href="<?php echo url('shop') ?>"><span>Shop</span></a>
                    </li>

                    <li <?php Request::is( 'portfolio*') ? print( 'class="current"') : print( '') ?>>
                        <a href="<?php echo url('portfolio') ?>"><span>Work</span></a>
                    </li>

                    <li <?php Request::is( 'lab*') ? print( 'class="current"') : print( '') ?>>
                        <a href="<?php echo url('lab') ?>"><span>Lab</span></a>
                    </li>

                    <li <?php Request::is( 'product*') ? print( 'class="current"') : print( '') ?>>
                        <a href="<?php echo url('product') ?>"><span>Product</span></a>
                    </li>

                    <li <?php Request::is( 'contact*') ? print( 'class="current"') : print( '') ?>>
                        <a href="<?php echo url('contact') ?>"><span>Contact</span></a>
                    </li>
                    <li>
                        <a href="http://log.axcoto.com"><span>Blog</span></a>
                    </li>
                </ul>
            </nav>
        </header>

        <?php echo $content ?>

        <footer class="pure-g-r legal">
            <div class="pure-u-1-2">
                <section>
                    <p>
                        &copy; 2013 by Vinh. Just a humble guy. Trying to build a family. Help me paying my wedding by <a href="<?php echo url('contact')?>">hiring</a> me, or
                        <a href="<?php echo url('shop') ?>">buy</a> my stuff, <a href="https://www.gittip.com/kureikain/">tip</a> me or <a href="<?php echo url('shop')?>">donate</a> to me.
                    </p>
                </section>
            </div>
            <div class="pure-u-1-2">

                <section class="links">
                    <!--
                        <nav>
                            <ul class="navigation" id="links">
                                <li <?php Request::path() == '' ? print('class="current"')  : print('')  ?>>
                                    <a href="<?php echo url() ?>"><span>Home</span></a>
                                </li>    
                                <li class="<?php echo Request::path('shop')? 'current':''  ?>" title="sa" >
                                    <a href="<?php echo url('shop') ?>"><span>Shop</span></a>
                                </li>

                                <li <?php Request::is('portfolio/*')? print('class="current"')  : print('')  ?>>
                                    <a href="<?php echo url('portfolio') ?>"><span>Work</span></a>
                                </li>

                                <li <?php Request::is('contact/*')? print('class="current"')  : print('')  ?>>
                                    <a href="<?php echo url('contact') ?>"><span>Contact</span></a>
                                </li>
                            </ul>
                        </nav>
                        -->
                    Related Projects:
                    <ul>
                        <li>
                            <a title="Status Page Made Easy" href="http://noty.im">Noty.Im</a>
                        </li>
                        <li>
                            <a title="make up review search engine" href="http://xinh.so">Xinh.So</a>
                        </li>
                        <li>
                            <a title="Meme Storm lets you read meme from multiple sites" href="https://itunes.apple.com/us/app/meme-storm/id601632226?mt=8">Meme Storm</a>
                        </li>
                    </ul>
                </section>
            </div>
        </footer>
    </div>
    <!-- End #wrapper -->
    <div id="overlay"></div>

    <?php echo $javascript; ?>
</body>
</html>
