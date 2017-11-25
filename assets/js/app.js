function get_volume_csp(data, csp) {
    var VolumeTotalcsp = 0;
    data.forEach(function (index) {
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
    data.forEach(function (index){
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
    data.forEach(function (index) {
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
            
            var labelGlobal = "";
            var label1 = "";
            var value1 = 0;
            var label2 = "";
            var value2 = 0;
            var label3 = "";
            var value3 = 0;
            var label4 = "";
            var value4 = 0;
            var label5 = "";
            var value5 = 0;
            
            if(nomTable == "" || nomTable == "csp"){
            labelGlobal = "CSP 2016";
            label1 = "CSP+";
            value1 = get_volume_csp(data, "CSP+");
            label2 = "CSP en croissance";
            value2 = get_volume_csp(data, "CSP en croissance");
            label3 = "Populaire";
            value3 = get_volume_csp(data, "Populaire");
            label4 = "Autres";
            value4 = get_volume_csp(data, "NR");
            } 
            if (nomTable == "age"){
                labelGlobal = "Age 2016";
                label1 = "18-24 ans";
                value1 = get_volume_age(data, "18-24 ans");
                label2 = "25-34 ans";
                value2 = get_volume_age(data, "25-34 ans");
                label3 = "35-44 ans";
                value3 = get_volume_age(data, "35-44 ans");
                label4 = "45-54 ans";
                value4 = get_volume_age(data, "45-54 ans");
                label5 = "55-65 ans et plus"
                value5 = get_volume_age(data, "55-64 ans") + get_volume_age(data, "65 ans et +");
                console.log(value2);
            }
            if (nomTable == "origine"){
                labelGlobal = "Origine 2016";
                label1 = "Résident";
                value1 = get_volume_visit(data, "Résident ");
                label2 = "Touriste Français";
                value2 = get_volume_visit(data, "Touriste Français");
                label3 = "Touriste Etranger";
                value3 = get_volume_visit(data, "Touriste Etranger");
            }
    // Diagramme Nuitée
    var FreqGlobal2016 = new d3pie("FreqGlobale2016", {
        "header": {
            "title": {
                "text": labelGlobal,
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
                    "label": label1,
                    "value": value1,
                    "color": "#2484c1"
			},
                {
                    "label": label2,
                    "value": value2,
                    "color": "#0c6197"
			},
                {
                    "label": label3,
                    "value": value3,
                    "color": "#4daa4b"
			},
                {
                    "label": label4,
                    "value": value4,
                    "color": "#daca61"
			},
                {
                    "label": label5,
                    "value": value5,
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
            $('#FreqGlobale2016').append(value1 + value2 + value3 + value4 + value5);
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
        console.log(periode + " , " + nomTable);
        genere(nomTable, periode);
    });
});