
    var specVis1 = "Global COVID-19 total as 10 October 2021.vega";
    var specVis2= "Daily new cases in Australian states from Sep 10th to Oct 10th.vega";
  
    vegaEmbed('#vis1', specVis1, {"actions": false});
    
     vegaEmbed('#vis2', specVis2, {"actions": false}).then(function(result) {
      // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
  
    vegaEmbed('#vis3', specVis1, {"actions": false}).then(function(result) {
      // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
  
    vegaEmbed('#vis4', specVis2, {"actions": false}).then(function(result) {
      // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
