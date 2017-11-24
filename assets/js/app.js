$(document).ready(function () {

});
$(window).on('load', function () {
    $.ajax({
        url: "assets/php/traitement.php",
        type: "POST",
        dataType: "json",
        success: function (data) {
            var VolumeTotalFR = 0;
            // Touriste Français Vendredi
            data.forEach(function (index) {
                if (index.Date == "2016-04-22") {
                    if (index.CategorieVisiteurs == "Touriste Français") {

                            var Volume = parseInt(index.Volume);
                        if (!isNaN(Volume)) {
                            VolumeTotalFR += Volume;
                        }
                    }
                }
            });
            
            console.log(VolumeTotalFR);





            // Diagramme Camembert
            var pie = new d3pie("Nuitée veillée", {
                "header": {
                    "title": {
                        "text": "Test Nuitée",
                        "fontSize": 22,
                    },
                    "subtitle": {
                        "text": "Je fais une batterie de test pour la base de donnée Nuitée Veillée",
                        "color": "#999999",
                        "fontSize": 10,
                    },
                    "titleSubtitlePadding": 12
                },
                "footer": {
                    "text": "Hey ! Je suis le footer",
                    "color": "#999999",
                    "fontSize": 11,
                    "location": "bottom-center"
                },
                "size": {
                    "canvasHeight": 400,
                    "canvasWidth": 590,
                    "pieOuterRadius": "88%"
                },
                "data": {
                    "content": [
                        {
                            "label": "Touriste Français",
                            "value": "bala",
                            "color": "#7e3838"
			},
                        {
                            "label": "Bennnnn!",
                            "value": 5,
                            "color": "#7e6538"
			},
                        {
                            "label": "Oh, god.",
                            "value": 2,
                            "color": "#7c7e38"
			},
                        {
                            "label": "But it's Friday night!",
                            "value": 3,
                            "color": "#587e38"
			},
                        {
                            "label": "Again?",
                            "value": 2,
                            "color": "#387e45"
			},
                        {
                            "label": "I'm considering an affair.",
                            "value": 1,
                            "color": "#387e6a"
			},
                        {
                            "label": "[baleful stare]",
                            "value": 3,
                            "color": "#386a7e"
			}
		]
                },
                "labels": {
                    "outer": {
                        "pieDistance": 32
                    },
                    "inner": {
                        "format": "value"
                    },
                    "mainLabel": {
                        "font": "verdana"
                    },
                    "percentage": {
                        "color": "#e1e1e1",
                        "font": "verdana",
                        "decimalPlaces": 0
                    },
                    "value": {
                        "color": "#e1e1e1",
                        "font": "verdana"
                    },
                    "lines": {
                        "enabled": true,
                        "color": "#cccccc"
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
                }
            });
        },
        error: function () {
            console.log('error');
        }

    });
});
