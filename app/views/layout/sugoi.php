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
        <meta property="og:description" content="Axcoto is a free lancer service focus in web development. I also sell ready-to-use code library such as WordPress plugin, jQuery plugin, custom Rails/PHP apps."/>

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
                            &copy; 2013 by Vinh. Just a humble guy. Trying to build a family. Help me by <a href="<?php echo url('contact')?>">hiring</a> me, or
                            <a href="<?php echo url('shop') ?>">buy</a> my stuff or <a href="<?php echo url('shop')?>">donate</a> me.
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
        </div> <!-- End #wrapper -->
        <div id="overlay"></div>        
        <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
        <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
        <?php echo HTML::script('/js/graph.js');?>
        <?php echo HTML::script('http://ass2.axcoto.com/js/transform/dist/jquery.transform-0.9.3.min.js');?>
        <?php echo HTML::script('http://ass3.axcoto.com/js/axcoto.js');?>        
        <script>
 var width = 960,
        height = 600;

    var color = d3.scale.category10();

    var zoom = 2;
    var force = d3.layout.force()
        .charge(-150 * zoom)
        .linkDistance(50 * zoom)
        // .linkStrength(function(l) {return l.value * 5})
        .linkStrength(0.3)
        .gravity(0.1)
        .size([width, height]);

    var outer_svg = d3.select("div#d3me").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", "0 0 " + width + " " + height )
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("pointer-events", "all")
        .append('svg:g')
        //.call(d3.behavior.zoom().on("zoom", redraw)) no more zoom
    rect = outer_svg.append('svg:rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'rgba(255, 255, 255, 0)');
    svg = outer_svg.append('svg:g');
        // .call(d3.behavior.zoom().on("zoom", redraw))


    function redraw() {
      svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
    }

    var complete_graph;

    function reload(params) {
      d3.selectAll('.node').remove();
      d3.selectAll('.link').remove();
      var graph = complete_graph;
      if (params['min_correlation']) {
        $('#min-correlation').val(params['min_correlation']);
        graph = subgraph(graph, +params['min_correlation']);
      }
      if (params['center'] && params['degree']) {
        force.gravity(0.03);
        $('#degree').val(params['degree']);
        $('#cmd').val(params['center']);
        graph = subgraph_neighborhood(graph, params['center'], +params['degree']);
      }
      display_graph(graph, zoom, params['center']);
    }

    d3.json("/me", function(error, graph) {
      set_links(graph);
      complete_graph = graph;
      var params = parse_get_params();
      if (!params['center']) {
        params['center'] = 'Vinh';
      }
      if (!params['degree']) {
        params['degree'] = 2;
      }
      params['degree'] = 5
      reload(params);
    })        
        </script>
    </body></html>