
var pie = new d3pie("pieChart", {
	"size": {
		"canvasHeight": 330,
		"canvasWidth":550,
		"pieOuterRadius": "90%"
	},
	"data": {
		"sortOrder": "value-asc",
		"smallSegmentGrouping": {
			"enabled": true
		},
		"content": [
			{
				"label": "Savings(70%)",
				"value": 70,
				"color": "#387e6a"
			},
			{
				"label": "Expenditure(20%)",
				"value": 20,
				"color": "#386a7e"
			},
			{
				"label": "Investment(10%)",
				"value": 10,
				"color": "#7e3838"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 32
		},
		"mainLabel": {
			"font": "verdana",
            "fontFace": "bold",
			"fontSize": 13
		},
		"percentage": {
			"color": "#e1e1e1",
			"font": "verdana",
			"decimalPlaces": 1
		},
		"value": {
			"color": "#e1e1e1",
			"font": "verdana",
			"fontSize": 12
		},
		"lines": {
			"enabled": true,
			"color": "#000000"
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "elastic",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#fdfdfd"
		}
	},
	"callbacks": {}
});
