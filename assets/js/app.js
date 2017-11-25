function get_volume_csp(data, csp) {
    var VolumeTotalcsp = 0;
    data[0].forEach(function (index) {
       if(index.CSP == csp){
            
            var Volumecsp = parseInt(index.Volume);

            if (!isNaN(Volumecsp)){
                VolumeTotalcsp += Volumecsp;
            }
        }    
    });
    return VolumeTotalcsp;
}
function get_volume_age(data, age){
    var VolumeTotalage = 0;
    data[0].forEach(function (index){
            if(index.Age == age){
                var Volumeage = parseInt(index.Volume);
                
                if(!isNaN(Volumeage)){
                    VolumeTotalage += Volumeage;
                }
            }
    });
    return VolumeTotalage;
}
//Permet de récuperer le volume de visiteurs en fonction de la date et du type de visiteur
function get_volume_visit(data, visiteur) {
    var volumeTotal = 0;
    data[0].forEach(function (index) {
        if (index.CategorieVisiteurs == visiteur) {

            var Volume = parseInt(index.Volume);

            if (!isNaN(Volume)) {
                volumeTotal += Volume;
            }
        }
    });
    return volumeTotal;
}

function get_volume_csp_2017(data, csp) {
    var VolumeTotalcsp = 0;
    data[1].forEach(function (index) {
       if(index.CSP == csp){
            
            var Volumecsp = parseInt(index.Volume);

            if (!isNaN(Volumecsp)){
                VolumeTotalcsp += Volumecsp;
            }
        }    
    });
    return VolumeTotalcsp;
}
function get_volume_age_2017(data, age){
    var VolumeTotalage = 0;
    data[1].forEach(function (index){
            if(index.Age == age){
                var Volumeage = parseInt(index.Volume);
                
                if(!isNaN(Volumeage)){
                    VolumeTotalage += Volumeage;
                }
            }
    });
    return VolumeTotalage;
}
//Permet de récuperer le volume de visiteurs en fonction de la date et du type de visiteur
function get_volume_visit_2017(data, visiteur) {
    var volumeTotal = 0;
    data[1].forEach(function (index) {
        if (index.CategorieVisiteurs == visiteur) {

            var Volume = parseInt(index.Volume);

            if (!isNaN(Volume)) {
                volumeTotal += Volume;
            }
        }
    });
    return volumeTotal;
}


/*
function get_volume_loc(data, localisation) {
    var volumeLoc = 0;
    data.forEach(function (index) {
        if (index.ZoneNuitee == localisation) {
            var volumenuitee = parseInt(index.Volume);
            if (!isNaN(volumenuitee)) {
                volumeLoc += volumenuitee;
            }
        }

    });
    return volumeLoc;
}*/

