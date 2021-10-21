
    var specVis1 = "https://raw.githubusercontent.com//zxuu0043/FIT3179-Assignment2/main/js/Global%20COVID-19%20total%20as%2010%20October%202021.vega";
    var specVis2= "Daily new cases in Australian states from Sep 10th to Oct 10th.vega";
    var specVis3= "pie chart.vega";
  
    vegaEmbed('#vis1', specVis1, {"actions": false});
    
     vegaEmbed('#vis2', specVis2, {"actions": false}).then(function(result) {
      // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
  
    vegaEmbed('#vis3', specVis3, {"actions": false}).then(function(result) {
      // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
