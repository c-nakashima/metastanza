import { d as defineStanzaElement } from './stanza-element-d1cc4290.js';
import './array-2b5f08c6.js';
import './vega.module-c3463ded.js';
import './timer-a7d16713.js';
import { e as embed } from './vega-embed.module-ab9284a0.js';

async function vegaScatterplot(stanza, params) {
  let spec = await fetch(params["src-url"]).then((res) => res.json());
  spec.data[0].url = params["your-data"];

  //stanza（描画範囲）のwidth・height
  spec.width = params["width"]; 
  spec.height = params["height"];
  
  //stanzaのpadding
  spec.padding = params["padding"];

  //スケールに関する設定
  spec.scales[0].paddingInner = params["padding-inner"];
  spec.scales[0].paddingOuter = params["padding-outer"];

  //軸に関する設定
  spec.axes =[
    {
      "scale": "x",
      "grid": params["xgrid"],
      "domain": false,
      "orient": params["orient-of-xscale"],
      "tickCount": 5,
      "title": params["title-of-xaxis"],
      "encode": {
          "ticks": {
            "update": {
            "stroke": {"value": params["tick-color"]}
            }
          },
          "labels": {
            "interactive": true,
            "update": {
              "fill": {"value": params["label-color"]},
              "fontSize": {"value": params["label-size"]},
            },
            "hover": {
              "fill": {"value": "var(--emphasized-color)"}
            }
          },
          "title": {
            "update": {
              "fontSize": {"value": params["title-size"]}
            }
          },
          "domain": {
            "update": {
              "stroke": {"value": params["axis-color"]},
              "strokeWidth": {"value": params["axis-width"]}
            }
          }
        }
    },
    {
      "scale": "y",
      "grid": params["ygrid"],
      "domain": false,
      "orient": params["orient-of-yscale"],
      "titlePadding": 5,
      "title": params["title-of-yaxis"],
      "encode": {
        "ticks": {
          "update": {
          "stroke": {"value": params["tick-color"]}
          }
        },
        "labels": {
          "interactive": true,
          "update": {
            "fill": {"value": params["label-color"]},
            "fontSize": {"value": params["label-size"]},
          },
          "hover": {
            "fill": {"value": "var(--emphasized-color)"}
          }
        },
        "title": {
          "update": {
            "fontSize": {"value": params["title-size"]}
          }
        },
        "domain": {
          "update": {
            "stroke": {"value": params["axis-color"]},
            "strokeWidth": {"value": params["axis-width"]}
          }
        }
      }
    }
  ];

  spec.legends = [
    {
      "size": "size",
      "title": params["title-of-legend"],
      "format": "s",
      "symbolStrokeColor": params["stroke-color"],
      "symbolStrokeWidth": params["stroke-width"],
      "symbolOpacity": params["opacity"],
      "symbolType": params["symbol-type"],
      "symbolFillColor": {"value": "var(--basic-fill-color)"}
    }
  ];

  spec.marks= [
    {
    "name": "marks",
    "type": "symbol",
    "from": {"data": "source"},
    "encode": {
      "update": {
        "x": {"scale": "x", "field": "Horsepower"},
        "y": {"scale": "y", "field": "Miles_per_Gallon"},
        "size": {"scale": "size", "field": "Acceleration"},
        "shape": {"value": params["symbol-type"]},
        "strokeWidth": {"value": params["stroke-width"]},
        "opacity": {"value": params["opacity"]},
        "stroke": {"value": params["stroke-color"]},
        "fill": {"value": "var(--basic-fill-color)"}
      },
      "hover": {
        "fill": {"value": "var(--emphasized-color)"},
      }
      }
    }
  ];

  // spec.axes[0].encode = {
  //   "ticks": {
  //     "update": {
  //     "stroke": {"value": params["tick-color"]}
  //     }
  //   },
  //   "labels": {
  //     "interactive": true,
  //     "update": {
  //       "fill": {"value": params["label-color"]},
  //       "fontSize": {"value": params["label-size"]},
  //     },
  //     "hover": {
  //       "fill": {"value": "var(--emphasized-color)"}
  //     }
  //   },
  //   "title": {
  //     "update": {
  //       "fontSize": {"value": params["title-size"]}
  //     }
  //   },
  //   "domain": {
  //     "update": {
  //       "stroke": {"value": params["axis-color"]},
  //       "strokeWidth": {"value": params["axis-width"]}
  //     }
  //   }
  // }

  // spec.axes[1].encode = {
  //   "ticks": {
  //     "update": {
  //     "stroke": {"value": params["tick-color"]}
  //     }
  //   },
  //   "labels": {
  //     "interactive": true,
  //     "update": {
  //       "fill": {"value": params["label-color"]},
  //       "fontSize": {"value": params["label-size"]},
  //     },
  //     "hover": {
  //       "fill": {"value": "var(--emphasized-color)"}
  //     }
  //   },
  //   "title": {
  //     "update": {
  //       "fontSize": {"value": params["title-size"]}
  //     }
  //   },
  //   "domain": {
  //     "update": {
  //       "stroke": {"value": params["axis-color"]},
  //       "strokeWidth": {"value": params["axis-width"]}
  //     }
  //   }
  // }

//   spec.axes[0].title = params["xaxes-title"]
//   spec.axes[1].title = params["yaxes-title"]
  
//   spec.legends[0].title = params["legends-title"]
//   spec.legends[0].symbolOpacity = "var(--opacity)"
//   spec.legends[0].symbolStrokeColor = "var(--plot-frame-color)"
//   // spec.legends[0].symbolStrokeWidth = "var(--stroke-width)"
//   // spec.legends[0].symbolType = ["symbol-type"]

//   spec.marks[0].encode.update.fill.value = "var(--plot-color)"
//   spec.marks[0].encode.update.stroke.value = "var(--plot-frame-color)"
//   spec.marks[0].encode.update.opacity.value = "var(--opacity)"
//   spec.marks[0].encode.update.strokeWidth.value = "var(--stroke-width)"
//   // spec.marks[0].encode.update.shape.value = ["symbol-type"]
//   spec.marks[0].encode.update.shape.value = params["--symbol-type"]

  const el = stanza.root.querySelector("main");
  const opts = {
    renderer: "svg"
  };
  await embed(el, spec, opts);
}


