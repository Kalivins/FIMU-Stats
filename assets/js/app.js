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
/*Permet de récuperer le volume de visiteurs en fonction de la date et du type de visiteur
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
}

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

           
            var cspCumulNR = get_volume_csp(data, "NR");
    // Diagramme Nuitée
    var FreqGlobal2016 = new d3pie("FreqGlobale2016", {
        "header": {
            "title": {
                "text": "FreqGlobale2016",
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
                    "label": "CSP+",
                    "value": get_volume_csp(data, "CSP+"),
                    "color": "#2484c1"
			},
                {
                    "label": "CSP en croissance",
                    "value": get_volume_csp(data, "CSP en croissance"),
                    "color": "#0c6197"
			},
                {
                    "label": "Populaire",
                    "value": get_volume_csp(data, "Populaire"),
                    "color": "#4daa4b"
			},
                {
                    "label": "Autres",
                    "value": cspCumulNR,
                    "color": "#daca61"
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
        
        console.log(periode + " , " + nomTable);
        genere(nomTable, periode);
    });
});