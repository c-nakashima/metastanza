import { d as defineStanzaElement } from './stanza-element-d1cc4290.js';
import './array-2b5f08c6.js';
import './vega.module-c3463ded.js';
import './timer-a7d16713.js';
import { e as embed } from './vega-embed.module-ab9284a0.js';

async function vegaTree(stanza, params) {
  let spec = await fetch(params["src-url"]).then((res) => res.json());
  spec.data[0].url ="https://vega.github.io/vega/data/flare.json";

  //stanza（描画範囲）のwidth・height
  spec.width = params["width"]; 
  spec.height = params["width"];
  
  //stanzaのpadding
  spec.padding = params["padding"];

  //scales: カラースキームを指定

  spec.scales[0].type = "ordinal";

  spec.scales[0].range = [
    'var(--series-0-color)',
    'var(--series-1-color)',
    'var(--series-2-color)',
    'var(--series-3-color)',
    'var(--series-4-color)',
    'var(--series-5-color)'
  ];

  //marks:描画について

  //（デフォルトのコントローラを削除） 
  for (let signal of spec.signals)
    { 
      delete(signal.bind); 
    } 

  spec.marks[0].encode ={
    "update": {
      "path": {"field": "path"},
      "stroke": {"value": "var(--branch-color)"}
    },
    "hover": {
      "stroke": {"value": "var(--emphasized-color)"}
    }
  };

  spec.marks[1].encode ={
    "enter": {
      "size": {"value": getComputedStyle(stanza.root.host).getPropertyValue("--node-size")},
      "stroke": {"value": "var(--stroke-color)"}
    },
    "update": {
      "x": {"field": "x"},
      "y": {"field": "y"},
      "fill": {"scale": "color", "field": "depth"}
    },
    "hover": {
      "fill": {"value": "var(--emphasized-color)"}
    }
  };

  spec.marks[2].encode ={
    "enter": {
      "text": {"field": "name"},
      "font":{"value": getComputedStyle(stanza.root.host).getPropertyValue("--label-font")},
      "fontSize": {"value": params["label-size"]},
      "baseline": {"value": "middle"},
    },
    "update": {
      "x": {"field": "x"},
      "y": {"field": "y"},
      "dx": {"signal": "datum.children ? -7 : 7"},
      "align": {"signal": "datum.children ? 'right' : 'left'"},
      "opacity": {"signal": "labels ? 1 : 0"},
      "fill": {"value": "var(--label-color)"}
    },
    "hover": {
      "fill": {"value": "var(--emphasized-color)"}
    }
  };

  //legendを出す
  spec.legends =
  [
    {
      "fill": "color",
      "title": params["title-of-legend"],
      "orient": "bottom-left",
      "encode": {
        // "symbols": {"enter": {"fillOpacity": {"value": 0.5}}},
        "labels": {"update": {"text": {"field": "value"}}}
      }
      // ,
      // "legend":{
      //   "layout": {
      //     "bottom": {
      //       "anchor": "middle",
      //       "direction": "vertical",
      //       "center": true,
      //       "margin": 2,
      //     }
      //   }
      // } 
    }
  ];

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
	"@id": "vega_tree",
	"stanza:label": "Vega Tree",
	"stanza:definition": "vega_wrapping_tree",
	"stanza:type": "Stanza",
	"stanza:display": "Tree",
	"stanza:provider": "Togostanza",
	"stanza:license": "MIT",
	"stanza:author": "c-nakashima",
	"stanza:address": "nakashima@penqe.com",
	"stanza:contributor": [
],
	"stanza:created": "2020-11-26",
	"stanza:updated": "2020-11-26",
	"stanza:parameter": [
	{
		"stanza:key": "src-url",
		"stanza:example": "https://vega.github.io/vega/examples/tree-layout.vg.json",
		"stanza:description": "source url which returns Vega specification compliant JSON",
		"stanza:required": true
	},
	{
		"stanza:key": "width",
		"stanza:type": "number",
		"stanza:example": "600",
		"stanza:description": "width of your stanza"
	},
	{
		"stanza:key": "height",
		"stanza:type": "number",
		"stanza:example": "1600",
		"stanza:description": "height of your stanza"
	},
	{
		"stanza:key": "padding",
		"stanza:type": "number",
		"stanza:example": "5",
		"stanza:description": "padding around your stanza"
	},
	{
		"stanza:key": "title-of-legend",
		"stanza:type": "string",
		"stanza:example": "Title of this legend",
		"stanza:description": "title of legends"
	}
],
	"stanza:about-link-placement": "bottom-right",
	"stanza:style": [
	{
		"stanza:key": "--emphasized-color",
		"stanza:type": "color",
		"stanza:default": "#ec7d8d",
		"stanza:description": "emphasized color when you hover on text of each nodes"
	},
	{
		"stanza:key": "--label-color",
		"stanza:type": "color",
		"stanza:default": "#333",
		"stanza:description": "text color of each nodes"
	},
	{
		"stanza:key": "--branch-color",
		"stanza:type": "color",
		"stanza:default": "#eee",
		"stanza:description": "color of branches"
	},
	{
		"stanza:key": "--node-size",
		"stanza:type": "number",
		"stanza:default": "100",
		"stanza:description": "size of each node"
	},
	{
		"stanza:key": "--stroke-color",
		"stanza:type": "color",
		"stanza:default": "#fff",
		"stanza:description": "color of stroke"
	},
	{
		"stanza:key": "--label-font",
		"stanza:type": "string",
		"stanza:default": "san serif",
		"stanza:description": "font style of labels.(e.g serif, san serif, fantasy)"
	},
	{
		"stanza:key": "--series-0-color",
		"stanza:type": "color",
		"stanza:default": "#FFC39E",
		"stanza:description": "first color"
	},
	{
		"stanza:key": "--series-1-color",
		"stanza:type": "color",
		"stanza:default": "#FF8DB8",
		"stanza:description": "second color"
	},
	{
		"stanza:key": "--series-2-color",
		"stanza:type": "color",
		"stanza:default": "#C690C6",
		"stanza:description": "third color"
	},
	{
		"stanza:key": "--series-3-color",
		"stanza:type": "color",
		"stanza:default": "#6992D1",
		"stanza:description": "forth color"
	},
	{
		"stanza:key": "--series-4-color",
		"stanza:type": "color",
		"stanza:default": "#71B093",
		"stanza:description": "fifth color"
	},
	{
		"stanza:key": "--series-5-color",
		"stanza:type": "color",
		"stanza:default": "#94BC8A",
		"stanza:description": "sixth color"
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

defineStanzaElement(vegaTree, {metadata, templates, css, url: import.meta.url});
//# sourceMappingURL=vega_tree.js.map
