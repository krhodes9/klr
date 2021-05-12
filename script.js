require([
        "esri/Map",
        "esri/layers/FeatureLayer",
        "esri/layers/GeoJSONLayer",
        "esri/views/MapView",
         "esri/widgets/Legend",
        "esri/widgets/Expand",
        "esri/widgets/Home",
        "esri/WebMap",
      ], function(Map, FeatureLayer, GeoJSONLayer, MapView, Legend, Expand, Home, WebMap) {

          var featureLayer = new FeatureLayer({
          url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Madison_WI_City_Wards/FeatureServer"
        });
        

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 10,
          center: [-89, 48] // longitude, latitude
        });
      });
