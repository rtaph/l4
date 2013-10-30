<hgroup class="intro">
    <h3>I sell pre-made code component</h3>
    <p>
        Axcoto is the name I go under when selling code components! I try to build small, simple to use product, but sometimes I fail and the product turns out more complex to install and/or use! I made these code component with the idea to cut down your time&amp; cost when developing! You can use them as-is, or based on them and extend
        to your need. You can buy on Envato <a href="http://codecanyon.com/user/kureikain?ref=kureikain">Marketplaces</a>, some other ones you can buy right on my website. I'm going to have a wedding and saving money for it. I appreciate, any amount of money will go to my wedding.
        I also accept free lance projects at this time. <a href="/contact">Contact me.</a>
    </p>

</hgroup>

<div class="content" id="frontpage">
    <div class="toolbar">
        <h2 id="portfolio-link">Our pre-made code component</h2>
    </div>

    <?php
    $start = 0;
    $last = count($products);
    ?>
    <section id="shop-products" class="products pure-g-r">
        <?php
        for ($index = 0; $index < $last; $index++) :
            ?>
        <figure  class="pure-u-1-3">
            <dl>
                <dt>                            
                    <a class="thumb" href="<?php echo $products[$index]['demo']?>" target="blank">
                        <?php echo HTML::image('/images/ajax-loader.gif', '', array('class' => 'lazy', 'data-src' => 'http://ass' . (fmod($index, 4)+1) . '.axcoto.com/media/product/small/' . $products[$index]['file']));?>
                    </a>
                </dt>
                <dd>
                    <a class="pure-button-warning" href="<?php echo $products[$index]['demo']?>">Buy - $<?php echo $products[$index]['price'] ?></a>
                </dd>
            </dl>

            <figcaption>
                <a target="blank"  href="http://codecanyon.net/user/kureikain/portfolio?ref=kureikain">
                    <?php echo $products[$index]['title'] ?>
                </a>
                <p><?php echo $products[$index]['info'] ?></p>
                <a target="blank"  href="http://codecanyon.net/user/kureikain/portfolio?ref=kureikain">Detail&amp; live demo</a>
            </figcaption>
        </figure>            
        <?php
        endfor;
        ?>
    </section>

</div> <!-- End .content -->