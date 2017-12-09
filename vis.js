var chart = d3.parsets()
              .dimensions([ "class",
                            "cap-shape",
                            "cap-surface",
                            "cap-color",
                            "bruises",
                            "odor",
                            "gill-attachment",
                            "gill-spacing",
                            "gill-size",
                            "gill-color",
                            "stalk-shape",
                            "stalk-root",
                            "stalk-surface-above-ring",
                            "stalk-surface-below-ring",
                            "stalk-color-above-ring",
                            "stalk-color-below-ring",
                            "veil-type",
                            "veil-color",
                            "ring-number",
                            "ring-type",
                            "spore-print-color",
                            "population",
                            "habitat"])
              .spacing(800)
              .tension(0.7)
              .width(1000)
              .height(3000);

console.log("pingas");

var vis = d3.select("#vis").append("svg")
    .attr("width", chart.width())
    .attr("height", chart.height());

d3.csv("mushrooms.csv", function(error, csv) {
  vis.datum(csv).call(chart);
});
