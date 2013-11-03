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
            .charge(-150 * this.zoom)
            .linkDistance(50 * this.zoom)
            .linkStrength(0.3)
            .gravity(0.1)
            .size([this.width, this.height]);

        this.outer_svg = d3.select("div#d3me").append("svg")
            .attr("width", this.width)
            .attr("height", this.height)
            .attr("viewBox", "0 0 " + this.width + " " + this.height)
            .attr("preserveAspectRatio", "xMidYMid meet")
            .attr("pointer-events", "all")
            .append('svg:g')
            //.call(d3.behavior.zoom().on("zoom", redraw)) no more zoom
        this.rect = this.outer_svg.append('svg:rect')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('fill', 'rgba(255, 255, 255, 0)');
        this.svg = this.outer_svg.append('svg:g');
            // .call(d3.behavior.zoom().on("zoom", redraw))

        this.complete_graph = {}
        this.params = {'center': 'Vinh','degree': 5}
    }

    GraphTree.prototype.redraw = function () {
            svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
    }

    GraphTree.prototype.repaint = function (params) {
        d3.selectAll('.node').remove();
        d3.selectAll('.link').remove();
        var graph = this.complete_graph;
        if (params['center'] && params['degree']) {
            this.force.gravity(0.03);
            graph = subgraph_neighborhood(graph, params['center'], +params['degree']);
        }
        this.display_graph(graph)
    }

    /**
    * Turn the links to actually node
    */
    GraphTree.prototype.set_links = function (graph) {
        var links = graph.links;
        var nodes = graph.nodes;
        for (i = 0; i < links.length; ++i) {
            o = links[i];
            if (typeof o.source == "number") o.source = nodes[o.source];
            if (typeof o.target == "number") o.target = nodes[o.target];
        }
        this.complete_graph = graph
    }

    GraphTree.prototype.display_graph = function (graph, zoom, center) {
        var zoom = this.zoom
            ,center = this.params['center']
            ,node_size = 16 * zoom
            ,node_text_size = 8 * zoom + "px"
            ,color = this.color

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

        node.append("text")
            .text(function (d) {
                return d.name.substr(0, 5)
            })
            .style("fill", "white")
            .style("text-anchor", "middle")
            .style("font-size", node_text_size)
            .style("font-family", "monospace");
        
        node.append("image")
            .attr('xlink:href', 'http://axcoto.dev/images/axcoto-fav.png')
            .attr('width', 90)
            .attr('heigh', 90)
            .style('width', '90px')
            .style('heigh', '90px')
            
        node.on('click', function (d, i, event) {
            reload({
                center: d.name,
                degree: 5
            });
            d3.event.stopPropagation();
        });

        node.on('mouseover', function () {
            d3.select(this)
                .select('circle')
                .style('stroke-width', 2)
                .style('z-index', 5)
                .style('stroke', '#333')
                .attr("r", function (d) {
                    var len = d.name.length;
                    return Math.max(node_size * 1.2, node_size * len / 5);
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
                .attr("r", node_size);

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
                    return d.y + 5;
                });
        });

    }

    var g = new GraphTree()
    d3.json("/me", function (error, graph) {
        g.set_links(graph);
        g.repaint({center: 'Vinh', degree: 5});
    })

    

    function subset(node_list, node_names) {
        var new_nodes = [];
        for (var i = 0; i < node_list.length; i++) {
            var node = node_list[i];
            if (node_names[node.name] === 1) {
                new_nodes.push(node);
            }
        }
        return new_nodes;
    }

    function subgraph_neighborhood(graph, centre, degree) {
        var nodes = neighborhood(graph, centre, degree);
        var new_links = [];
        var new_nodes = subset(graph.nodes, nodes);
        for (var i = 0; i < graph.links.length; i++) {
            var link = graph.links[i];
            if ((nodes[link.source.name] === 1) && (nodes[link.target.name] === 1)) {
                new_links.push(link);
            }
        }
        return {
            "nodes": new_nodes,
            "links": new_links
        };
    }

    // wants a graph with edge names, not edge ids
    function neighborhood(graph, node, degree) {
        if (degree == 1) {
            var neighbors = {};
            neighbors[node] = 1;
            for (var i = 0; i < graph.links.length; i++) {
                var link = graph.links[i];
                if (link.source.name === node) {
                    neighbors[link.target.name] = 1;
                } else if (link.target.name === node) {
                    neighbors[link.source.name] = 1;
                }
            }
            return neighbors;
        } else {
            var immediate_neighbors = neighborhood(graph, node, 1);
            var all_neighbors = {};
            for (neighbor in immediate_neighbors) {
                var its_neighbors = neighborhood(graph, neighbor, degree - 1);
                obj_merge(all_neighbors, its_neighbors);
            }
            obj_merge(all_neighbors, immediate_neighbors);
            return all_neighbors;
        }
    }

    function obj_merge(obj1, obj2) {
        for (var attrname in obj2) {
            obj1[attrname] = obj2[attrname];
        }
    }

    function subgraph(graph, min_correlation) {
        min_correlation = +min_correlation;
        var new_links = [];
        var new_nodes = [];
        var node_names = {};
        for (var i = 0; i < graph.links.length; i++) {
            var link = graph.links[i];
            if (link.value >= min_correlation) {
                new_links.push(link);
                node_names[link.source.name] = 1;
                node_names[link.target.name] = 1;
            }
        }

        var new_nodes = subset(graph.nodes, node_names);
        return {
            "nodes": new_nodes,
            "links": new_links
        };
    }

})()