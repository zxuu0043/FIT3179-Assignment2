
    var specVis1 = "https://raw.githubusercontent.com/zxuu0043/FIT3179-Assignment2/main/js/Global%20COVID-19%20total%20as%2010%20October%202021.vega";
    var specVis2= "https://raw.githubusercontent.com/zxuu0043/FIT3179-Assignment2/main/js/Daily%20new%20cases%20in%20Australian%20states%20from%20Sep%2010th%20to%20Oct%2010th.vega";
    var specVis3= "https://raw.githubusercontent.com/zxuu0043/FIT3179-Assignment2/main/js/pie%20chart.vega";
  
    vegaEmbed('#vis1', specVis1, {"actions": false});
    
     vegaEmbed('#vis2', specVis2, {"actions": false}).then(function(result) {
      // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
  
    vegaEmbed('#vis3', specVis3, {"actions": false}).then(function(result) {
      // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