// import vegaEmbed from "vega-embed";

// export default function vegaScatterplot(stanza, params) {
//   // let spec = await fetch(params["src-url"]).then((res) => res.json());
//   let spec = {
//     "$schema": "https://vega.github.io/schema/vega/v5.json",
//     "description": "A basic scatter plot example depicting automobile statistics.",
//     "width": 200,
//     "height": 200,
//     "padding": 5,
  
//     "data": [
//       {
//         "name": "source",
//         "url": "data/cars.json",
//         "transform": [
//           {
//             "type": "filter",
//             "expr": "datum['Horsepower'] != null && datum['Miles_per_Gallon'] != null && datum['Acceleration'] != null"
//           }
//         ]
//       }
//     ],
  
//     "scales": [
//       {
//         "name": "x",
//         "type": "linear",
//         "round": true,
//         "nice": true,
//         "zero": true,
//         "domain": {"data": "source", "field": "Horsepower"},
//         "range": "width"
//       },
//       {
//         "name": "y",
//         "type": "linear",
//         "round": true,
//         "nice": true,
//         "zero": true,
//         "domain": {"data": "source", "field": "Miles_per_Gallon"},
//         "range": "height"
//       },
//       {
//         "name": "size",
//         "type": "linear",
//         "round": true,
//         "nice": false,
//         "zero": true,
//         "domain": {"data": "source", "field": "Acceleration"},
//         "range": [4,361]
//       }
//     ],
  
//     "axes": [
//       {
//         "scale": "x",
//         "grid": true,
//         "domain": false,
//         "orient": "bottom",
//         "tickCount": 5,
//         "title": "Horsepower"
//       },
//       {
//         "scale": "y",
//         "grid": true,
//         "domain": false,
//         "orient": "left",
//         "titlePadding": 5,
//         "title": "Miles_per_Gallon"
//       }
//     ],
  
