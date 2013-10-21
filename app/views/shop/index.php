<hgroup class="intro">
    <h3>We sell pre-made code component</h3>
    <h4>
		Besides doing client works, we build tailor code components! These will cut down your time&amp; cost! You can use them
        as based-on code components for your works!
        Some of scripts you can buy&amp; download via Envato <a href="http://codecanyon.com/user/kureikain?ref=kureikain">Marketplaces</a>, some other ones you can buy right on this website
    </h4>

</hgroup>

<div class="content" id="frontpage">
    <div class="toolbar">
        <h2 id="portfolio-link">Our pre-made code component</h2>
    </div>

    <?php
    $start = 0;
    $last = count($products);
    ?>
    <ul id="shop-products" class="products">
        <?php
        for ($index = 0; $index < $last; $index++) :
            ?>
            <li>
                <figure>
                    <dl>
                        <dt>                            
                        <a class="thumb" href="<?php echo $products[$index]['demo']?>" target="blank">
                            <?php echo HTML::image('http://ass' . (fmod($key, 4)+1) . '.axcoto.com/media/product/small/' . $products[$index]['file']);?>
                        </a>
                        </dt>
                        <dd>
                            <a href="<?php echo $products[$index]['demo']?>">Buy - $<?php echo $products[$index]['price'] ?></a>
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
            </li>
            <?php
        endfor;
        ?>

    </ul>

</div> <!-- End .content -->
