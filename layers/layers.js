ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([73626.475665, 9025240.495207, 671524.389954, 9421704.927664]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DepartamentodelPer_1 = new ol.format.GeoJSON();
var features_DepartamentodelPer_1 = format_DepartamentodelPer_1.readFeatures(json_DepartamentodelPer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_DepartamentodelPer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentodelPer_1.addFeatures(features_DepartamentodelPer_1);
var lyr_DepartamentodelPer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartamentodelPer_1, 
                style: style_DepartamentodelPer_1,
                popuplayertitle: 'Departamento del Perú',
                interactive: true,
    title: 'Departamento del Perú<br />\
    <img src="styles/legend/DepartamentodelPer_1_0.png" /> BELLAVISTA<br />\
    <img src="styles/legend/DepartamentodelPer_1_1.png" /> EL DORADO<br />\
    <img src="styles/legend/DepartamentodelPer_1_2.png" /> HUALLAGA<br />\
    <img src="styles/legend/DepartamentodelPer_1_3.png" /> LAMAS<br />\
    <img src="styles/legend/DepartamentodelPer_1_4.png" /> MARISCAL CACERES<br />\
    <img src="styles/legend/DepartamentodelPer_1_5.png" /> MOYOBAMBA<br />\
    <img src="styles/legend/DepartamentodelPer_1_6.png" /> PICOTA<br />\
    <img src="styles/legend/DepartamentodelPer_1_7.png" /> RIOJA<br />\
    <img src="styles/legend/DepartamentodelPer_1_8.png" /> SAN MARTIN<br />\
    <img src="styles/legend/DepartamentodelPer_1_9.png" /> TOCACHE<br />' });
var format_IE_Bellavistalistado_iiee_2 = new ol.format.GeoJSON();
var features_IE_Bellavistalistado_iiee_2 = format_IE_Bellavistalistado_iiee_2.readFeatures(json_IE_Bellavistalistado_iiee_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_IE_Bellavistalistado_iiee_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IE_Bellavistalistado_iiee_2.addFeatures(features_IE_Bellavistalistado_iiee_2);
var lyr_IE_Bellavistalistado_iiee_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IE_Bellavistalistado_iiee_2, 
                style: style_IE_Bellavistalistado_iiee_2,
                popuplayertitle: 'IE_Bellavista-listado_iiee',
                interactive: false,
    title: 'IE_Bellavista-listado_iiee<br />\
    <img src="styles/legend/IE_Bellavistalistado_iiee_2_0.png" /> Básica Alternativa - Avanzado<br />\
    <img src="styles/legend/IE_Bellavistalistado_iiee_2_1.png" /> Básica Alternativa - Inicial e Intermedio<br />\
    <img src="styles/legend/IE_Bellavistalistado_iiee_2_2.png" /> Básica Especial - Primaria<br />\
    <img src="styles/legend/IE_Bellavistalistado_iiee_2_3.png" /> Inicial - Cuna Jardín<br />\
    <img src="styles/legend/IE_Bellavistalistado_iiee_2_4.png" /> Inicial - Jardín<br />\
    <img src="styles/legend/IE_Bellavistalistado_iiee_2_5.png" /> Inicial No Escolarizado<br />\
    <img src="styles/legend/IE_Bellavistalistado_iiee_2_6.png" /> Primaria<br />\
    <img src="styles/legend/IE_Bellavistalistado_iiee_2_7.png" /> Secundaria<br />\
    <img src="styles/legend/IE_Bellavistalistado_iiee_2_8.png" /> Superior Tecnológica<br />\
    <img src="styles/legend/IE_Bellavistalistado_iiee_2_9.png" /> Técnico Productiva - CETPRO<br />' });