//     "legends": [
//       {
//         "size": "size",
//         "title": "Acceleration",
//         "format": "s",
//         "symbolStrokeColor": "#4682b4",
//         "symbolStrokeWidth": 2,
//         "symbolOpacity": 0.5,
//         "symbolType": "circle"
//       }
//     ],
  
//     "marks": [
//       {
//         "name": "marks",
//         "type": "symbol",
//         "from": {"data": "source"},
//         "encode": {
//           "update": {
//             "x": {"scale": "x", "field": "Horsepower"},
//             "y": {"scale": "y", "field": "Miles_per_Gallon"},
//             "size": {"scale": "size", "field": "Acceleration"},
//             "shape": {"value": "circle"},
//             "strokeWidth": {"value": 2},
//             "opacity": {"value": 0.5},
//             "stroke": {"value": "#4682b4"},
//             "fill": {"value": "transparent"}
//           }
//         }
//       }
//     ]
//   };

//   console.log(spec)

//   // spec.data[0].values = fetch('https://vega.github.io/vega-lite/data/cars.json').then((res) => res.json());
//   // spec.data[0].url = 'https://vega.github.io/vega-lite/data/cars.json'
//   spec.data[0].url = params["your-data"]

//   spec.axes[0].title = params["xaxes-title"]
//   spec.axes[1].title = params["yaxes-title"]
  
//   spec.legends[0].title = params["legends-title"]
//   spec.legends[0].symbolOpacity = "var(--opacity)"
//   spec.legends[0].symbolStrokeColor = "var(--plot-frame-color)"
//   // spec.legends[0].symbolStrokeWidth = "var(--stroke-width)"
//   // spec.legends[0].symbolType = ["symbol-type"]

//   spec.marks[0].encode.update.fill.value = "var(--plot-color)"
//   spec.marks[0].encode.update.stroke.value = "var(--plot-frame-color)"
//   spec.marks[0].encode.update.opacity.value = "var(--opacity)"
//   spec.marks[0].encode.update.strokeWidth.value = "var(--stroke-width)"
//   // spec.marks[0].encode.update.shape.value = ["symbol-type"]
//   spec.marks[0].encode.update.shape.value = params["--symbol-type"]


