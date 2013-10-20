<hgroup class="intro">
    <h3>We build awesome web applications</h3>
    <h4>
        Axcoto is a one-man endeavor  code item shop! At Axcoto, we make friendly, useful products! We build killing web sites which make our clients' business go smoothly! Also we made professional developer resources like scripts, code component, plugins (focus on WordPress, jQuery) for sale!
    </h4>
</hgroup>

<div class="content" id="frontpage">
    <div class="toolbar">
        <h2 id="portfolio-link">We sell scripts, code components too. Browse <a href="<?php echo URL::to('shop') ?>">our shop</a></h2>
    </div>
    <div class="clear"></div>

    <section class="alpha">
        <h4 class="header1" id="what-we-do">From <a href="<?php echo URL::to('shop') ?>">our shop</a></h4>

        <ul id="latest-products" class="products">
            <?php
            $products = array_slice($products, 0, 4);
            foreach ($products as $item) :
                ?>
                <li>
                    <figure>
                        <dl>
                            <dt>
                            <a class="thumb" href="http://codecanyon.net/user/kureikain/portfolio?ref=kureikain" target="blank"><img src="<?php echo asset('media/product/small/' . $item['file']) ?>" /></a>
                            </dt>
                        </dl>
                        <figcaption>
                            <a target="blank"  href="http://codecanyon.net/user/kureikain/portfolio?ref=kureikain"><?php echo $item['title'] ?></a>
                            <p><?php echo $item['info'] ?></p>
                            <a target="blank"  href="http://codecanyon.net/user/kureikain/portfolio?ref=kureikain">Detail&amp; live demo</a>
                        </figcaption>
                        <div class="clear"></div>
                    </figure>
                </li>
            <?php endforeach ?>
        </ul>
    </section>

    <section class="beta">
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

    <section class="omega">

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
    <div class="clear"></div>
</div> <!-- End .content -->