var format_Huallagalistado_iiee2_3 = new ol.format.GeoJSON();
var features_Huallagalistado_iiee2_3 = format_Huallagalistado_iiee2_3.readFeatures(json_Huallagalistado_iiee2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Huallagalistado_iiee2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huallagalistado_iiee2_3.addFeatures(features_Huallagalistado_iiee2_3);
var lyr_Huallagalistado_iiee2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huallagalistado_iiee2_3, 
                style: style_Huallagalistado_iiee2_3,
                popuplayertitle: 'Huallaga-listado_iiee (2)',
                interactive: false,
    title: 'Huallaga-listado_iiee (2)<br />\
    <img src="styles/legend/Huallagalistado_iiee2_3_0.png" /> Básica Alternativa - Avanzado<br />\
    <img src="styles/legend/Huallagalistado_iiee2_3_1.png" /> Básica Especial - Primaria<br />\
    <img src="styles/legend/Huallagalistado_iiee2_3_2.png" /> Inicial - Cuna Jardín<br />\
    <img src="styles/legend/Huallagalistado_iiee2_3_3.png" /> Inicial - Jardín<br />\
    <img src="styles/legend/Huallagalistado_iiee2_3_4.png" /> Inicial No Escolarizado<br />\
    <img src="styles/legend/Huallagalistado_iiee2_3_5.png" /> Primaria<br />\
    <img src="styles/legend/Huallagalistado_iiee2_3_6.png" /> Secundaria<br />\
    <img src="styles/legend/Huallagalistado_iiee2_3_7.png" /> Superior Tecnológica<br />\
    <img src="styles/legend/Huallagalistado_iiee2_3_8.png" /> Técnico Productiva - CETPRO<br />' });
var format_ElDoradolistado_iiee1_4 = new ol.format.GeoJSON();
var features_ElDoradolistado_iiee1_4 = format_ElDoradolistado_iiee1_4.readFeatures(json_ElDoradolistado_iiee1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ElDoradolistado_iiee1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElDoradolistado_iiee1_4.addFeatures(features_ElDoradolistado_iiee1_4);
var lyr_ElDoradolistado_iiee1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElDoradolistado_iiee1_4, 
                style: style_ElDoradolistado_iiee1_4,
                popuplayertitle: 'El Dorado-listado_iiee (1)',
                interactive: false,
    title: 'El Dorado-listado_iiee (1)<br />\
    <img src="styles/legend/ElDoradolistado_iiee1_4_0.png" /> Básica Alternativa - Avanzado<br />\
    <img src="styles/legend/ElDoradolistado_iiee1_4_1.png" /> Básica Alternativa - Inicial e Intermedio<br />\
    <img src="styles/legend/ElDoradolistado_iiee1_4_2.png" /> Básica Especial - Inicial<br />\
    <img src="styles/legend/ElDoradolistado_iiee1_4_3.png" /> Básica Especial - Primaria<br />\
    <img src="styles/legend/ElDoradolistado_iiee1_4_4.png" /> Inicial - Cuna Jardín<br />\
    <img src="styles/legend/ElDoradolistado_iiee1_4_5.png" /> Inicial - Jardín<br />\
    <img src="styles/legend/ElDoradolistado_iiee1_4_6.png" /> Inicial No Escolarizado<br />\
    <img src="styles/legend/ElDoradolistado_iiee1_4_7.png" /> Primaria<br />\
    <img src="styles/legend/ElDoradolistado_iiee1_4_8.png" /> Secundaria<br />\
    <img src="styles/legend/ElDoradolistado_iiee1_4_9.png" /> Superior Tecnológica<br />\
    <img src="styles/legend/ElDoradolistado_iiee1_4_10.png" /> Técnico Productiva - CETPRO<br />' });
var format_Red_Vial_D_5 = new ol.format.GeoJSON();
var features_Red_Vial_D_5 = format_Red_Vial_D_5.readFeatures(json_Red_Vial_D_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Red_Vial_D_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_Vial_D_5.addFeatures(features_Red_Vial_D_5);
var lyr_Red_Vial_D_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Red_Vial_D_5, 
                style: style_Red_Vial_D_5,
                popuplayertitle: 'Red_Vial_D',
                interactive: false,
                title: '<img src="styles/legend/Red_Vial_D_5.png" /> Red_Vial_D'
            });
