var chart = d3.parsets()
              .dimensions([ "class",
                            "odor",
                            "spore-print-color",
                            "habitat"])
                            //"gill-color",
                            //"cap-shape",
                            //"cap-surface",
                            //"cap-color",
                            //"bruises",
                            //"gill-attachment",
                            //"gill-spacing",
                            //"gill-size",
                            //"stalk-shape",
                            //"stalk-root",
                            //"stalk-surface-above-ring",
                            //"stalk-surface-below-ring",
                            //"stalk-color-above-ring",
                            //"stalk-color-below-ring",
                            //"veil-type",
                            //"veil-color",
                            //"ring-number",
                            //"ring-type",
                            //"population",])
              .spacing(250)
              .tension(0.7)
              .height(500);

var vis = d3.select("#vis").append("svg")
    .attr("width", chart.width())
    .attr("height", chart.height());

d3.csv("trimmed_dataset.csv", function(error, csv) {
  vis.datum(csv).call(chart);
});
