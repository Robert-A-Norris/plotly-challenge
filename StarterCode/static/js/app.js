var jsondata;

// Read in 'samples.json' with D3
d3.json("../data/samples.json").then((data) =>{
    jsondata = data
    console.log(jsondata);
    drop(jsondata.names)
});

function plot(sample){
    // //Bar Chart 

// var sample_values = jsondata.samples.slice(0,10).reverse;
// var otu_id = jsondata.samples.otu_ids.slice(0,10)


// Bubble Chart


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
}





