var format_Red_Vial_Vcopiar_6 = new ol.format.GeoJSON();
var features_Red_Vial_Vcopiar_6 = format_Red_Vial_Vcopiar_6.readFeatures(json_Red_Vial_Vcopiar_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Red_Vial_Vcopiar_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_Vial_Vcopiar_6.addFeatures(features_Red_Vial_Vcopiar_6);
var lyr_Red_Vial_Vcopiar_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Red_Vial_Vcopiar_6, 
                style: style_Red_Vial_Vcopiar_6,
                popuplayertitle: 'Red_Vial_V copiar',
                interactive: true,
                title: '<img src="styles/legend/Red_Vial_Vcopiar_6.png" /> Red_Vial_V copiar'
            });
var format_Departamento_7 = new ol.format.GeoJSON();
var features_Departamento_7 = format_Departamento_7.readFeatures(json_Departamento_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Departamento_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_7.addFeatures(features_Departamento_7);
var lyr_Departamento_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamento_7, 
                style: style_Departamento_7,
                popuplayertitle: 'Departamento',
                interactive: false,
                title: '<img src="styles/legend/Departamento_7.png" /> Departamento'
            });
var format_RQ_Principal_8 = new ol.format.GeoJSON();
var features_RQ_Principal_8 = format_RQ_Principal_8.readFeatures(json_RQ_Principal_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_RQ_Principal_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RQ_Principal_8.addFeatures(features_RQ_Principal_8);
var lyr_RQ_Principal_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RQ_Principal_8, 
                style: style_RQ_Principal_8,
                popuplayertitle: 'R.Q_Principal',
                interactive: true,
                title: '<img src="styles/legend/RQ_Principal_8.png" /> R.Q_Principal'
            });
var group_IEdeSanMartin = new ol.layer.Group({
                                layers: [lyr_IE_Bellavistalistado_iiee_2,lyr_Huallagalistado_iiee2_3,lyr_ElDoradolistado_iiee1_4,],
                                fold: 'open',
                                title: 'I.E de San Martin'});

