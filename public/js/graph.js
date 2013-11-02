(function () {

    var width = 960,
        height = 600;
        if ($('#d3me').width() < 960) {
            width = $('#d3me').width()     
        }
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
            .attr("viewBox", "0 0 " + width + " " + height)
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

        d3.json("/me", function (error, graph) {
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


    function random_node() {
        var i = Math.round(Math.random() * complete_graph.nodes.length)
        var node = complete_graph.nodes[i];
        return node.name;
    }

    function parse_get_params() {
        var prmstr = window.location.search.substr(1),
            prmarr = prmstr.split("&"),
            params = {};

        for (var i = 0; i < prmarr.length; i++) {
            var tmparr = prmarr[i].split("=");
            params[tmparr[0]] = tmparr[1];
        }
        return params;
    }

    function set_links(graph) {
        var links = graph.links;
        var nodes = graph.nodes;
        for (i = 0; i < links.length; ++i) {
            o = links[i];
            if (typeof o.source == "number") o.source = nodes[o.source];
            if (typeof o.target == "number") o.target = nodes[o.target];
        }
    }

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

    function find_components(graph) {
        var components = [];
        for (var i = 0; i < graph.links.length; i++) {
            var link = graph.links[j];
            var found = false;
            for (var j = 0; j < components.length; j++) {
                var component = component[j];
                if (component[link.source.name] == 1) {
                    component[link.target.name] = 1;
                    found = true;
                } else if (component[link.target.name == 1]) {
                    component[link.source.name] = 1;
                    found = true;
                }
            }
            if (found == false) {
                var new_component = {};
                new_component[link.source.name] = 1;
                new_component[link.target.name] = 1;
                components.push(new_component);
            }
        }
        return components;
    }

    function set_component_ids(graph) {
        var components = find_components(graph);
        for (var i = 0; i < components.length; i++) {

        }
    }

    function display_graph(graph, zoom, center) {
        var node_size = 16 * zoom,
            node_text_size = 8 * zoom + "px";
        force
            .nodes(graph.nodes)
            .links(graph.links)
            .start();

        var link = svg.selectAll(".link")
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

        var node = svg.selectAll(".node")
            .data(graph.nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .call(force.drag);

        node.append("circle")
            .attr("r", function (d) {
                // return node_size ;// * 2 * d.value
                return d.size * zoom
            })
            .attr('class', function (d) {
                return d.name === center ? 'center-node' : ''
            })
            .style("fill", function (d) {
                return color(d.group);
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
            .attr('xlink:href', '/images/axcoto-fav.png')
            .attr('width', 90)
            .attr('heigh', 90)
            .style('width', 90)
            .style('heigh', 90)
            
        node.on('click', function (d, i, event) {
            reload({
                center: d.name,
                degree: 2
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

        force.on("tick", function () {
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

})()