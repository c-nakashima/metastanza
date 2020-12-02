import { d as defineStanzaElement } from './stanza-element-d1cc4290.js';
import './array-2b5f08c6.js';
import './vega.module-c3463ded.js';
import './timer-a7d16713.js';
import { e as embed } from './vega-embed.module-ab9284a0.js';

async function vegaBarchart(stanza, params) {
  let spec = await fetch(params["src-url"]).then((res) => res.json());
  spec.data[0].values = [
    {"category": "value1", "amount": 1},
    {"category": "value2", "amount": 7},
    {"category": "value3", "amount": 5},
    {"category": "value4", "amount": 9},
  ];

  //stanza（描画範囲）のwidth・height
  spec.width = params["width"]; 
  spec.height = params["height"];
  // spec.width = "var(--width)"
  // spec.height = "var(--height)"
  
  //stanzaのpadding
  spec.padding = params["padding"];

  //イベントなど設定できるかと思ったができない
  // spec.signals[0].on[0].events = "click"
  // spec.signals[0].on[1].events = "click"

  //棒・スケールに関する設定
  spec.scales[0].paddingInner = params["padding-inner"];
  spec.scales[0].paddingOuter = params["padding-outer"];

  //軸に関する設定
  spec.axes[0].orient = params["orient-of-xscale"];
  spec.axes[1].orient = params["orient-of-yscale"];
  spec.axes[0].title = params["title-of-xaxis"];
  spec.axes[1].title = params["title-of-yaxis"];
  spec.axes[0].encode = {
    "ticks": {
      "update": {
      "stroke": {"value": params["tick-color"]}
      }
    },
    "labels": {
      "interactive": true,
      "update": {
        "fill": {"value": params["label-color"]},
        // "fontSize": {"value": params["label-size"]},
        "fontSize": {"value": "var(--label-size)"}
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
  };

  spec.axes[1].encode = {
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
  };

  //rect（棒）の描画について
  spec.marks[0].encode ={
    "enter": {
      "x": {"scale": "xscale", "field": "category"},
      "width": {"scale": "xscale", "band": params["bar-width"]},
      "y": {"scale": "yscale", "field": "amount"},
      "y2": {"scale": "yscale", "value": 0},
    },
    "update": {
      "fill": {"value": "var(--basic-fill-color)"}
    },
    "hover": {
      "fill": {"value": "var(--emphasized-color)"}
    }
  };

  spec.marks[1].encode ={
    "enter": {
      "align": {"value": "center"},
      "baseline": {"value": "bottom"},
      "fill": {"value": "var(--emphasized-color)"},
      "fontSize": {value: params["fontsize-of-value"]}
    },
    "update": {
      "x": {"scale": "xscale", "signal": "tooltip.category", "band": 0.5},
      "y": {"scale": "yscale", "signal": "tooltip.amount", "offset": -1},
      "text": {"signal": "tooltip.amount"},
      "fillOpacity": [
        {"test": "datum === tooltip", "value": 0},
        {"value": 1}
      ]
    }
  };


  // spec.marks[0].encode.update.fill.value = "var(--bar-color)"
  // spec.marks[0].encode.hover.fill.value = "var(--emphasized-color)"
  // spec.marks[1].encode.enter.fill.value = "var(--emphasized-color)"
  // spec.marks[1].encode.enter.fontSize = {value: params["fontsize-of-value"]}
  // spec.marks[1].encode.enter.fontWeight = {value: params["fontweight-of-value"]}

  const el = stanza.root.querySelector("main");
  const opts = {
    renderer: "svg"
  };
  await embed(el, spec, opts);
}

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "vega_barchart",
	"stanza:label": "Vega barchart",
	"stanza:definition": "vega_wrapping_barchart",
	"stanza:type": "Stanza",
	"stanza:display": "Chart",
	"stanza:provider": "Togostanza",
	"stanza:license": "MIT",
	"stanza:author": "c_nakashima",
	"stanza:address": "nakashima@penqe.com",
	"stanza:contributor": [
],
	"stanza:created": "2020-11-06",
	"stanza:updated": "2020-11-06",
	"stanza:parameter": [
	{
		"stanza:key": "src-url",
		"stanza:example": "https://vega.github.io/vega/examples/bar-chart.vg.json",
		"stanza:description": "source url which returns Vega specification compliant JSON",
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
		"stanza:key": "padding-inner",
		"stanza:type": "range",
		"stanza:example": "0.1",
		"stanza:description": "padding between each bars.This mast be in the range[0,1]"
	},
	{
		"stanza:key": "padding-outer",
		"stanza:type": "range",
		"stanza:example": "0.2",
		"stanza:description": "padding outside a set of bars.This mast be in the range[0,1]"
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
		"stanza:key": "bar-width",
		"stanza:type": "number",
		"stanza:example": "0.8",
		"stanza:description": "width of bars.This mast be in the range[0,1]"
	},
	{
		"stanza:key": "fontsize-of-value",
		"stanza:type": "number",
		"stanza:example": "18",
		"stanza:description": "font size of each value"
	},
	{
		"stanza:key": "font-of-value",
		"stanza:type": "single-choice",
		"stanza:choice": [
			"serif",
			"sans-serif",
			"arial"
		],
		"stanza:example": "serif",
		"stanza:description": "font of each value"
	},
	{
		"stanza:key": "fontweight-of-value",
		"stanza:type": "string",
		"stanza:example": "bold",
		"stanza:description": "font weight of each value"
	}
],
	"stanza:about-link-placement": "bottom-right",
	"stanza:style": [
	{
		"stanza:key": "--basic-fill-color",
		"stanza:type": "color",
		"stanza:default": "#94d0da",
		"stanza:description": "bar color"
	},
	{
		"stanza:key": "--emphasized-color",
		"stanza:type": "color",
		"stanza:default": "#ec7d8d",
		"stanza:description": "emphasized color when you hover on labels and rects"
	},
	{
		"stanza:key": "--label-size",
		"stanza:type": "number",
		"stanza:default": "12",
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

  return "<head>\n</head>\n\n<p class=\"greeting\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"greeting") || (depth0 != null ? lookupProperty(depth0,"greeting") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"greeting","hash":{},"data":data,"loc":{"start":{"line":4,"column":20},"end":{"line":4,"column":32}}}) : helper)))
    + "</p>\n";
},"useData":true}],
["style-like-togovar.css", {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return ":root{\n  --basic-fill-color : #ff00ff;\n  --emphasized-color : #00ff00;\n}";
},"useData":true}]
];

var css = "/*\n\nYou can set up a global style here that is commonly used in each stanza.\n\nExample:\n\nh1 {\n  font-size: 24px;\n}\n\n*/\nmain {\n  padding: 1rem 2rem;\n}\n\np.greeting {\n  margin: 0;\n  font-size: 24px;\n  color: var(--greeting-color);\n  text-align: var(--greeting-align);\n}";

defineStanzaElement(vegaBarchart, {metadata, templates, css, url: import.meta.url});
//# sourceMappingURL=vega_barchart.js.map
