<hgroup class="intro">
    <h3>See what we done before <a href="<?php echo url('contact') ?>">hire us</a></h3>
    <h4>
        Wow, we must say you are absolutely correct when wanting to take a look on our work. We have a strong passion in our works. It's not just a "job", it's a career.
        If you are interesed in our works, don't hesitate to <a href="<?php echo url('contact') ?>">shot us</a> an email! 
        Again, we emphasize that any your imagination can go live :P. 
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

    <ul id="portfolio-source" style="display: none">
        <?php for ($index = $start; $index < $last; $index++) : ?>
            <?php $pos = fmod($index, 4); ?>
            <li class="<?php echo $pos == 0 ? 'start' : ($pos == 3 ? 'last' : '') ?> <?php echo join(' ', $portfolio[$index]['type']) ?>">
                <a rel="portfolio" href="<?php echo $portfolio[$index]['file'] ?>" class="project-thumb">
                    <img src="<?php echo URL::asset('http://ass' . (fmod($index,3)+1) . '.axcoto.com/media/portfolio/thumbs/' . $portfolio[$index]['file'])?>" alt="http:/<?php echo $portfolio[$index]['url'] ?>" />
                </a>
            </li>
        <?php endfor ?>

    </ul>

    <ul id="portfolio">
        <?php for ($index = $start; $index < $last; $index++) : ?>
            <?php $pos = fmod($index, 4); ?>
            <li class="<?php echo $pos == 0 ? 'start' : ($pos == 3 ? 'last' : '') ?> <?php echo join(' ', $portfolio[$index]['type']) ?>">
                <a rel="portfolio" href="<?php echo $portfolio[$index]['file'] ?>" class="project-thumb">
                    <img src="<?php echo URL::asset('http://ass' . (fmod($index,3)+1) . '.axcoto.com/media/portfolio/thumbs/' . $portfolio[$index]['file'])?>" alt="http:/<?php echo $portfolio[$index]['url'] ?>" />
                </a>
            </li>
        <?php endfor ?>

    </ul>
</div> <!-- End .content -->
