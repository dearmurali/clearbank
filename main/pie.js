
var pie = new d3pie("pieChart", {
	"size": {
		"canvasHeight": 340,
		"canvasWidth":450,
		"pieOuterRadius": "90%"
	},
	"data": {
		"sortOrder": "value-asc",
		"smallSegmentGrouping": {
			"enabled": true
		},
		"content": [
			{
				"label": "Savings",
				"value": 70,
				"color": "#387e6a"
			},
			{
				"label": "Expenditure",
				"value": 20,
				"color": "#386a7e"
			},
			{
				"label": "Investment",
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
			"fontSize": 11
		},
		"percentage": {
			"color": "#e1e1e1",
			"font": "verdana",
			"decimalPlaces": 1
		},
		"value": {
			"color": "#e1e1e1",
			"font": "verdana",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#cccccc"
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