function genere(nomTable = "", periode = "") {
    $.ajax({
        url: "assets/php/traitement.php",
        type: "POST",
        data: {
            nomTable: nomTable,
            periode: periode
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
            
  /*          // Touriste Etranger Nuitée
    var VolumeEtranger = get_volume(data, "Touriste Etranger");
    // Résident Nuitée
    var VolumeResident = get_volume(data, "Résident ");
    // Touriste Français Nuitée
    var VolumeFR = get_volume(data, "Touriste Français");

    var Autres = get_volume_loc(data, "Vosges") + get_volume_loc(data, "Haut Rhin Nord") + get_volume_loc(data, "Haut Rhin Sud") + get_volume_loc(data, "Reste Doubs") + get_volume_loc(data, "Reste Haute Saone") + get_volume_loc(data, "Agglomeration de Hericourt");

    console.log(get_volume_loc(data, "Ville de Belfort"));*/
            
            var labelGlobal16 = "";
            var label1_2016 = "";
            var value1_2016 = 0;
            var label2_2016 = "";
            var value2_2016 = 0;
            var label3_2016 = "";
            var value3_2016 = 0;
            var label4_2016 = "";
            var value4_2016 = 0;
            var label5_2016 = "";
            var value5_2016 = 0;
            
            var labelGlobal17 = "";
            var label1_2017 = "";
            var value1_2017 = 0;
            var label2_2017 = "";
            var value2_2017 = 0;
            var label3_2017 = "";
            var value3_2017 = 0;
            var label4_2017 = "";
            var value4_2017 = 0;
            var label5_2017 = "";
            var value5_2017 = 0;
            var label6_2017 = "";
            var value6_2017 = 0;
            
            if(nomTable == "" || nomTable == "csp"){
            labelGlobal16 = "CSP 2016";
            labelGlobal17 = "CSP 2017";
            label1_2016 = "CSP+";
            label1_2017 = "CSP+";
            value1_2016 = get_volume_csp(data, "CSP+");
            value1_2017 = get_volume_csp_2017(data, "CSP+");
            label2_2016 = "CSP en croissance";
            label2_2017 = "CSP en croissance";
            value2_2016 = get_volume_csp(data, "CSP en croissance");
            value2_2017 = get_volume_csp_2017(data, "CSP en croissance");
            label3_2016 = "Populaire";
            label3_2017 = "Populaire";
            value3_2016 = get_volume_csp(data, "Populaire");
            value3_2017 = get_volume_csp_2017(data, "Populaire");
            label4_2016 = "Autres";
            label4_2017 = "Autres";
            value4_2016 = get_volume_csp(data, "NR");
            value4_2017 = get_volume_csp_2017(data, "NR");
            } 
            if (nomTable == "age"){
                labelGlobal16 = "Age 2016";
                labelGlobal17 = "Age 2017";
                label1_2016 = "18-24 ans";
                label1_2017 = "18-24 ans";
                value1_2016 = get_volume_age(data, "18-24 ans");
                value1_2017 = get_volume_age_2017(data, "18-24");
                label2_2016 = "25-34 ans";
                label2_2017 = "25-34 ans";
                value2_2016 = get_volume_age(data, "25-34 ans");
                value2_2017 = get_volume_age_2017(data, "25-34");
                label3_2016 = "35-44 ans";
                label3_2017 = "35-44 ans";
                value3_2016 = get_volume_age(data, "35-44 ans");
                value3_2017 = get_volume_age_2017(data, "35-44");
                label4_2016 = "45-54 ans";
                label4_2017 = "45-54 ans";
                value4_2016 = get_volume_age(data, "45-54 ans");
                value4_2017 = get_volume_age_2017(data, "45-54");
                label5_2016 = "55-65 ans et plus";
                label5_2017 = "55-65 ans et plus";
                value5_2016 = get_volume_age(data, "55-64 ans") + get_volume_age(data, "65 ans et +");
                value5_2017 = get_volume_age_2017(data, "55-64") + get_volume_age(data, ">65");
                label6_2017 = "Moins de 18 ans";
                value6_2017 = get_volume_age_2017(data, "<18");
            }
            if (nomTable == "origine"){
                labelGlobal16 = "Origine 2016";
                labelGlobal17 = "Origine 2017"
                label1_2016 = "Résident";
                label1_2017 = "Résident";
                value1_2016 = get_volume_visit(data, "Résident ");
                value1_2017 = get_volume_visit_2017(data, "Resident");
                label2_2016 = "Touriste Français";
                label2_2017 = "Touriste Français";
                value2_2016 = get_volume_visit(data, "Touriste Français");
                value2_2017 = get_volume_visit_2017(data, "Touriste Français");
                label3_2016 = "Touriste Etranger";
                label3_2017 = "Touriste Etranger";
                value3_2016 = get_volume_visit(data, "Touriste Etranger");
                value3_2017 = get_volume_visit_2017(data, "Touriste Etranger");
            }
    // Diagramme Nuitée
    var FreqGlobal2016 = new d3pie("FreqGlobale2016", {
        "header": {
            "title": {
                "text": labelGlobal16,
                "fontSize": 24,
                "font": "open sans"
            },
            "subtitle": {
                "text": "In a few minutes",
                "color": "#999999",
                "fontSize": 12,
                "font": "open sans"
            },
            "titleSubtitlePadding": 9
        },
        "footer": {
            "color": "#999999",
            "fontSize": 10,
            "font": "open sans",
            "location": "bottom-left"
        },
        "size": {
            "canvasWidth": 590,
            "pieOuterRadius": "90%"
        },
        "data": {
            "sortOrder": "value-desc",
            "content": [
                {
                    "label": label1_2016,
                    "value": value1_2016,
                    "color": "#2484c1"
			},
                {
                    "label": label2_2016,
                    "value": value2_2016,
                    "color": "#0c6197"
			},
                {
                    "label": label3_2016,
                    "value": value3_2016,
                    "color": "#4daa4b"
			},
                {
                    "label": label4_2016,
                    "value": value4_2016,
                    "color": "#daca61"
			},
                {
                    "label": label5_2016,
                    "value": value5_2016,
                    "color": "#dece89"
			},

		]
        },
        "labels": {
            "outer": {
                "pieDistance": 25
            },
            "inner": {
                "hideWhenLessThanPercentage": 3
            },
            "mainLabel": {
                "fontSize": 11
            },
            "percentage": {
                "color": "#ffffff",
                "decimalPlaces": 0
            },
            "value": {
                "color": "#adadad",
                "fontSize": 11
            },
            "lines": {
                "enabled": true
            },
            "truncation": {
                "enabled": true
            }
        },
        "effects": {
            "pullOutSegmentOnClick": {
                "effect": "linear",
                "speed": 400,
                "size": 8
            }
        },
        "misc": {
            "gradient": {
                "enabled": true,
                "percentage": 100
            }
        }
    });
            $('#FreqGlobale2016').append(value1_2016 + value2_2016 + value3_2016 + value4_2016 + value5_2016);
            
            var FreqGlobal2017 = new d3pie("FreqGlobale2017", {
        "header": {
            "title": {
                "text": labelGlobal17,
                "fontSize": 24,
                "font": "open sans"
            },
            "subtitle": {
                "text": "In a few minutes",
                "color": "#999999",
                "fontSize": 12,
                "font": "open sans"
            },
            "titleSubtitlePadding": 9
        },
        "footer": {
            "color": "#999999",
            "fontSize": 10,
            "font": "open sans",
            "location": "bottom-left"
        },
        "size": {
            "canvasWidth": 590,
            "pieOuterRadius": "90%"
        },
        "data": {
            "sortOrder": "value-desc",
            "content": [
                {
                    "label": label1_2017,
                    "value": value1_2017,
                    "color": "#2484c1"
			},
                {
                    "label": label2_2017,
                    "value": value2_2017,
                    "color": "#0c6197"
			},
                {
                    "label": label3_2017,
                    "value": value3_2017,
                    "color": "#4daa4b"
			},
                {
                    "label": label4_2017,
                    "value": value4_2017,
                    "color": "#daca61"
			},
                {
                    "label": label5_2017,
                    "value": value5_2017,
                    "color": "#dece89"
			},
                {
                    "label": label6_2017,
                    "value": value6_2017,
                    "color": "#kild89"
			},

		]
        },
        "labels": {
            "outer": {
                "pieDistance": 25
            },
            "inner": {
                "hideWhenLessThanPercentage": 3
            },
            "mainLabel": {
                "fontSize": 11
            },
            "percentage": {
                "color": "#ffffff",
                "decimalPlaces": 0
            },
            "value": {
                "color": "#adadad",
                "fontSize": 11
            },
            "lines": {
                "enabled": true
            },
            "truncation": {
                "enabled": true
            }
        },
        "effects": {
            "pullOutSegmentOnClick": {
                "effect": "linear",
                "speed": 400,
                "size": 8
            }
        },
        "misc": {
            "gradient": {
                "enabled": true,
                "percentage": 100
            }
        }
    });
            $('#FreqGlobale2017').append(value1_2017 + value2_2017 + value3_2017 + value4_2017 + value5_2017);
        },
        error: function () {
            console.log('error');
        }

    });
}

$(document).ready(function () {
    var data = genere();
   

    $(".periode").change(function () {

        var periode = $(this).attr('id');
        
        if($('#csp').hasClass('active')){
            var nomTable = "csp";
        }
        
        if($('#age').hasClass('active')){
            var nomTable = "age";
        }
        
        if($('#origine').hasClass('active')){
            var nomTable = "origine";
        }
        $('#FreqGlobale2016').html("");
        $('#FreqGlobale2017').html("");
        console.log(periode + " , " + nomTable);
        genere(nomTable, periode);
    });
});