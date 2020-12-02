import { d as defineStanzaElement } from './stanza-element-d1cc4290.js';
import './array-2b5f08c6.js';
import './vega.module-c3463ded.js';
import './timer-a7d16713.js';
import { e as embed } from './vega-embed.module-ab9284a0.js';

async function vegaPiechart(stanza, params) {
  let spec = await fetch(params["src-url"]).then((res) => res.json());

  //stanza（描画範囲）のwidth・height（うまく効かない…広くなってしまう？）
  // spec.width = params["width"]
  // spec.height = params["height"]
  // spec.autosize = params["autosize"]

// カラースキームを独自で作成したい
  // vega.scheme('metastabasic', ['#AB3F61', '#F7EF8D', '#F7749E', '#5CD5F7', '#4895AB', '#4895AB']);
  // spec.scales[0].range.scheme = 'pastel1';
  spec.scales[0].range.scheme = params["color-scheme"];

//legendを出す
  spec.legend =[
  {
    "fill": "color",
    "encode": {
      "title": {
        "update": {
          "fontSize": {"value": 14}
        }
      },
      "labels": {
        "interactive": true,
        "update": {
          "fontSize": {"value": 12},
          "fill": {"value": "black"}
        },
        "hover": {
          "fill": {"value": "firebrick"}
        }
      },
      "symbols": {
        "update": {
          "stroke": {"value": "transparent"}
        }
      },
      "legend": {
        "update": {
          "stroke": {"value": "#ccc"},
          "strokeWidth": {"value": 1.5}
        }
      }
    }
  }
];

//円の描画について（表示されているパラメータを消したい・・・） 
  spec.signals[2].value = params["inner-padding-angle"];
  spec.signals[3].value = params["inner-radius"];

  spec.marks[0].encode = {
    "enter": {
      "fill": {"scale": "color", "field": "id"},
      "x": {"signal": "width / 2"},
      "y": {"signal": "height / 2"}
    },
    "update": {
      "startAngle": {"field": "startAngle"},
      "endAngle": {"field": "endAngle"},
      "padAngle": {"signal": "padAngle"},
      "innerRadius": {"signal": "innerRadius"},
      "outerRadius": {"signal": "width / 2"},
      "cornerRadius": {"signal": "cornerRadius"},
      "fill": {"scale": "color", "field": "id"}
    },
    "hover": {
      "fill": {"value": "var(--emphasized-color)"}
    }
  };
  

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
	"@id": "vega_piechart",
	"stanza:label": "Vega Piechart",
	"stanza:definition": "vega_wrapping",
	"stanza:type": "Stanza",
	"stanza:context": "Environment",
	"stanza:display": "Chart",
	"stanza:provider": "TogoStanza",
	"stanza:license": "MIT",
	"stanza:author": "TogoStanza",
	"stanza:address": "admin@biohackathon.org",
	"stanza:contributor": [
],
	"stanza:created": "2020-11-05",
	"stanza:updated": "2020-11-05",
	"stanza:parameter": [
	{
		"stanza:key": "src-url",
		"stanza:example": "https://vega.github.io/vega/examples/pie-chart.vg.json",
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
		"stanza:key": "autosize",
		"stanza:type": "number",
		"stanza:example": "none",
		"stanza:description": ""
	},
	{
		"stanza:key": "color-scheme",
		"stanza:example": "pastel2",
		"stanza:description": "pastel2",
		"stanza:type": "single-choice",
		"stanza:choice": [
			"pastel1",
			"pastel2",
			"set1"
		],
		"stanza:required": false
	},
	{
		"stanza:key": "inner-padding-angle",
		"stanza:example": "0",
		"stanza:description": "angle of inner padding.(0-0.1)",
		"stanza:required": false
	},
	{
		"stanza:key": "inner-radius",
		"stanza:example": "0",
		"stanza:description": "inner radius of your pie.(0-99)",
		"stanza:required": false
	}
],
	"stanza:about-link-placement": "bottom-right",
	"stanza:style": [
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
    + "</p>";
},"useData":true}]
];

var css = "/*\n\nYou can set up a global style here that is commonly used in each stanza.\n\nExample:\n\nh1 {\n  font-size: 24px;\n}\n\n*/\nmain {\n  padding: 1rem 2rem;\n}\n\np.greeting {\n  margin: 0;\n  font-size: 24px;\n  color: var(--greeting-color);\n  text-align: var(--greeting-align);\n}";

defineStanzaElement(vegaPiechart, {metadata, templates, css, url: import.meta.url});
//# sourceMappingURL=vega_piechart.js.map
