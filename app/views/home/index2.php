<hgroup class="intro">
    <h3>I'm Vinh. A Catholic. A programmer.</h3>
    <h4>I am just a humble, infamous programmer who is lucky enough to be loved by an awesome girl. I enjoy programming. I come for Linux and stay for Ruby. </h4>
</hgroup>

<div class="content" id="frontpage">
    <div class="toolbar">
        <h2 id="portfolio-link">We sell scripts, code components too. Browse <a href="<?php echo URL::to('shop') ?>">our shop</a></h2>
    </div>
    
    <div class="pure-g-r">

        <section class="alpha pure-u-1-3">
            <h4 class="header1" id="what-we-do">From <a href="<?php echo URL::to('shop') ?>">our shop</a></h4>

            <ul id="latest-products" class="products">
                <?php
                $products = array_slice($products, 0, 4);
                foreach ($products as $key=>$item) :
                    ?>
                    <li>
                        <figure class="pure-u">
                            <dl class="pure-u-1-3">
                                <dt>
                                <a class="thumb" href="http://codecanyon.net/user/kureikain/portfolio?ref=kureikain" target="blank">
                                    <img class="lazy" src="<?php echo asset('http://ass' . (fmod($key, 4)+1) . '.axcoto.com/media/product/small/' . $item['file']) ?>" />
                                </a>
                                </dt>
                            </dl>
                            <figcaption  class="pure-u-2-3">
                                <a target="blank"  href="http://codecanyon.net/user/kureikain/portfolio?ref=kureikain"><?php echo $item['title'] ?></a>
                                <p><?php echo $item['info'] ?></p>
                                <a target="blank"  href="http://codecanyon.net/user/kureikain/portfolio?ref=kureikain">Detail&amp; live demo</a>
                            </figcaption>
                        </figure>
                    </li>
                <?php endforeach ?>
            </ul>
        </section>

        <section class="beta  pure-u-1-3">
            <h4 class="header1">What <a href="#">Axcoto</a> does</h4>
            <p>
                In generally, we made website&amp; web application! 
                When you had any ideas related to web, shot us an email so we can start!
                Below are some ideas of what we do:
            </p>
            <ul id="about">
                <li>Custom PHP development! Especially we use Kohana for our web application. </li>
                <li>Custom Ruby development! Especially we use Rails or Sinatra. </li>
                <li>E-Commerce Development: Magento, ZendCart</li>
                <li>Front-End development: XHTML/CSS, JavaScript (We focus on jQuery)</li>
                <li>Facebook,Twitter  Application</li>
                <li>
                    Wordpress, ExpressionEngine themes and plugins: We are very good at these platform
                    and publish some plugin
                </li>
                <li>WordPress, ExpresionEngine training</li>
                <li>Not a good fit? Just <a href="<?php echo URL::to('contact') ?>">contact us</a> to see of we can sort it out for you</li>
            </ul>
        </section>

        <section class="omega  pure-u-1-3">

            <h4 class="header1"><a href="<?php echo URL::to('contact') ?>">Clients</a> love us</h4>
            <p>Thing other people say about me prove <a href="<?php echo URL::to('portfolio') ?>">my skill</a><br />
                Listen to what our client say about us! And <a href="<?php echo URL::to('contact') ?>">hire me</a> for next project! Will you, right?</p>

            <dl class="testimonial">
                <dt class="company">
                From <a href="http://fastkeycodes.com">FastKeyCodes</a>
                </dt>
                <dt class="author">
                <a href="http://fastkeycodes.com">Jim Morrison</a> said
                </dt>
                <dd>
                    Kurei is the best PHP/MySQL programmer I've had the pleasure to work with. I suggest him to anyone who needs a reliable professional programmer! He is quick, precise and understands every aspect of web development. We've hired him to work with us for an ongoing basis he is that great!
                </dd>
            </dl>

            <dl class="testimonial">
                <dt class="company">From <a href="http://www.effectwebagency.com">Effect Web Agency</a></dt>
                <dt class="author"><a href="http://www.effectwebagency.com/">Steve Schmidt</a> said</dt>
                <dd>He's very knowledgeable. Even when we delayed his work, we picked up were he left off and wrapped everything up very well.</dd>
            </dl>

        </section>
    </div> <!-- // .pure-g-r -->
</div> <!-- // .content -->
