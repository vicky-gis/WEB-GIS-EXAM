var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIGraylight_1 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_solapur_wards_2026_2 = new ol.format.GeoJSON();
var features_solapur_wards_2026_2 = format_solapur_wards_2026_2.readFeatures(json_solapur_wards_2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_solapur_wards_2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_solapur_wards_2026_2.addFeatures(features_solapur_wards_2026_2);
var lyr_solapur_wards_2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_solapur_wards_2026_2, 
                style: style_solapur_wards_2026_2,
                popuplayertitle: 'solapur_wards_2026',
                interactive: true,
                title: '<img src="styles/legend/solapur_wards_2026_2.png" /> solapur_wards_2026'
            });
var format_slum_3 = new ol.format.GeoJSON();
var features_slum_3 = format_slum_3.readFeatures(json_slum_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_slum_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_slum_3.addFeatures(features_slum_3);
var lyr_slum_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_slum_3, 
                style: style_slum_3,
                popuplayertitle: 'slum',
                interactive: true,
                title: '<img src="styles/legend/slum_3.png" /> slum'
            });
var format_drainage_4 = new ol.format.GeoJSON();
var features_drainage_4 = format_drainage_4.readFeatures(json_drainage_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drainage_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drainage_4.addFeatures(features_drainage_4);
var lyr_drainage_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drainage_4, 
                style: style_drainage_4,
                popuplayertitle: 'drainage',
                interactive: true,
                title: '<img src="styles/legend/drainage_4.png" /> drainage'
            });
var format_road_2_5 = new ol.format.GeoJSON();
var features_road_2_5 = format_road_2_5.readFeatures(json_road_2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_2_5.addFeatures(features_road_2_5);
var lyr_road_2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_2_5, 
                style: style_road_2_5,
                popuplayertitle: 'road_2',
                interactive: true,
                title: '<img src="styles/legend/road_2_5.png" /> road_2'
            });
var format_police_station_6 = new ol.format.GeoJSON();
var features_police_station_6 = format_police_station_6.readFeatures(json_police_station_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_police_station_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_police_station_6.addFeatures(features_police_station_6);
var lyr_police_station_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_police_station_6, 
                style: style_police_station_6,
                popuplayertitle: 'police_station',
                interactive: true,
                title: '<img src="styles/legend/police_station_6.png" /> police_station'
            });
var format_solapur_hospitals_7 = new ol.format.GeoJSON();
var features_solapur_hospitals_7 = format_solapur_hospitals_7.readFeatures(json_solapur_hospitals_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_solapur_hospitals_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_solapur_hospitals_7.addFeatures(features_solapur_hospitals_7);
var lyr_solapur_hospitals_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_solapur_hospitals_7, 
                style: style_solapur_hospitals_7,
                popuplayertitle: 'solapur_hospitals',
                interactive: true,
                title: '<img src="styles/legend/solapur_hospitals_7.png" /> solapur_hospitals'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRIGraylight_1.setVisible(true);lyr_solapur_wards_2026_2.setVisible(true);lyr_slum_3.setVisible(true);lyr_drainage_4.setVisible(true);lyr_road_2_5.setVisible(true);lyr_police_station_6.setVisible(true);lyr_solapur_hospitals_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESRIGraylight_1,lyr_solapur_wards_2026_2,lyr_slum_3,lyr_drainage_4,lyr_road_2_5,lyr_police_station_6,lyr_solapur_hospitals_7];
lyr_solapur_wards_2026_2.set('fieldAliases', {'fid': 'fid', 'Prabhag_Na': 'Prabhag_Na', 'Prabhag_No': 'Prabhag_No', });
lyr_slum_3.set('fieldAliases', {'Name': 'Name', 'Area (m2)': 'Area (m2)', });
lyr_drainage_4.set('fieldAliases', {'Type of Dr': 'Type of Dr', 'Classifica': 'Classifica', 'Constructi': 'Constructi', 'Authority': 'Authority', 'Landmark': 'Landmark', 'Length(m)': 'Length(m)', 'Width(m)': 'Width(m)', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_road_2_5.set('fieldAliases', {'Road Type': 'Road Type', 'Road Numbe': 'Road Numbe', 'Road Name': 'Road Name', 'Pavement T': 'Pavement T', 'Authority': 'Authority', 'Traffic': 'Traffic', 'Landmark': 'Landmark', 'Length(m)': 'Length(m)', 'Width(m)': 'Width(m)', 'Remark': 'Remark', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_police_station_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZONE': 'ZONE', 'PETH': 'PETH', 'WARD': 'WARD', 'NAME': 'NAME', 'ID': 'ID', 'PRABHAG': 'PRABHAG', });
lyr_solapur_hospitals_7.set('fieldAliases', {'id': 'id', 'Hosp_Name': 'Hosp_Name', 'Zone': 'Zone', 'Peth': 'Peth', 'Prabhag': 'Prabhag', 'Address': 'Address', });
lyr_solapur_wards_2026_2.set('fieldImages', {'fid': 'TextEdit', 'Prabhag_Na': 'TextEdit', 'Prabhag_No': 'TextEdit', });
lyr_slum_3.set('fieldImages', {'Name': '', 'Area (m2)': '', });
lyr_drainage_4.set('fieldImages', {'Type of Dr': '', 'Classifica': '', 'Constructi': '', 'Authority': '', 'Landmark': '', 'Length(m)': '', 'Width(m)': '', 'SHAPE_Leng': '', });
lyr_road_2_5.set('fieldImages', {'Road Type': '', 'Road Numbe': '', 'Road Name': '', 'Pavement T': '', 'Authority': '', 'Traffic': '', 'Landmark': '', 'Length(m)': '', 'Width(m)': '', 'Remark': '', 'SHAPE_Leng': '', });
lyr_police_station_6.set('fieldImages', {'OBJECTID': '', 'ZONE': '', 'PETH': '', 'WARD': '', 'NAME': '', 'ID': '', 'PRABHAG': '', });
lyr_solapur_hospitals_7.set('fieldImages', {'id': '', 'Hosp_Name': '', 'Zone': '', 'Peth': '', 'Prabhag': '', 'Address': '', });
lyr_solapur_wards_2026_2.set('fieldLabels', {'fid': 'no label', 'Prabhag_Na': 'no label', 'Prabhag_No': 'no label', });
lyr_slum_3.set('fieldLabels', {'Name': 'no label', 'Area (m2)': 'no label', });
lyr_drainage_4.set('fieldLabels', {'Type of Dr': 'no label', 'Classifica': 'no label', 'Constructi': 'no label', 'Authority': 'no label', 'Landmark': 'no label', 'Length(m)': 'no label', 'Width(m)': 'no label', 'SHAPE_Leng': 'no label', });
lyr_road_2_5.set('fieldLabels', {'Road Type': 'no label', 'Road Numbe': 'no label', 'Road Name': 'no label', 'Pavement T': 'no label', 'Authority': 'no label', 'Traffic': 'no label', 'Landmark': 'no label', 'Length(m)': 'no label', 'Width(m)': 'no label', 'Remark': 'no label', 'SHAPE_Leng': 'no label', });
lyr_police_station_6.set('fieldLabels', {'OBJECTID': 'no label', 'ZONE': 'no label', 'PETH': 'no label', 'WARD': 'no label', 'NAME': 'no label', 'ID': 'no label', 'PRABHAG': 'no label', });
lyr_solapur_hospitals_7.set('fieldLabels', {'id': 'no label', 'Hosp_Name': 'no label', 'Zone': 'no label', 'Peth': 'no label', 'Prabhag': 'no label', 'Address': 'no label', });
lyr_solapur_hospitals_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});