var chart = d3.parsets()
              .dimensions([ "class",
                            "odor",
                            "spore-print-color",
                            "habitat",
                            "gill-color",
                            "cap-shape",
                            "cap-surface",
                            "cap-color",
                            "bruises",
                            "gill-attachment",
                            "gill-spacing",
                            "gill-size",
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
                            "population",
	      ])
              .spacing(250)
              .tension(0.7)
              .width(1000)
              .height(3300);

function removeChart() {
	d3.select("#vis").select("svg").remove();
}

function addChart() {
	return d3.select("#vis").append("svg")
		.attr("width", chart.width())
		.attr("height", chart.height());

}

vis = addChart();
d3.csv("mushrooms.csv", function(error, csv) {
  vis.datum(csv).call(chart);
});

function reduceDimensions() {
	removeChart();
	chart = d3.parsets()
		  .dimensions(["class",
                          "odor",
                          "spore-print-color",
                          "habitat",
                          "gill-color",
                          "gill-spacing",
                          "gill-size",
                          "stalk-root",
                          "stalk-surface-above-ring",
                          "stalk-surface-below-ring",
                          "stalk-color-above-ring",
                          "stalk-color-below-ring",
                          "ring-type",
                          "population",
	])
        .spacing(250)
        .tension(0.7)
        .width(1000)
        .height(1950);
	vis = addChart();
	d3.csv("mushrooms.csv", function(error, csv) {
		vis.datum(csv).call(chart);
	});
}
function trim() {
	removeChart();
	chart = d3.parsets()
		  .dimensions(["class",
			  "odor",
			  "spore-print-color",
			  "habitat",
	])
        .spacing(250)
        .tension(0.7)
        .width(1000)
        .height(450);
	vis = addChart();
	d3.csv("trimmed_dataset.csv", function(error, csv) {
		vis.datum(csv).call(chart);
	});
}
