var jsondata;

// Read in 'samples.json' with D3
d3.json("../data/samples.json").then((data) =>{
    jsondata = data
    console.log(jsondata);
    drop(jsondata.names)
});

function plot(sample){
// //Bar Chart 
// var trace = {
//     x: sample_values,
//     y: otu_ids, 
//     text: otu_labels
// };


// Bubble Chart

var trace = {
    x: jsondata.otu_ids,
    y: jsondata.sample_values,
    text: jsondata.otu_labels,
    marker:{
        color: jsondata.otu_ids,
        size:jsondata.sample_values
    }
};
var trace = [trace];
var layout = {
    title: "OTUs",
    height: 450,
    width: 1000

};
Plotly.newPlot("bubble", trace, layout);


console.log(`plot: ${sample}`)
}

function metadata(sample){
    var selectedmetadata = jsondata.metadata.filter(x => x.id==sample)[0]
    var demo = d3.select("#sample-metadata");
    demo.html("");
    Object.entries(selectedmetadata).forEach((key) =>{
        demo.append("h5").text(key[0].toUpperCase() + ":" + key[1] + "\n");
    });

    
    
console.log(selectedmetadata)
}

function drop(names){
    var selector = d3.select("#selDataset")
console.log(names)
for (var i of names) {
    selector.append("option").text(i)
}
optionChanged(names[0])
}

function optionChanged(new_id){
plot(new_id)
metadata(new_id)
};


