lyr_OSMStandard_0.setVisible(true);lyr_DepartamentodelPer_1.setVisible(true);lyr_IE_Bellavistalistado_iiee_2.setVisible(true);lyr_Huallagalistado_iiee2_3.setVisible(true);lyr_ElDoradolistado_iiee1_4.setVisible(true);lyr_Red_Vial_D_5.setVisible(true);lyr_Red_Vial_Vcopiar_6.setVisible(true);lyr_Departamento_7.setVisible(true);lyr_RQ_Principal_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DepartamentodelPer_1,group_IEdeSanMartin,lyr_Red_Vial_D_5,lyr_Red_Vial_Vcopiar_6,lyr_Departamento_7,lyr_RQ_Principal_8];
lyr_DepartamentodelPer_1.set('fieldAliases', {'fid': 'fid', 'COUNT': 'N° de provincias', 'FIRST_IDPR': 'Nombre de departamento:', 'NOMBPROV': 'Nombre de la provincia:', 'FIRST_NOMB': 'Nombre de departamento:', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'Superficie en Ha:', 'enlace': 'Información de la provincia:', 'Fotos': 'Fotos turisticos:', });
lyr_IE_Bellavistalistado_iiee_2.set('fieldAliases', {'fid': 'fid', 'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_Huallagalistado_iiee2_3.set('fieldAliases', {'fid': 'fid', 'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_ElDoradolistado_iiee1_4.set('fieldAliases', {'fid': 'fid', 'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_Red_Vial_D_5.set('fieldAliases', {'fid': 'fid', 'RODADURA': 'RODADURA', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', });
lyr_Red_Vial_Vcopiar_6.set('fieldAliases', {'fid': 'fid', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', });
lyr_Departamento_7.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', });
lyr_RQ_Principal_8.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre', 'Longitud': 'Longitud', });
lyr_DepartamentodelPer_1.set('fieldImages', {'fid': 'Hidden', 'COUNT': 'TextEdit', 'FIRST_IDPR': 'Hidden', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'TextEdit', 'LAST_DCTO': 'Hidden', 'LAST_LEY': 'Hidden', 'FIRST_FECH': 'Hidden', 'LAST_FECHA': 'Hidden', 'MIN_SHAPE_': 'Hidden', 'ha': 'TextEdit', 'enlace': 'TextEdit', 'Fotos': 'ExternalResource', });
lyr_IE_Bellavistalistado_iiee_2.set('fieldImages', {'fid': '', 'Código Modular': 'TextEdit', 'Anexo': 'TextEdit', 'Nombre de SS.EE.': 'TextEdit', 'Ubigeo': 'TextEdit', 'Departamento': 'TextEdit', 'Provincia': 'TextEdit', 'Distrito': 'TextEdit', 'Código DRE/UGEL': 'TextEdit', 'DRE / UGEL': 'TextEdit', 'Centro Poblado': 'TextEdit', 'Código Centro Poblado': 'TextEdit', 'Código Local': 'TextEdit', 'Dirección': 'TextEdit', 'Nivel / Modalidad': 'TextEdit', 'Gestion / Dependencia': 'TextEdit', 'Altitud': 'TextEdit', 'Fuente de coordenadas': 'TextEdit', });
lyr_Huallagalistado_iiee2_3.set('fieldImages', {'fid': '', 'Código Modular': 'TextEdit', 'Anexo': 'TextEdit', 'Nombre de SS.EE.': 'TextEdit', 'Ubigeo': 'TextEdit', 'Departamento': 'TextEdit', 'Provincia': 'TextEdit', 'Distrito': 'TextEdit', 'Código DRE/UGEL': 'TextEdit', 'DRE / UGEL': 'TextEdit', 'Centro Poblado': 'TextEdit', 'Código Centro Poblado': 'TextEdit', 'Código Local': 'TextEdit', 'Dirección': 'TextEdit', 'Nivel / Modalidad': 'TextEdit', 'Gestion / Dependencia': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Altitud': 'TextEdit', 'Fuente de coordenadas': 'TextEdit', });
lyr_ElDoradolistado_iiee1_4.set('fieldImages', {'fid': '', 'Código Modular': 'TextEdit', 'Anexo': 'TextEdit', 'Nombre de SS.EE.': 'TextEdit', 'Ubigeo': 'TextEdit', 'Departamento': 'TextEdit', 'Provincia': 'TextEdit', 'Distrito': 'TextEdit', 'Código DRE/UGEL': 'TextEdit', 'DRE / UGEL': 'TextEdit', 'Centro Poblado': 'TextEdit', 'Código Centro Poblado': 'TextEdit', 'Código Local': 'TextEdit', 'Dirección': 'TextEdit', 'Nivel / Modalidad': 'TextEdit', 'Gestion / Dependencia': 'TextEdit', 'Altitud': 'TextEdit', 'Fuente de coordenadas': 'TextEdit', });
lyr_Red_Vial_D_5.set('fieldImages', {'fid': '', 'RODADURA': '', 'COD_DS11': '', 'COD_DS12': '', 'TRAY_DS12': '', 'TRAY_DS11': '', 'UBIGEO': '', 'DEP': '', 'PROV': '', 'COD_DEP': '', 'COD_PROV': '', 'LONG_KM': '', 'OBS': '', 'SENTIDO': '', 'BASE': '', 'DATA': '', 'FECHA_ACTU': '', 'FUENTE': '', 'COD_RODADU': '', 'NOMBDIST': '', 'CAPITAL': '', });
lyr_Red_Vial_Vcopiar_6.set('fieldImages', {'fid': '', 'COD_DS11': '', 'COD_DS12': '', 'TRAY_DS12': '', 'TRAY_DS11': '', 'UBIGEO': '', 'DEP': '', 'PROV': '', 'COD_DEP': '', 'COD_PROV': '', 'LONG_KM': '', 'OBS': '', });
lyr_Departamento_7.set('fieldImages', {'fid': '', 'NOMBDEP': '', 'COUNT': '', 'FIRST_IDDP': '', 'HECTARES': '', });
lyr_RQ_Principal_8.set('fieldImages', {'fid': '', 'Rasgo_Prin': '', 'Rasgo_Secu': '', 'Nombre': '', 'Longitud': '', });
lyr_DepartamentodelPer_1.set('fieldLabels', {'COUNT': 'no label', 'NOMBPROV': 'header label - always visible', 'FIRST_NOMB': 'header label - always visible', 'ha': 'header label - always visible', 'enlace': 'header label - always visible', 'Fotos': 'header label - always visible', });
lyr_IE_Bellavistalistado_iiee_2.set('fieldLabels', {'fid': 'no label', 'Código Modular': 'no label', 'Anexo': 'no label', 'Nombre de SS.EE.': 'no label', 'Ubigeo': 'no label', 'Departamento': 'no label', 'Provincia': 'no label', 'Distrito': 'no label', 'Código DRE/UGEL': 'no label', 'DRE / UGEL': 'no label', 'Centro Poblado': 'no label', 'Código Centro Poblado': 'no label', 'Código Local': 'no label', 'Dirección': 'no label', 'Nivel / Modalidad': 'no label', 'Gestion / Dependencia': 'no label', 'Altitud': 'no label', 'Fuente de coordenadas': 'no label', });
lyr_Huallagalistado_iiee2_3.set('fieldLabels', {'fid': 'no label', 'Código Modular': 'no label', 'Anexo': 'no label', 'Nombre de SS.EE.': 'no label', 'Ubigeo': 'no label', 'Departamento': 'no label', 'Provincia': 'no label', 'Distrito': 'no label', 'Código DRE/UGEL': 'no label', 'DRE / UGEL': 'no label', 'Centro Poblado': 'no label', 'Código Centro Poblado': 'no label', 'Código Local': 'no label', 'Dirección': 'no label', 'Nivel / Modalidad': 'no label', 'Gestion / Dependencia': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Altitud': 'no label', 'Fuente de coordenadas': 'no label', });
lyr_ElDoradolistado_iiee1_4.set('fieldLabels', {'fid': 'no label', 'Código Modular': 'no label', 'Anexo': 'no label', 'Nombre de SS.EE.': 'no label', 'Ubigeo': 'no label', 'Departamento': 'no label', 'Provincia': 'no label', 'Distrito': 'no label', 'Código DRE/UGEL': 'no label', 'DRE / UGEL': 'no label', 'Centro Poblado': 'no label', 'Código Centro Poblado': 'no label', 'Código Local': 'no label', 'Dirección': 'no label', 'Nivel / Modalidad': 'no label', 'Gestion / Dependencia': 'no label', 'Altitud': 'no label', 'Fuente de coordenadas': 'no label', });
lyr_Red_Vial_D_5.set('fieldLabels', {'fid': 'no label', 'RODADURA': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'no label', 'TRAY_DS11': 'no label', 'UBIGEO': 'no label', 'DEP': 'no label', 'PROV': 'no label', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'no label', 'OBS': 'no label', 'SENTIDO': 'no label', 'BASE': 'no label', 'DATA': 'no label', 'FECHA_ACTU': 'no label', 'FUENTE': 'no label', 'COD_RODADU': 'no label', 'NOMBDIST': 'no label', 'CAPITAL': 'no label', });
lyr_Red_Vial_Vcopiar_6.set('fieldLabels', {'fid': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'no label', 'TRAY_DS11': 'no label', 'UBIGEO': 'no label', 'DEP': 'no label', 'PROV': 'no label', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'no label', 'OBS': 'no label', });
lyr_Departamento_7.set('fieldLabels', {'fid': 'no label', 'NOMBDEP': 'no label', 'COUNT': 'no label', 'FIRST_IDDP': 'no label', 'HECTARES': 'no label', });
lyr_RQ_Principal_8.set('fieldLabels', {'fid': 'no label', 'Rasgo_Prin': 'no label', 'Rasgo_Secu': 'no label', 'Nombre': 'no label', 'Longitud': 'no label', });
lyr_RQ_Principal_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});