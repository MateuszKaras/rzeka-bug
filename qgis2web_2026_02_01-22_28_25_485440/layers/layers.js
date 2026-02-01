var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Raz_1 = new ol.format.GeoJSON();
var features_Raz_1 = format_Raz_1.readFeatures(json_Raz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Raz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Raz_1.addFeatures(features_Raz_1);
var lyr_Raz_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Raz_1, 
                style: style_Raz_1,
                popuplayertitle: 'Raz',
                interactive: true,
                title: '<img src="styles/legend/Raz_1.png" /> Raz'
            });
var format_Zawsze_2 = new ol.format.GeoJSON();
var features_Zawsze_2 = format_Zawsze_2.readFeatures(json_Zawsze_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zawsze_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zawsze_2.addFeatures(features_Zawsze_2);
var lyr_Zawsze_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zawsze_2, 
                style: style_Zawsze_2,
                popuplayertitle: 'Zawsze',
                interactive: true,
                title: '<img src="styles/legend/Zawsze_2.png" /> Zawsze'
            });
var format_Mapahistoryczna1940_3 = new ol.format.GeoJSON();
var features_Mapahistoryczna1940_3 = format_Mapahistoryczna1940_3.readFeatures(json_Mapahistoryczna1940_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapahistoryczna1940_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapahistoryczna1940_3.addFeatures(features_Mapahistoryczna1940_3);
var lyr_Mapahistoryczna1940_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapahistoryczna1940_3, 
                style: style_Mapahistoryczna1940_3,
                popuplayertitle: 'Mapa historyczna 1940 ',
                interactive: true,
                title: '<img src="styles/legend/Mapahistoryczna1940_3.png" /> Mapa historyczna 1940 '
            });
var format_VMAP2000_4 = new ol.format.GeoJSON();
var features_VMAP2000_4 = format_VMAP2000_4.readFeatures(json_VMAP2000_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMAP2000_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMAP2000_4.addFeatures(features_VMAP2000_4);
var lyr_VMAP2000_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMAP2000_4, 
                style: style_VMAP2000_4,
                popuplayertitle: 'VMAP 2000',
                interactive: true,
                title: '<img src="styles/legend/VMAP2000_4.png" /> VMAP 2000'
            });
var format_Scenasatelitarna2025_5 = new ol.format.GeoJSON();
var features_Scenasatelitarna2025_5 = format_Scenasatelitarna2025_5.readFeatures(json_Scenasatelitarna2025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Scenasatelitarna2025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Scenasatelitarna2025_5.addFeatures(features_Scenasatelitarna2025_5);
var lyr_Scenasatelitarna2025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Scenasatelitarna2025_5, 
                style: style_Scenasatelitarna2025_5,
                popuplayertitle: 'Scenasatelitarna 2025',
                interactive: true,
                title: '<img src="styles/legend/Scenasatelitarna2025_5.png" /> Scenasatelitarna 2025'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Raz_1.setVisible(true);lyr_Zawsze_2.setVisible(true);lyr_Mapahistoryczna1940_3.setVisible(true);lyr_VMAP2000_4.setVisible(true);lyr_Scenasatelitarna2025_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Raz_1,lyr_Zawsze_2,lyr_Mapahistoryczna1940_3,lyr_VMAP2000_4,lyr_Scenasatelitarna2025_5];
lyr_Raz_1.set('fieldAliases', {'FID_Raz': 'FID_Raz', 'FID_Bug_VM': 'FID_Bug_VM', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'FID_Bug_hi': 'FID_Bug_hi', 'Id_1': 'Id_1', 'FID_Scenas': 'FID_Scenas', 'Id_12': 'Id_12', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Zawsze_2.set('fieldAliases', {'FID_Bug_se': 'FID_Bug_se', 'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_Bug_VM': 'FID_Bug_VM', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'FID_Bug_hi': 'FID_Bug_hi', 'Id_12': 'Id_12', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Mapahistoryczna1940_3.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_VMAP2000_4.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Scenasatelitarna2025_5.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Raz_1.set('fieldImages', {'FID_Raz': 'TextEdit', 'FID_Bug_VM': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'FID_Bug_hi': 'TextEdit', 'Id_1': 'TextEdit', 'FID_Scenas': 'TextEdit', 'Id_12': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Zawsze_2.set('fieldImages', {'FID_Bug_se': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'FID_Bug_VM': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'FID_Bug_hi': 'TextEdit', 'Id_12': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mapahistoryczna1940_3.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VMAP2000_4.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Scenasatelitarna2025_5.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Raz_1.set('fieldLabels', {'FID_Raz': 'no label', 'FID_Bug_VM': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'FID_Bug_hi': 'no label', 'Id_1': 'no label', 'FID_Scenas': 'no label', 'Id_12': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Zawsze_2.set('fieldLabels', {'FID_Bug_se': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'FID_Bug_VM': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'FID_Bug_hi': 'no label', 'Id_12': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Mapahistoryczna1940_3.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_VMAP2000_4.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'inline label - visible with data', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Scenasatelitarna2025_5.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Scenasatelitarna2025_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});