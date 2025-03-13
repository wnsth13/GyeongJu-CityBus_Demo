var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '지도',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_10BUSRoute_1 = new ol.format.GeoJSON();
var features_10BUSRoute_1 = format_10BUSRoute_1.readFeatures(json_10BUSRoute_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10BUSRoute_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10BUSRoute_1.addFeatures(features_10BUSRoute_1);
var lyr_10BUSRoute_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10BUSRoute_1, 
                style: style_10BUSRoute_1,
                popuplayertitle: '10 BUS Route',
                interactive: false,
                title: '<img src="styles/legend/10BUSRoute_1.png" /> 10 BUS Route'
            });
var format_10BUSSTOPS_2 = new ol.format.GeoJSON();
var features_10BUSSTOPS_2 = format_10BUSSTOPS_2.readFeatures(json_10BUSSTOPS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10BUSSTOPS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10BUSSTOPS_2.addFeatures(features_10BUSSTOPS_2);
var lyr_10BUSSTOPS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10BUSSTOPS_2, 
                style: style_10BUSSTOPS_2,
                popuplayertitle: '10 BUS STOPS',
                interactive: true,
                title: '<img src="styles/legend/10BUSSTOPS_2.png" /> 10 BUS STOPS'
            });

lyr__0.setVisible(true);lyr_10BUSRoute_1.setVisible(true);lyr_10BUSSTOPS_2.setVisible(false);
var layersList = [lyr__0,lyr_10BUSRoute_1,lyr_10BUSSTOPS_2];
lyr_10BUSRoute_1.set('fieldAliases', {'LINK_ID': 'LINK_ID', 'F_NODE': 'F_NODE', 'T_NODE': 'T_NODE', 'LANES': 'LANES', 'ROAD_RANK': 'ROAD_RANK', 'ROAD_TYPE': 'ROAD_TYPE', 'ROAD_NO': 'ROAD_NO', 'ROAD_NAME': 'ROAD_NAME', 'ROAD_USE': 'ROAD_USE', 'MULTI_LINK': 'MULTI_LINK', 'CONNECT': 'CONNECT', 'MAX_SPD': 'MAX_SPD', 'REST_VEH': 'REST_VEH', 'REST_W': 'REST_W', 'REST_H': 'REST_H', 'C-ITS': 'C-ITS', 'LENGTH': 'LENGTH', 'UPDATEDATE': 'UPDATEDATE', 'REMARK': 'REMARK', 'HIST_TYPE': 'HIST_TYPE', 'HISTREMARK': 'HISTREMARK', });
lyr_10BUSSTOPS_2.set('fieldAliases', {'구분': '구분', 'X': 'X', 'Y': 'Y', '정류소/노': '정류소', '속성': '속성', 'BIS ID': 'BIS ID', '마이비ID': '마이비ID', });
lyr_10BUSRoute_1.set('fieldImages', {'LINK_ID': 'TextEdit', 'F_NODE': 'TextEdit', 'T_NODE': 'TextEdit', 'LANES': 'Range', 'ROAD_RANK': 'TextEdit', 'ROAD_TYPE': 'TextEdit', 'ROAD_NO': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'ROAD_USE': 'TextEdit', 'MULTI_LINK': 'TextEdit', 'CONNECT': 'TextEdit', 'MAX_SPD': 'Range', 'REST_VEH': 'TextEdit', 'REST_W': 'Range', 'REST_H': 'Range', 'C-ITS': 'TextEdit', 'LENGTH': 'TextEdit', 'UPDATEDATE': 'TextEdit', 'REMARK': 'TextEdit', 'HIST_TYPE': 'TextEdit', 'HISTREMARK': 'TextEdit', });
lyr_10BUSSTOPS_2.set('fieldImages', {'구분': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', '정류소/노': 'TextEdit', '속성': 'TextEdit', 'BIS ID': 'TextEdit', '마이비ID': 'TextEdit', });
lyr_10BUSRoute_1.set('fieldLabels', {'LINK_ID': 'no label', 'F_NODE': 'no label', 'T_NODE': 'no label', 'LANES': 'no label', 'ROAD_RANK': 'no label', 'ROAD_TYPE': 'no label', 'ROAD_NO': 'no label', 'ROAD_NAME': 'no label', 'ROAD_USE': 'no label', 'MULTI_LINK': 'no label', 'CONNECT': 'no label', 'MAX_SPD': 'no label', 'REST_VEH': 'no label', 'REST_W': 'no label', 'REST_H': 'no label', 'C-ITS': 'no label', 'LENGTH': 'no label', 'UPDATEDATE': 'no label', 'REMARK': 'no label', 'HIST_TYPE': 'no label', 'HISTREMARK': 'no label', });
lyr_10BUSSTOPS_2.set('fieldLabels', {'구분': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', '정류소/노': 'inline label - always visible', '속성': 'hidden field', 'BIS ID': 'hidden field', '마이비ID': 'hidden field', });
lyr_10BUSSTOPS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});