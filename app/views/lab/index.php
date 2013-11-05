<hgroup class="intro">
    <h3>I love learning&amp; experimental.</h3>
    <p>
        I really like all stuffs from front-end to back-end. I love to dive into HTML, enjoying
        magic, gotchas of JavaScript, seeing the back-end code pulling the database, and the TCP
        socket is created. I enjoy all of them. The feeling I got when I SSH into a machine, rolling
        on terminal. Then discovering the greatness of Puppy/Capistrano...
    </p>
    <p>
        I feel I'm very lucky to be born, feed in a good way, and given a happy life over all. I never suffer the terrible
        of hungry, dieing, or war. So I tried to contribute back to open source community, as a thanks to this beautiful life.
        I hope one day I can use technology to make some impact change to the poor country. Unluckily,
        for now, my lab is full of ordinary thing. But I keep dreaming and trying.
    </p>
</hgroup>


<div class="content" id="lab">
    <div class="toolbar">
        <h2>Here are my stuffs. If you like my experimental, <a href="<?php echo url('contact') ?>">hire me</a></h2>
    </div>
    <?php foreach ($lab as $node) : ?>
    <h4 class="header1"><a href="#"><?php echo $node['title'];?></a></h4>
    <p class="triangle-border">
        <?php echo $node['desc'];?>
    </p>
    <?php endforeach;?>
</div>
