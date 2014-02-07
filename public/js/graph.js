(function () {
    var GraphTree = function () {
        this.width = 960
        this.height = 600;
        if ($('#d3me').width() < 960) {
            this.width = $('#d3me').width()     
        }
        this.color = d3.scale.category10();

        this.zoom = 2;
        this.force = d3.layout.force()
            .distance(50 * this.zoom)
            .charge(-150 * this.zoom)
            // .linkDistance(50 * this.zoom)
            // .linkStrength(0.3)
            .gravity(0.1)
            .size([this.width, this.height]);
 
        this.svg = d3.select("div#d3me").append("svg")
            .attr("width", this.width)
            .attr("height", this.height);

        this.complete_graph = {}
        this.params = {'center': 'Vinh','degree': 5}
    }

    GraphTree.prototype.redraw = function () {
        this.svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
    }

    GraphTree.prototype.repaint = function (params) {
        d3.selectAll('.node').remove();
        d3.selectAll('.link').remove();
        if (params['center'] && params['degree']) {
            this.force.gravity(0.03);
        }
        this.display_graph()
    }

    GraphTree.prototype.set_links = function (graph) {
        this.complete_graph = graph
    }

    GraphTree.prototype.display_graph = function () {
        var t = this
        var json = this.complete_graph
        var svg = this.svg
        var force = this.force

        var graph = this.complete_graph
            , zoom = this.zoom
            , center = this.params['center']
            , node_size = 16 * zoom
            , node_text_size = 8 * zoom + "px"
            , color = this.color

        this.force
            .nodes(graph.nodes)
            .links(graph.links)
            .start();

        var link = this.svg.selectAll(".link")
            .data(graph.links)
            .enter().append("line")
            .attr("class", "link")
            // .attr("title", function(d) {return d.value + ' '})
            .style("stroke-width", function (d) {
                return d.value * 10;
            });

        link.append("svg:title").text(function (d) {
            return d.value + ' '
        });

        var node = this.svg.selectAll(".node")
            .data(graph.nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .call(this.force.drag);

        node.append("circle")
            .attr("r", function (d) {
                // return node_size ;// * 2 * d.value
                return d.size * zoom
            })
            .attr('class', function (d) {
                return d.name === center ? 'center-node' : ''
            })
            .style("fill", function (d) {
                return color(d.group)
            });

        node.append("image")
          .attr("xlink:href", function (d) {
            if (typeof d.icon === 'undefined' || d.icon == '') {
                return "http://axcoto.com/images/axcoto-fav.png"
            }
            return '//axcoto.com/images/graph/' + d.icon
          })
          .attr("x", -45)
          .attr("y", -45)
          .attr("width", function (d) {
            return d.size * zoom
          })
        .attr("height", function (d) {
            return d.size * zoom
          });
        node.append("text")
            .text(function (d) {
                return d.name.substr(0, 5)
            })
            .style("fill", "white")
            .style("text-anchor", "middle")
            .style("font-size", node_text_size)
            .style("font-family", "helvetica")
            
        node.on('click', function (d, i, event) {
            if (typeof d.url !== 'undefined' || d.url !=='') {
                var win=window.open(d.url, '_blank');
                win.focus();
            }    

            t.repaint({
                center: d.name,
                degree: 5
            });
            d3.event.stopPropagation();
        })

        node.on('mouseover', function () {
            d3.select(this)
                .select('circle')
                .style('stroke-width', 2)
                .style('z-index', 5)
                .style('stroke', '#333')
                .attr("r", function (d) {
                    var len = d.name.length
                    return Math.max(node_size * 1.2, node_size * len / 5)
                });

            d3.select(this)
                .select('text')
                .text(function (d) {
                    return d.name
                });
        })

        d3.selectAll(".center-node").style('fill', '#f00')
        node.on('mouseout', function () {
            d3.select(this)
                .select('circle')
                .style('stroke-width', 0)
                .attr("r", function (d) {
                    //return node_size
                    return d.size * zoom
                });

            d3.select(this)
                .select('text')
                .text(function (d) {
                    return d.name.substr(0, 5)
                });
        })

        // node.append("title")
        //     .text(function(d) { return d.name; });
        // text.append("title")
        //     .text(function(d) { return d.name; });

        this.force.on("tick", function () {
            link.attr("x1", function (d) {
                return d.source.x;
            })
                .attr("y1", function (d) {
                    return d.source.y;
                })
                .attr("x2", function (d) {
                    return d.target.x;
                })
                .attr("y2", function (d) {
                    return d.target.y;
                });

            node.selectAll('circle')
                .attr("cx", function (d) {
                    return d.x;
                })
                .attr("cy", function (d) {
                    return d.y;
                });

            node.selectAll('text')
                .attr("x", function (d) {
                    return d.x;
                })
                .attr("y", function (d) {
                    return d.y;
                });

            node.selectAll('image')
                .attr("x", function (d) {
                    return d.x;
                })
                .attr("y", function (d) {
                    return d.y;
                })
            // node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });               
            
        });
        
    }

    var g = new GraphTree()
    d3.json("/me", function (error, graph) {
        g.set_links(graph);
        g.repaint({center: 'Vinh', degree: 5});
    })

})()
