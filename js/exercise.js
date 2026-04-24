/*d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv",d3.autoType)
.then(data => {

    var circle = d3.select("svg")
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => d.Xi)
        .attr("cy", d => d.Yi)
        .attr("r", 4)
        .attr("fill", d => d.color);

    circle.transition()
        .duration(1000)
        .attr("cx", d => d.Xf)
        .attr("cy", d => d.Yf);

}
)
*/

d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv",d3.autoType)
.then(data => {

    var circle = d3.select("svg")
        .selectAll("circle")
        .data(data)

    var circles_join = circle
        .join("circle")
        .attr("cx", d => d.Xi)
        .attr("cy", d => d.Yi)
        .attr("r", 4)
        .attr("fill", d => d.color);

circles_join.transition()
        .duration(1000)
        .attr("cx", d => d.Xf)
        .attr("cy", d => d.Yf);

//    circles_transition.on("mouseover", function() {d3.select(this).transition().attr('r', 20)});
//    circles_transition.on("mouseout",  function() {d3.select(this).transition().attr('r', 4) });

    d3.selectAll("circle").on("mouseover", function() {d3.select(this).transition().attr('r', 40)});
    d3.selectAll("circle").on("mouseout",  function() {d3.select(this).transition().attr('r', 4) });

}
)
