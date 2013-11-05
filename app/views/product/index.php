<hgroup class="intro">
	<h3>We love open source&amp; free software </h3>
	<h4>
		Beside working on client projects, work on my day jons to make a living, I also 
    worked on personal project, or side project you could said.
    I try to open sourced them. 
    I do enjoy building them. And I hope you do when going aroudn my code,
    and try not to be mad at me when smell sth. Fork my project on github, and help me fix/refactor it if you have time.
    I research and dig to lastest 
		technology, then try to apply them for client's project if that will help to reduce the cost, make the work faster, more reliable.
    All is because I care about great web application with high performance, robust, and scalable. But notice that, I fail sometimes, so keep it in mind when checking out these things.
	</h4>
</hgroup>

<div class="content" id="product">
  
  <div class="toolbar">
    <h2>Here are my stuffs. If you like them, then <a href="<?php echo url('contact') ?>">hire me</a>
  </div>	
  
  <?php foreach ($products as $category) : ?>
  <div class="pure-g-r">
    
    <aside class="pure-u-1-3 sidebar">
      <dl>
          <dt><?php echo $category['title'];?></dt>
          <dd>
            <?php echo $category['desc'];?>
          </dd>
      </dl>        
    </aside>

    <section class="pure-u-2-3">
      <?php foreach ($category['nodes'] as $node) :?>
      <h4 class="header1"><?php echo $node['title'];?></h4>
      <p>
        <?php echo $node['desc'];?>
      </p>
      <?php endforeach;?>
      
      <h4 class="header1">Modal Register</h4>
      <p>
        Alow member register on your site via a modal box!
        Then you can use Simple Modal Login to help user can 
      </p>
      
      <h4 class="header1">Simple Captcha</h4>
      <p>
        Very simple captcha   
      </p>


      <h4 class="header1">Elegant theme</h4>
      <p>
        A very clear elegant theme
      </p>
    </section>    
  </div>
  <?php endforeach;?>
    
</div>
