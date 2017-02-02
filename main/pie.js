
var pie = new d3pie("pieChart", {
	"size": {
		"canvasHeight": 430,
		"canvasWidth":700,
		"pieOuterRadius": "90%"
	},
	"data": {
		"sortOrder": "value-asc",
		"smallSegmentGrouping": {
			"enabled": false
		},
		"content": [
			{
				"label": "Savings Account(40%)",
				"value": 40,
				"color": "#EB9532"
			},
			{
				"label": "Expenses(30%)",
				"value": 30,
				"color": "#26A65B"
			},
			{
				"label": "Investment(15%)",
				"value": 15,
				"color": "#674172"
			},
			{
				"label": "Loans(15%)",
				"value": 15,
				"color": "#D64541"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 30
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
			"fontSize": 25
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