//   const el = stanza.root.querySelector("main");
//   const opts = {
//     renderer: "svg"
//   };
//   vegaEmbed(el, spec, opts);
// }

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "vega_scatterplot",
	"stanza:label": "Vega scatterplot",
	"stanza:definition": "vega_wrapping_scatterplot",
	"stanza:type": "Stanza",
	"stanza:display": "Graph",
	"stanza:provider": "Togostanza",
	"stanza:license": "MIT",
	"stanza:author": "c-nakashima",
	"stanza:address": "nakashima@penqe.com",
	"stanza:contributor": [
],
	"stanza:created": "2020-11-06",
	"stanza:updated": "2020-11-06",
	"stanza:parameter": [
	{
		"stanza:key": "src-url",
		"stanza:example": "https://vega.github.io/vega/examples/scatter-plot.vg.json",
		"stanza:description": "source url which returns Vega specification compliant JSON",
		"stanza:required": true
	},
	{
		"stanza:key": "your-data",
		"stanza:example": "https://vega.github.io/vega-lite/data/cars.json",
		"stanza:description": "JSON data url which you want to draw",
		"stanza:required": true
	},
	{
		"stanza:key": "width",
		"stanza:type": "number",
		"stanza:example": "200",
		"stanza:description": "width of your stanza"
	},
	{
		"stanza:key": "height",
		"stanza:type": "number",
		"stanza:example": "200",
		"stanza:description": "height of your stanza"
	},
	{
		"stanza:key": "padding",
		"stanza:type": "number",
		"stanza:example": "20",
		"stanza:description": "padding around your stanza"
	},
	{
		"stanza:key": "orient-of-xscale",
		"stanza:type": "string",
		"stanza:example": "bottom",
		"stanza:description": "orient of xscale.(please select top or bottom)"
	},
	{
		"stanza:key": "orient-of-yscale",
		"stanza:type": "string",
		"stanza:example": "left",
		"stanza:description": "orient of yscale.(please select left or right)"
	},
	{
		"stanza:key": "tick-color",
		"stanza:type": "color",
		"stanza:example": "#333",
		"stanza:description": "tick color"
	},
	{
		"stanza:key": "label-color",
		"stanza:type": "color",
		"stanza:example": "#333",
		"stanza:description": "label color"
	},
	{
		"stanza:key": "label-size",
		"stanza:type": "number",
		"stanza:example": "12",
		"stanza:description": "font size of labels"
	},
	{
		"stanza:key": "title-of-xaxis",
		"stanza:type": "string",
		"stanza:example": "title of Xaxis",
		"stanza:description": "title of Xaxis"
	},
	{
		"stanza:key": "title-of-yaxis",
		"stanza:type": "string",
		"stanza:example": "title of Yaxis",
		"stanza:description": "title of Yaxis"
	},
	{
		"stanza:key": "title-of-legend",
		"stanza:type": "string",
		"stanza:example": "Acceleration",
		"stanza:description": "title of legends"
	},
	{
		"stanza:key": "title-size",
		"stanza:type": "number",
		"stanza:example": "12",
		"stanza:description": "font size of titles"
	},
	{
		"stanza:key": "axis-color",
		"stanza:type": "color",
		"stanza:example": "#333",
		"stanza:description": "color of axis"
	},
	{
		"stanza:key": "axis-width",
		"stanza:type": "number",
		"stanza:example": "1",
		"stanza:description": "width of axis"
	},
	{
		"stanza:key": "xgrid",
		"stanza:type": "Boolean",
		"stanza:example": false,
		"stanza:description": "display of x grids"
	},
	{
		"stanza:key": "ygrid",
		"stanza:type": "Boolean",
		"stanza:example": false,
		"stanza:description": "display of y grids"
	},
	{
		"stanza:key": "stroke-color",
		"stanza:type": "color",
		"stanza:example": "#333",
		"stanza:description": "symbol type of plot."
	},
	{
		"stanza:key": "stroke-width",
		"stanza:type": "number",
		"stanza:example": "1",
		"stanza:description": "stroke width"
	},
	{
		"stanza:key": "opacity",
		"stanza:type": "number",
		"stanza:example": "0.7",
		"stanza:description": "opacity of each plots"
	},
	{
		"stanza:key": "symbol-type",
		"stanza:type": "string",
		"stanza:example": "circle",
		"stanza:description": "symbol type of plot."
	}
],
	"stanza:about-link-placement": "bottom-right",
	"stanza:style": [
	{
		"stanza:key": "--basic-fill-color",
		"stanza:type": "color",
		"stanza:default": "#4682b4",
		"stanza:description": "color of plot"
	},
	{
		"stanza:key": "--emphasized-color",
		"stanza:type": "color",
		"stanza:default": "#ec7d8d",
		"stanza:description": "emphasized color when you hover on labels and rects"
	}
]
};

var templates = [
  ["stanza.html.hbs", {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<p class=\"greeting\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"greeting") || (depth0 != null ? lookupProperty(depth0,"greeting") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"greeting","hash":{},"data":data,"loc":{"start":{"line":1,"column":20},"end":{"line":1,"column":32}}}) : helper)))
    + "</p>\n";
},"useData":true}]
];

var css = "/*\n\nYou can set up a global style here that is commonly used in each stanza.\n\nExample:\n\nh1 {\n  font-size: 24px;\n}\n\n*/\nmain {\n  padding: 1rem 2rem;\n}\n\np.greeting {\n  margin: 0;\n  font-size: 24px;\n  color: var(--greeting-color);\n  text-align: var(--greeting-align);\n}";

defineStanzaElement(vegaScatterplot, {metadata, templates, css, url: import.meta.url});
//# sourceMappingURL=vega_scatterplot.js.map
