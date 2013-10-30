<hgroup class="intro">
    <h3>Let see what I have build, then <a href="<?php echo url('contact') ?>">hire me</a></h3>
    <h4>
        I'm happy to have you go this far at this page.
        I'm a full-stack developer. My work goes from implementing PSD stuff, building custom web application,
        scaling back-end stack, server maintainece.
        These are clients work,
        beside it, I also build some application that you can check out on <a href="/product">product</a> page.
        If you are interesed in my works, don't hesitate to <a href="<?php echo url('contact') ?>">shot me</a> an email.
        I'm also offer server optimization service to help you scale your web application. 
         
    </h4>

</hgroup>

<div class="content" id="frontpage">

    <div class="toolbar">
        <h2 id="portfolio-link">Latest&amp; Greatest</h2>	
        <ul id="portfolio-nav">
            <li data-id="all" class="current"><a class="all" href="#all">All</a></li>
            <li data-id="webapp"><a class="webapp" href="#app">Web/App</a></li>
            <li data-id="wordpress"><a class="wordpress" href="#wordpress">Wordpress</a></li>
            <li data-id="ee"><a class="ee" href="#ee">ExpressionEngine</a></li>
            <li data-id="joomla"><a class="joomla" href="#joomla">Joomla</a></li>
            <li data-id="magento"><a class="magento" href="#magento">Magento</a></li>	
        </ul>
    </div>	

    <?php
    $start = 0;
    $last = count($portfolio);
    ?>

    <div class="pure-g-r">
        <div class="pure-u-1">

            <ul id="portfolio-source" style="display: none">
                <?php for ($index = $start; $index < $last; $index++) : ?>
                    <?php $pos = fmod($index, 4); ?>
                    <li class="<?php echo $pos == 0 ? 'start' : ($pos == 3 ? 'last' : '') ?> <?php echo join(' ', $portfolio[$index]['type']) ?>">
                        <a rel="portfolio" href="<?php echo $portfolio[$index]['file'] ?>" class="project-thumb">
                            <?php echo HTML::image('/images/ajax-loader.gif', "http://{$portfolio[$index]['url']}", array('class' => 'lazy', 'data-src' => 'http://ass' . (fmod($index,3)+1) . '.axcoto.com/media/portfolio/thumbs/' . $portfolio[$index]['file']));?>                    
                        </a>
                    </li>
                <?php endfor ?>

            </ul>

            <ul id="portfolio">
                <?php for ($index = $start; $index < $last; $index++) : ?>
                    <?php $pos = fmod($index, 4); ?>
                    <li class="<?php echo $pos == 0 ? 'start' : ($pos == 3 ? 'last' : '') ?> <?php echo join(' ', $portfolio[$index]['type']) ?>">
                        <a rel="portfolio" href="<?php echo $portfolio[$index]['file'] ?>" class="project-thumb">
                            <img class="lazy" src="<?php echo URL::asset('http://ass' . (fmod($index,3)+1) . '.axcoto.com/media/portfolio/thumbs/' . $portfolio[$index]['file'])?>" alt="http:/<?php echo $portfolio[$index]['url'] ?>" />
                        </a>
                    </li>
                <?php endfor ?>

            </ul>
        </div> <!-- //.pure-u-1 -->
    </div> <!-- //.pure-g-r -->        
</div> <!-- End .content -->